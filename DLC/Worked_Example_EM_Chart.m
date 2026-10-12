
%=================== README - START ===================== %

%!!! THIS SEP CHART ONLY APPLIES TO PROPELLER DRIVEN AIRCRAFT

%-------- HOW TO USE --------- %

% 1. This function only takes in inputs as a structure array
% 2. Structure array is defined using the . notation
% 3. The inputs that must go into the array are 

% SEP Array : An array of SEP Values you want the chart to be geared to
% Radius Array : An array of several turn radii that you want to include in
% your chart.
% Mass : Mass of the aircraft
% Wing Area : Wing Area of the Aircraft
% Cdo : Parasite drag of the aircraft
% Efficiency : Propeller efficiency
% ... And so on. All inputs required for the function to work can be found
% in the worked example below

% A structure array is defined like a dictionary in Python. It works with
% Key value pairs 

% Example
% user_details.name = 'Syd' 
% user_detail.phone_number = 065 264 9871
% disp(user_details)
% result will be : 
% struct with the following fields
% name : Syd
% phone_number : 065 264 9871


%=================== README - END ===================== %


%% WORKED EXAMPLE ON HOW TO USE FUNCTION 
% In this case, the structure array is defined as input_data

% ===================== Ficticuous Aircraft  EM or SEP CHART ===================== %


input_data.SEP_array     = [2000 1000 500 0 -300];   % ft/min
input_data.Radius_array  = [100 200 3000 600 1000];           % m
input_data.Mass          = 1000;    % kg
input_data.Wing_Area     = 8.1;      % m^2
input_data.Cdo           = 0.025;
input_data.Cl_max        = 1.66;
input_data.Wing_span     = 8.06;      % m
input_data.Oswald_Factor = 0.83;
input_data.Efficiency    = 0.65;
input_data.HP_engine     = 0250;     % hp
input_data.Sigma         = 1;        % density ratio rho/rho_SL

% Optional fields, e.g.
% input_data.nLimit = 6;  input_data.nLines = [2 3 4 6];  input_data.ShadeRegions = false;

r = EM_Chart(input_data);
input_data

% ===================== Ficticuous Aircraft EM or SEP CHART ===================== %





% ===================== RC PLANE SEP ===================== %

% One E-M chart for one altitude. Change input_data.Sigma (and rerun) for another altitude.
% Example: 1.3 m span electric RC sport plane.
% input_data.SEP_array     = [2000 1000 500 0 -300];   % ft/min
% input_data.Radius_array  = [6 8 10 15 25];           % m
% input_data.Mass          = 1.075;    % kg
% input_data.Wing_Area     = 0.3;      % m^2
% input_data.Cdo           = 0.05;
% input_data.Cl_max        = 1.1;
% input_data.Wing_span     = 1.3;      % m
% input_data.Oswald_Factor = 0.6;
% input_data.Efficiency    = 0.65;
% input_data.HP_engine     = 0.23;     % hp
% input_data.Sigma         = 1;        % density ratio rho/rho_SL
% 
% % Optional fields, e.g.
% % input_data.nLimit = 6;  input_data.nLines = [2 3 4 6];  input_data.ShadeRegions = false;
% 
% r = EM_Chart(in);