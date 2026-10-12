function out = EM_Chart(in)
%EM_CHART  Energy-manoeuvrability (E-M) chart: turn rate vs airspeed with SEP contours.
%
%   out = EM_Chart(in)
%
%   Draws one E-M chart for one altitude, set by the density ratio in.Sigma.
%   All inputs are fields of the struct in.
%
%   Required fields (SI units, same as the Excel model):
%     SEP_array      SEP contours to draw [ft/min], e.g. [2000 1000 500 0 -300]
%     Radius_array   constant turn-radius lines to draw [m], e.g. [400 600 800 1000]
%                    ([] for none)
%     Mass           aircraft mass [kg]
%     Wing_Area      wing reference area S [m^2]
%     Cdo            zero-lift drag coefficient CD0 [-]
%     Cl_max         maximum lift coefficient [-]
%     Wing_span      wing span b [m]
%     Oswald_Factor  Oswald span efficiency e [-]
%     Efficiency     propeller efficiency eta_p [-]
%     HP_engine      engine shaft power [hp]
%     Sigma          density ratio rho/rho_SL [-] (0.8761 in the Excel model)
%
%   Optional fields (defaults are used for any that are missing):
%     nLimit         structural limit load factor (default 5)
%     nLines         constant load-factor reference lines (default [1.5 2 3 4 5])
%     VRange         [Vmin Vmax] plot range [m/s] (default: automatic)
%     HPUnit         "metric" (1 hp = 75 kgf.m/s, as in Excel) or "imperial" (745.7 W)
%     ShadeRegions   true: shade each region of the envelope where SEP >= value in its own
%                    colour (default true)
%     Plot           false to compute the results without drawing
%
%   Output struct fields: V_stall, V_corner, omega_inst_max, V_sustained,
%   omega_sus_max, n_sustained, V_max_level, contours (V and omega for each SEP,
%   plus .outline: closed {V; omega} pieces of the region where SEP >= value).

%% Inputs
required = {'SEP_array', 'Radius_array', 'Mass', 'Wing_Area', 'Cdo', 'Cl_max', 'Wing_span', ...
            'Oswald_Factor', 'Efficiency', 'HP_engine', 'Sigma'};
missing = required(~isfield(in, required));
if ~isempty(missing)
    error('EM_Chart:missingInput', 'Missing input field(s): %s', strjoin(missing, ', '));
end
defaults = struct('nLimit', 5, 'nLines', [1.5 2 3 4 5], 'VRange', [], ...
                  'HPUnit', "metric", 'ShadeRegions', true, 'Plot', true);
for f = fieldnames(defaults)'
    if ~isfield(in, f{1}), in.(f{1}) = defaults.(f{1}); end
end

for f = required(3:end)
    validateattributes(in.(f{1}), {'numeric'}, {'scalar', 'positive', 'finite'}, 'EM_Chart', f{1});
end
validateattributes(in.SEP_array, {'numeric'}, {'vector', 'nonempty', 'finite'}, 'EM_Chart', 'SEP_array');
if ~isempty(in.Radius_array)
    validateattributes(in.Radius_array, {'numeric'}, {'vector', 'positive', 'finite'}, 'EM_Chart', 'Radius_array');
end
validateattributes(in.nLimit, {'numeric'}, {'scalar', '>', 1}, 'EM_Chart', 'nLimit');
in.HPUnit = string(validatestring(in.HPUnit, {'metric', 'imperial'}, 'EM_Chart', 'HPUnit'));

SEP_array     = in.SEP_array(:)';
Mass          = in.Mass;
Wing_Area     = in.Wing_Area;
Cdo           = in.Cdo;
Cl_max        = in.Cl_max;
Wing_span     = in.Wing_span;
Oswald_Factor = in.Oswald_Factor;
Efficiency    = in.Efficiency;
HP_engine     = in.HP_engine;

%% Constants
g      = 9.81;          % gravity [m/s^2]
rho_SL = 1.225;         % sea-level density [kg/m^3]
MS2FPM = 196.85;        % m/s -> ft/min
if in.HPUnit == "metric"
    HP2W = 75*g;        % metric horsepower: 75 kgf.m/s (as in the Excel model)
