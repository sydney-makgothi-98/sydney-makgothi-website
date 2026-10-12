function [xarc, yarc] = arc_sketcher(pt1, pt2, pt3, npoints)
% ARC_SKETCHER   Fit circle through 3 points and generate arc from pt1 → pt3
%   passing "through" pt2 (the bulge/middle point)
%
%   [xarc, yarc] = arc_sketcher(pt1, pt2, pt3)
%   [...]        = arc_sketcher(pt1, pt2, pt3, 150)
%
%   Returns arc from pt1 to pt3 going the way that passes near pt2

    if nargin < 4
        npoints = 120;
    end

    % Extract coordinates
    x1 = pt1(1);  y1 = pt1(2);
    x2 = pt2(1);  y2 = pt2(2);
    x3 = pt3(1);  y3 = pt3(2);

    % Determinant / area term (twice signed area of triangle)
    A = 2 * (x1*(y2 - y3) + x2*(y3 - y1) + x3*(y1 - y2));

    if abs(A) < 1e-8
        error('Points are collinear → no unique circle exists.');
    end

    % Circle center (standard 3-point circle formula)
    xc = ((x1^2 + y1^2)*(y2 - y3) + (x2^2 + y2^2)*(y3 - y1) + (x3^2 + y3^2)*(y1 - y2)) / A;
    yc = ((x1^2 + y1^2)*(x3 - x2) + (x2^2 + y2^2)*(x1 - x3) + (x3^2 + y3^2)*(x2 - x1)) / A;

    % Radius
    r = sqrt( (x1 - xc)^2 + (y1 - yc)^2 );

    % Angles from center
    th1 = atan2(y1 - yc, x1 - xc);
    th2 = atan2(y2 - yc, x2 - xc);
    th3 = atan2(y3 - yc, x3 - xc);

    % Determine oriented angular span (which way goes through pt2)
    % Compute signed angular differences
    d12 = mod(th2 - th1 + pi, 2*pi) - pi;   % signed -pi → +pi
    d23 = mod(th3 - th2 + pi, 2*pi) - pi;

    total_dtheta = mod(th3 - th1 + 3*pi, 2*pi) - pi;  % best signed estimate

    % If the middle point is on the "long" side, flip direction
    if abs(total_dtheta) > pi
        total_dtheta = total_dtheta - sign(total_dtheta)*2*pi;
    end

    % Final safety: make sure pt2 is "between" in angle
    th_mid = th1 + total_dtheta/2;
    d_mid_to_th2 = mod(th2 - th_mid + pi, 2*pi) - pi;
    if abs(d_mid_to_th2) > pi/2   % too far → probably wrong direction
        total_dtheta = -total_dtheta;
    end

    % Generate angles
    theta = linspace(th1, th1 + total_dtheta, npoints);

    % Arc points
    xarc = xc + r * cos(theta);
    yarc = yc + r * sin(theta);

    % % Optional: diagnostic output
    % fprintf('Center: (%.3f, %.3f)   Radius: %.3f\n', xc, yc, r);
    % fprintf('Start angle: %.3f rad   End angle: %.3f rad   Span: %.3f rad\n', ...
    %         th1, th1+total_dtheta, total_dtheta);
    % 
    % % Check how close the arc passes to pt2
    % dist_to_pt2 = min(sqrt( (xarc-x2).^2 + (yarc-y2).^2 ));
    % fprintf('Closest distance from arc to middle point: %.4f\n', dist_to_pt2);
end