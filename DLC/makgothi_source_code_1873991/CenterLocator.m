classdef CenterLocator
    % CENTERLOCATOR Calculates geometric properties for arc positioning
    %   This class provides methods to compute angles, distances, and
    %   coordinates for positioning circular arcs based on geometric
    %   constraints.
    
    properties
        R_corner  % Corner radius
        R_out     % Outer radius
    end
    
    methods
        % Constructor
        function obj = CenterLocator(R_corner, R_out)
            % CENTERLOCATOR Construct an instance of this class
            %   obj = CenterLocator(R_corner, R_out)
            %
            %   Inputs:
            %       R_corner - Corner radius
            %       R_out    - Outer radius
            
            if nargin > 0
                obj.R_corner = R_corner;
                obj.R_out = R_out;
            end
        end
        
        % Method to find gamma and omega angles
        function [gamma, omega] = gammaOmegaFinder(obj, theta)
            % GAMMAOMEGAFINDER Calculate gamma and omega angles
            %   [gamma, omega] = gammaOmegaFinder(obj, theta)
            %
            %   Inputs:
            %       theta - Input angle (radians)
            %
            %   Outputs:
            %       gamma - Calculated gamma angle (radians)
            %       omega - Calculated omega angle (radians)
            
            beta = 0.5 * theta;
            gamma = asin(obj.R_corner * sin(beta) / obj.R_out);
            omega = pi - (beta + gamma);
        end
        
        % Method to calculate offset distance
        function d = offsetDistance(obj, beta, omega)
            % OFFSETDISTANCE Calculate offset distance
            %   d = offsetDistance(obj, beta, omega)
            %
            %   Inputs:
            %       beta  - Beta angle (radians)
            %       omega - Omega angle (radians)
            %
            %   Outputs:
            %       d - Offset distance
            
            d = sin(omega) * obj.R_out / sin(beta);
        end
        
        % Method to calculate outer radius coordinates
        function [xc, yc] = outerRadiusCoords(obj, d, beta)
            % OUTERRADIUSCOORDS Calculate center coordinates
            %   [xc, yc] = outerRadiusCoords(obj, d, beta)
            %
            %   Inputs:
            %       d     - Offset distance
            %       beta  - Beta angle (radians)
            %
            %   Outputs:
            %       xc - x-coordinate of center
            %       yc - y-coordinate of center
            yc = d * cos(beta);
            xc = d * sin(beta);
        end
        
        % Convenience method to calculate all at once
        function [xc, yc, gamma, omega] = calculateCenter(obj, theta)
            % CALCULATECENTER Calculate center coordinates in one call
            %   [xc, yc, gamma, omega] = calculateCenter(obj, theta)
            %
            %   Inputs:
            %       theta - Input angle (radians)
            %
            %   Outputs:
            %       xc    - x-coordinate of center
            %       yc    - y-coordinate of center
            %       gamma - Gamma angle (radians)
            %       omega - Omega angle (radians)
            
            [gamma, omega] = obj.gammaOmegaFinder(theta);
            beta = 0.5 * theta;
            d = obj.offsetDistance(beta, omega);
            [xc, yc] = obj.outerRadiusCoords(d, beta);
        end
    end
end