else
    HP2W = 745.7;       % imperial horsepower
end

%% Derived quantities
sigma = in.Sigma;
rho  = rho_SL*sigma;                    % air density [kg/m^3]
W    = Mass*g;                          % weight [N]
S    = Wing_Area;
AR   = Wing_span^2/S;                   % aspect ratio
K    = 1/(pi*AR*Oswald_Factor);         % induced drag factor
Pav  = HP_engine*HP2W*Efficiency;       % power available [W], thrust T = Pav/V
nLim = in.nLimit;

V_stall  = sqrt(2*W/(rho*S*Cl_max));    % 1 g stall speed
V_corner = V_stall*sqrt(nLim);          % stall line meets the structural limit

% Turn rate [deg/s] at speed V and load factor n (NaN where n < 1)
turnRate = @(V, n) rad2deg(g*sqrt(n.^2 - 1)./V);

% Load factor that gives a specific excess power Ps [m/s] at speed V:
%   Ps*W = Pav - q*S*CD0*V - K*n^2*W^2*V/(q*S)
nAtSEP = @(V, Ps) sqrt(max((Pav - 0.5*rho*V.^3*S*Cdo - Ps*W) ...
                           .*(0.5*rho*V.^2*S)./(K*W^2*V), 0));

% Maximum level-flight speed (SEP = 0 at n = 1)
Vg = linspace(V_stall, 600, 6000);
iLast = find(nAtSEP(Vg, 0) >= 1, 1, 'last');
if isempty(iLast) || iLast == numel(Vg)
    V_max_level = NaN;
    warning('EM_Chart:noLevelFlight', 'Could not find a maximum level-flight speed.');
else
    V_max_level = fzero(@(v) nAtSEP(v, 0) - 1, Vg([iLast iLast+1]));
end

%% Speed grid and flight envelope
if isempty(in.VRange)
    vTop = max([V_max_level, V_corner]*1.1, [], 'omitnan');
    VRange = [0.9*V_stall, vTop];
else
    VRange = in.VRange;
end
V      = linspace(VRange(1), VRange(2), 2000);
nStall = 0.5*rho*V.^2*S*Cl_max/W;
nEnv   = min(nStall, nLim);             % highest load factor the aircraft can pull
wEnv   = turnRate(V, nEnv);
wEnv(nEnv < 1) = NaN;

%% SEP contours
SEPs = sort(SEP_array, 'descend');
contours = struct('SEP_ftmin', {}, 'V', {}, 'omega', {}, 'omega_inside', {}, 'outline', {});
for i = 1:numel(SEPs)
    nSEP = nAtSEP(V, SEPs(i)/MS2FPM);
    n = nSEP;
    n(n < 1) = NaN;                     % this SEP is not reachable in a level turn
    w   = turnRate(V, n);
    wIn = w;
    wIn(n > nEnv) = NaN;                % beyond the stall line or structural limit
    % Region where SEP >= this value inside the envelope: below the SEP line, capped by
    % the stall line and structural limit, closed along omega = 0
    outline = closedOutline(V, min(nSEP, nEnv), turnRate);
    contours(i) = struct('SEP_ftmin', SEPs(i), 'V', V, 'omega', w, 'omega_inside', wIn, ...
                         'outline', {outline});
    if all(isnan(w))
        warning('EM_Chart:emptySEP', 'SEP = %g ft/min is not reachable in level turning flight.', SEPs(i));
    end
end

%% Sustained and instantaneous turn performance
nSus = min(nAtSEP(V, 0), nEnv);         % SEP = 0, capped by the envelope
wSus = turnRate(V, nSus);
wSus(nSus < 1) = NaN;
[omega_sus_max, iSus] = max(wSus);
omega_inst_max = turnRate(V_corner, nLim);

out = struct('V_stall', V_stall, 'V_corner', V_corner, 'omega_inst_max', omega_inst_max, ...
             'V_sustained', V(iSus), 'omega_sus_max', omega_sus_max, 'n_sustained', nSus(iSus), ...
             'V_max_level', V_max_level, 'density_ratio', sigma, 'aspect_ratio', AR, ...
             'contours', contours);

