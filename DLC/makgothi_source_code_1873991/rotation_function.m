function [x_rotated, y_rotated] = rotation_function (theta, xy_point)

% DOC STRING %

% THETA IS THE ANGLE THAT WE WISH TO ROTATE BY
% XY_POINT IS THE POINT OF INTEREST BEING ROTATED, AND MUST BE A COLOUMN
% VECTOR


DCM = [cos(theta)  sin(theta); -sin(theta)  cos(theta)];

if iscolumn(xy_point) ~= 1
    error('Please input a column vector for the xy_point input')
end

rotated_matrix = DCM * xy_point;

x_rotated = rotated_matrix(1);
y_rotated = rotated_matrix(2);


end