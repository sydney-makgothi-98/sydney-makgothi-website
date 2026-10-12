classdef geometricProperties

    properties
        x_array_outer
        y_array_outer
        x_array_inner
        y_array_inner
        thickness
    end

    methods

        % ================= CONSTRUCTOR =================
        function obj = geometricProperties(x_array_outer, y_array_outer, ...
                x_array_inner, y_array_inner, thickness)

            if nargin > 0
                obj.x_array_outer = x_array_outer;
                obj.y_array_outer = y_array_outer;
                obj.x_array_inner = x_array_inner;
                obj.y_array_inner = y_array_inner;
                obj.thickness = thickness;
            end
        end


        % ================= PAIRWISE DISTANCE =================
        function inertia_moment = inertia_moment_estimator(obj)

            n = length(obj.x_array_inner);
            d_min = zeros(1, n);

            for idx = 1:n
                r_outer = sqrt(obj.x_array_outer(idx)^2 + obj.y_array_outer(idx)^2);
                r_inner = sqrt(obj.x_array_inner(idx)^2 + obj.y_array_inner(idx)^2);
                d_min(idx) = r_outer - r_inner;
            end

            inertia_moment = (1/12) .* obj.thickness .* d_min.^3;
        end

         % ================= REMAPPING FUNCTION =================

        function [x_inner_remapped, y_inner_remapped] = remap_inner_to_outer(obj)

            
            x_inner_remapped = zeros(1, length(obj.x_array_outer));
            y_inner_remapped = zeros(1, length(obj.x_array_outer));

            for outer_idx = 1:length(obj.x_array_outer)

                dx = obj.x_array_outer(outer_idx) - obj.x_array_inner; % DEDUCTING OUTER INDEX FROM ALL INNER POINTS [X-DIR]
                dy = obj.y_array_outer(outer_idx) - obj.y_array_inner; % DEDUCTING OUTER INDEX FROM ALL INNER POINTS [Y-DIR]

                [~, min_idx] = min(dx.^2 + dy.^2);   % GET INDEX OF MIN DISTANCE BETWEEN INNER AND OUTER POINTS

                x_inner_remapped(outer_idx) = obj.x_array_inner(min_idx); % THEN GET X-VALUE OF REMAPPED INNER POINT BASED ON INDEX OF MINIMUM INNER POINT
                y_inner_remapped(outer_idx) = obj.y_array_inner(min_idx); % THEN GET Y-VALUE OF REMAPPED INNER POINT BASED ON INDEX OF MINIMUM INNER POINT

            end
        end

        % ================= MINIMUM DISTANCE APPROACH =================
        function [inertia_moment,y_bar] = inertia_moment_min_dist(obj)

            n = length(obj.x_array_inner);
            d_min = zeros(1, n);  % preallocate

            for outer_idx = 1:n
                x_outer_curr = obj.x_array_outer(outer_idx);
                y_outer_curr = obj.y_array_outer(outer_idx);

                d_array = zeros(1, n);  % <-- RESET HERE every outer iteration

                for inner_idx = 1:n
                    dx = x_outer_curr - obj.x_array_inner(inner_idx);
                    dy = y_outer_curr - obj.y_array_inner(inner_idx);
                    d_array(inner_idx) = sqrt(dx^2 + dy^2);  % index instead of concatenate
                end

                d_min(outer_idx) = min(d_array);
            end

            inertia_moment = (1/12) .* obj.thickness .* d_min.^3;
            y_bar = d_min;
        end



        % ================= MIDPLANE-ANCHORED PERPENDICULAR THICKNESS =================
        function [inertia_moment, c_array] = inertia_moment_midplane_perp(obj)

            x_mid = (obj.x_array_outer + obj.x_array_inner) / 2;
            y_mid = (obj.y_array_outer + obj.y_array_inner) / 2;

            n_mid = length(x_mid);

            d_to_outer = zeros(1, n_mid);
            d_to_inner = zeros(1, n_mid);

            for idx = 1:n_mid
                xm = x_mid(idx);
                ym = y_mid(idx);

                % xm is an instance of x_mid at a specified index value
                % ym is an instance of y_mid at a specified index value


                dx_out = xm - obj.x_array_outer;
                dy_out = ym - obj.y_array_outer;
                d_to_outer(idx) = min(sqrt(dx_out.^2 + dy_out.^2));

                dx_in  = xm - obj.x_array_inner;
                dy_in  = ym - obj.y_array_inner;
                d_to_inner(idx) = min(sqrt(dx_in.^2 + dy_in.^2));
            end

            d_wall = d_to_outer + d_to_inner;  % True local wall thickness

            inertia_moment = (1/12) .* obj.thickness .* d_wall.^3;
            c_array        = d_to_outer;       % Distance from midplane to outer surface
        end

        % ================= OUTER-TO-MIDPLANE PERPENDICULAR =================
        function [inertia_moment, c_array] = inertia_moment_outer_to_mid(obj)

            % Compute midplane once
            x_mid = (obj.x_array_outer + obj.x_array_inner) / 2;
            y_mid = (obj.y_array_outer + obj.y_array_inner) / 2;

            n = length(obj.x_array_outer);
            c_array = zeros(1, n);

            for outer_idx = 1:n

                % Fix one point on the outer surface
                x_fixed = obj.x_array_outer(outer_idx);
                y_fixed = obj.y_array_outer(outer_idx);

                % Compute distance from this fixed outer point to ALL midplane points
                dx = x_fixed - x_mid;
                dy = y_fixed - y_mid;
                d_all = sqrt(dx.^2 + dy.^2);

                % The minimum distance IS the perpendicular distance
                c_array(outer_idx) = min(d_all);

            end

            % Full wall thickness = 2*c (midplane sits between inner and outer)
            d_wall = 2 .* c_array;

            inertia_moment = (1/12) .* obj.thickness .* d_wall.^3;

        end
        % ================= PATH ESTIMATOR =================
        function [path_array, total_path_length] = path_estimator_midplane(obj)

            x_mid_array = (obj.x_array_outer + obj.x_array_inner) / 2;
            y_mid_array = (obj.y_array_outer + obj.y_array_inner) / 2;

            n = length(x_mid_array);
            path_array = zeros(1, n);
            total_path_length = 0;

            for idx = 1:(n - 1)

                path = sqrt( ...
                    (x_mid_array(idx+1) - x_mid_array(idx))^2 + ...
                    (y_mid_array(idx+1) - y_mid_array(idx))^2 );

                total_path_length = total_path_length + path;
                path_array(idx+1) = total_path_length;

            end
        end

        function [path_array, total_path_length] = path_estimator_general(obj,x_array,y_array)

            %THIS FUNCTION CAN ESTIMATE THE CIRCUMFERENTIAL PATH FOR ANY
            %GIVE X AND Y ARRAY

            n = length(x_array);
            path_array = zeros(1, n);
            total_path_length = 0;

            for idx = 1:(n - 1)

                path = sqrt( ...
                    (x_array(idx+1) - x_array(idx))^2 + ...
                    (y_array(idx+1) - y_array(idx))^2 );

                total_path_length = total_path_length + path;
                path_array(idx+1) = total_path_length;

            end
        end

        function [x_shift, y_shift, dx_out_AB, dy_out_AB] = point_shifter(obj,inner_pair_A, outer_pair_A,inner_pair_B, outer_pair_B)

            %INNER PAIR_A : AN ARRAY OF TWO POINTS, [X_INNER_A, Y_INNER_A]
            %OUTER PAIR_A : AN ARRAY OF TWO POINTS [X_OUTER_A, Y_OUTER_A]

            %INNER PAIR_B : AN ARRAY OF TWO POINTS, [X_INNER_B, Y_INNER_B]
            %OUTER PAIR_B : AN ARRAY OF TWO POINTS [X_OUTER_B, Y_OUTER_B]

            % ======================== INITIALIZATIONS ======================= %

            % dx_out_array = [] % AN ARRAY OF OUTER X-LENGTHS BETWEEN SUBEQUENT POINTS, SUCH AS A AND B
            % dy_out_array = [] % AN ARRAY OF OUTER Y-LENGTHS BETWEEN SUBEQUENT POINTS, SUCH AS A AND B
            % % THESE ARRAYS ARE IMPERATIVE IN THAT THEY WILL BE USED TO
            % % CALCULATE AREAS FOR PRESSURE COMPUTATION BETWEEN SUBSEQUENT
            % % POINTS

            % =========================== DISTANCES =========================== %

            % ================== CO-ORDINATE A =============== %

            x_out_A = outer_pair_A(1);
            y_out_A = outer_pair_A(2);

            x_in_A = inner_pair_A(1);
            y_in_A = inner_pair_A(2);

            % ================== CO-ORDINATE B =============== %

            x_out_B = outer_pair_B(1);
            y_out_B = outer_pair_B(2);

            x_in_B = inner_pair_B(1);
            y_in_B = inner_pair_B(2);

            % ================== SPANS BETWEEN A AND B =============== %

            dy_out_AB = y_out_A - y_out_B;
            dx_out_AB = x_out_A - x_out_B;

            dy_in_AB = y_in_A - y_in_B;
            dx_in_AB = x_in_A - x_in_B;

            % ================== MID-SPANS BETWEEN A AND B =============== %

            x_mid_out_AB = 0.5 * dx_out_AB;
            y_mid_out_AB = 0.5 * dy_out_AB;

            x_mid_in_AB = 0.5 * dx_in_AB
            y_mid_in_AB = 0.5 * dy_in_AB


            % ================== DISTANCES OF CENTERS =============== %

            delta_x_AB = x_mid_out_AB - x_mid_in_AB; % LENGTH OF X-SPAN FROM LEFT TO RIGHT OF CENTER POINT
            delta_y_AB = y_mid_out_AB - y_mid_in_AB; % HIGHT OF CENTER POINT

            epsilon_x_AB = 0.5 * delta_x_AB;
            epsilon_y_AB = 0.5 * delta_y_AB;

            % ================== LOCATION OF SHIFTED PRESSURE POINT =============== %

            x_shift = x_mid_out_AB - epsilon_x_AB;
            y_shift = -(y_mid_out_AB + epsilon_y_AB); % IT IS MAKE NEGATIVE BECAUSE ALL POINTS ARE BELOW THE REFENCE POINT

            % ONE SIMPLIFYING ASSUMPTION, THE POINTS SHOULD HAVE THE SAME
            % SHIFTED DISTANCES, MORE OR LESS. SO IT CAN BE FAIR FOR US TO
            % ASSUME X_SHIFTED AND Y_SHIFTED ARE CONSTANTS THROUGHOUT,
            % THEIR ACTUAL LOCATIONS WILL DEPEND ON FAR OFF THEY ARE FROM
            % THE REFERENCE AXIS

        end

    end
end