fprintf('\nE-M chart summary (sigma = %.4f, AR = %.2f)\n', sigma, AR);
fprintf('  1 g stall speed        %7.2f m/s\n', V_stall);
fprintf('  Corner speed (%g g)     %7.2f m/s\n', nLim, V_corner);
fprintf('  Max instantaneous turn %7.2f deg/s\n', omega_inst_max);
fprintf('  Max sustained turn     %7.2f deg/s at %.1f m/s (n = %.2f)\n', omega_sus_max, V(iSus), nSus(iSus));
fprintf('  Max level speed        %7.2f m/s\n\n', V_max_level);

if ~in.Plot, return; end

%% Plot
fig = figure('Color', 'w', 'Name', 'E-M Chart', 'Position', [100 100 1100 640]);
ax  = axes(fig);
hold(ax, 'on'); grid(ax, 'on'); box(ax, 'on');
yTop = 1.15*max(wEnv, [], 'omitnan');
refC = [0.72 0.72 0.72];

% Flight envelope shading
m = ~isnan(wEnv);
patch(ax, [V(m) fliplr(V(m))], [wEnv(m) zeros(1, nnz(m))], [0.49 0.83 0.99], ...
      'FaceAlpha', 0.08, 'EdgeColor', 'none', 'HandleVisibility', 'off');

% SEP colours: a distinct colour per SEP value (cycles if there are more than 8)
pal  = [0.17 0.63 0.17;   % green
        1.00 0.50 0.05;   % orange
        0.58 0.40 0.74;   % purple
        0.09 0.75 0.81;   % cyan
        0.89 0.47 0.76;   % pink
        0.55 0.34 0.29;   % brown
        0.74 0.74 0.13;   % olive
        0.25 0.25 0.25];  % dark grey
cmap = pal(mod(0:numel(SEPs)-1, size(pal, 1)) + 1, :);

% SEP regions, outermost (lowest SEP) first so each visible band keeps its own colour.
% Within a shaded colour, the SEP available is at least that colour's value.
hSEP = gobjects(1, numel(contours));
if in.ShadeRegions
    for i = numel(contours):-1:1
        name = sprintf('SEP \\geq %s ft/min', strrep(sprintf('%+g', contours(i).SEP_ftmin), '+0', '0'));
        for k = 1:numel(contours(i).outline)
            h = patch(ax, contours(i).outline{k}(1,:), contours(i).outline{k}(2,:), ...
                      0.65 + 0.35*cmap(i,:), 'EdgeColor', 'none', 'DisplayName', name);
            if k == 1, hSEP(i) = h; end
        end
    end
end

% Constant load-factor lines (from their stall speed onwards)
for nn = in.nLines(in.nLines > 1 & in.nLines ~= nLim)   % the limit line is drawn in red
    Vn = V(V >= V_stall*sqrt(nn));
    if isempty(Vn), continue; end
    plot(ax, Vn, turnRate(Vn, nn), '-', 'Color', refC, 'LineWidth', 0.8, 'HandleVisibility', 'off');
    text(ax, Vn(end), turnRate(Vn(end), nn), sprintf(' %g g', nn), 'Color', refC*0.7, 'FontSize', 8);
end

% Constant turn-radius lines: omega = V/R
for R = in.Radius_array(:)'
    wR = rad2deg(V/R);
    k  = wR <= yTop;
    if ~any(k), continue; end
    plot(ax, V(k), wR(k), '--', 'Color', refC, 'LineWidth', 0.8, 'HandleVisibility', 'off');
    iEnd = find(k, 1, 'last');
    vAlign = 'top';                         % line leaves through the top of the plot
    if iEnd == numel(V), vAlign = 'bottom'; end   % line leaves through the right edge
    text(ax, V(iEnd), wR(iEnd), sprintf('R = %g m ', R), 'Color', refC*0.7, 'FontSize', 8, ...
         'HorizontalAlignment', 'right', 'VerticalAlignment', vAlign);
end

% SEP lines, from the edge of the envelope down to omega = 0
for i = 1:numel(contours)
    c    = contours(i);
    lw   = 1.6 + 0.8*(c.SEP_ftmin == 0);    % SEP = 0 is the sustained-turn boundary
    name = sprintf('SEP %s ft/min', strrep(sprintf('%+g', c.SEP_ftmin), '+0', '0'));
    % Faint dotted continuation of the SEP line outside the envelope
    wOut = c.omega;
    wOut(~isnan(c.omega_inside)) = NaN;
    plot(ax, c.V, wOut, ':', 'Color', [cmap(i,:) 0.5], 'LineWidth', 1, 'HandleVisibility', 'off');
    h = plot(ax, c.V, c.omega_inside, '-', 'Color', cmap(i,:), 'LineWidth', lw, 'DisplayName', name);
    if ~in.ShadeRegions, hSEP(i) = h; end
end

% Stall line and structural limit
Vst = linspace(V_stall, min(V_corner, VRange(2)), 300);
hEnv = plot(ax, Vst, turnRate(Vst, 0.5*rho*Vst.^2*S*Cl_max/W), 'Color', [0.20 0.60 0.86], ...
            'LineWidth', 2.2, 'DisplayName', 'Stall line');
if V_corner < VRange(2)
    Vlim = linspace(V_corner, VRange(2), 300);
    hEnv(2) = plot(ax, Vlim, turnRate(Vlim, nLim), 'Color', [0.86 0.15 0.15], 'LineWidth', 2.2, ...
                   'DisplayName', sprintf('Structural limit (%g g)', nLim));
end

% Key points
hPts = gobjects(0);
if V_corner <= VRange(2)
    hPts(end+1) = plot(ax, V_corner, omega_inst_max, 'o', 'MarkerSize', 7, 'MarkerFaceColor', [0.86 0.15 0.15], ...
         'MarkerEdgeColor', 'k', 'DisplayName', sprintf('Corner: %.1f m/s, %.1f deg/s', V_corner, omega_inst_max));
end
hPts(end+1) = plot(ax, out.V_sustained, omega_sus_max, 's', 'MarkerSize', 7, 'MarkerFaceColor', [0.55 0.35 0.85], ...
     'MarkerEdgeColor', 'k', 'DisplayName', sprintf('Max sustained: %.1f deg/s', omega_sus_max));

xlim(ax, VRange); ylim(ax, [0 yTop]);
xlabel(ax, 'Velocity [m/s]');
ylabel(ax, 'Turn rate \omega [deg/s]');
title(ax, 'Energy-Manoeuvrability Chart');
subtitle(ax, {sprintf('m = %g kg,  S = %g m^2,  b = %g m,  P = %g hp,  \\eta_p = %g', ...
                      Mass, S, Wing_span, HP_engine, Efficiency), ...
               sprintf('C_{D0} = %g,  C_{L,max} = %g,  e = %g,  \\sigma = %.4f', ...
                      Cdo, Cl_max, Oswald_Factor, sigma)});
hSEP = hSEP(isgraphics(hSEP));
legend(ax, [hEnv hSEP hPts], 'Location', 'eastoutside');
hold(ax, 'off');
end

function outline = closedOutline(V, nTop, turnRate)
%CLOSEDOUTLINE  Closed {V; omega} pieces of the region where the load factor nTop >= 1.
%   The top edge is omega(V, nTop); each piece closes along omega = 0, with its ends
%   placed exactly where nTop crosses 1.
outline = {};
inside  = nTop >= 1;
edges   = diff([false inside false]);
starts  = find(edges == 1);
stops   = find(edges == -1) - 1;
for k = 1:numel(starts)
    a = starts(k);
    b = stops(k);
    Va = V(a);
    Vb = V(b);
    if a > 1,         Va = interp1(nTop([a-1 a]), V([a-1 a]), 1); end
    if b < numel(V),  Vb = interp1(nTop([b b+1]), V([b b+1]), 1); end
    Vk = [Va, V(a:b), Vb];
    wk = [0, turnRate(V(a:b), nTop(a:b)), 0];
    outline{end+1} = [Vk; wk]; %#ok<AGROW>
end
end