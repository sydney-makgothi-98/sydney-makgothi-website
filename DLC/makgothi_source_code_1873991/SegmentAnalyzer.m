% classdef SegmentAnalyzer
%     properties
%         numbers
%         n_segments
%         data_matrix    = []          % ← initialise explicitly
%         bottom_segment_array = []    % ← initialise explicitly
%     end
% 
%     methods
%         function obj = SegmentAnalyzer(numbers, n_segments)
%             obj.numbers    = numbers(:);
%             obj.n_segments = n_segments;
%         end
% 
%         function obj = process(obj)
%             usable_length = floor(length(obj.numbers)/obj.n_segments) * obj.n_segments;
%             if usable_length == 0
%                 error('SegmentAnalyzer:badInput', ...
%                       'Not enough data points for %d segments.', obj.n_segments);
%             end
%             numbers_trimmed = obj.numbers(1:usable_length);
%             segment_length  = usable_length / obj.n_segments;
%             obj.data_matrix = reshape(numbers_trimmed, segment_length, obj.n_segments);
% 
%             if mod(obj.n_segments, 2) == 0
%                 mid_cols = [obj.n_segments/2, obj.n_segments/2 + 1];
%             else
%                 mid_cols = (obj.n_segments + 1) / 2;
%             end
%             bottom_temp              = obj.data_matrix(:, mid_cols);
%             obj.bottom_segment_array = bottom_temp(:).';
%         end
% 
%         function [first_segment, initial_point, midpoint_first_segment, midpoint_bottom_segment] = getData(obj)
%             if isempty(obj.data_matrix)
%                 error('SegmentAnalyzer:notProcessed', ...
%                       'Call .process() before .getData().');
%             end
%             first_segment           = obj.data_matrix(:, 1);
%             initial_point           = obj.data_matrix(1, 1);
%             midpoint_first_segment  = first_segment(round(end/2));
%             midpoint_bottom_segment = obj.bottom_segment_array(round(end/2));
%         end
%     end
% end











classdef SegmentAnalyzer
    % SegmentAnalyzer - Extracts data from equally divided segments of a 1D signal
    % Useful for shapes defined by points (e.g. closed contours with 2000 points)
    
    properties
        numbers               % Input data vector (column)
        n_segments            % Number of segments to divide into
        data_matrix = []      % Reshaped matrix: rows = points per segment, cols = segments
        bottom_segment_array = []  % Flattened array of the selected bottom segment(s)
    end
    
    methods
        function obj = SegmentAnalyzer(numbers, n_segments)
            % Constructor
            if ~isvector(numbers) || ~isnumeric(numbers)
                error('SegmentAnalyzer:invalidInput', 'numbers must be a numeric vector.');
            end
            if nargin < 2 || ~isscalar(n_segments) || n_segments < 1 || floor(n_segments) ~= n_segments
                error('SegmentAnalyzer:invalidInput', 'n_segments must be a positive integer.');
            end
            
            obj.numbers = numbers(:);      % Ensure column vector
            obj.n_segments = n_segments;
        end
        
        function obj = process(obj)
            % Divide the data into n_segments and extract the bottom-most segment
            
            usable_length = floor(length(obj.numbers) / obj.n_segments) * obj.n_segments;
            if usable_length == 0
                error('SegmentAnalyzer:badInput', ...
                    'Not enough data points for %d segments.', obj.n_segments);
            end
            
            numbers_trimmed = obj.numbers(1:usable_length);
            segment_length = usable_length / obj.n_segments;
            
            % Reshape: each column = one segment
            obj.data_matrix = reshape(numbers_trimmed, segment_length, obj.n_segments);
            
            % Select the middle column(s) — for odd n_segments this is the true center
            if mod(obj.n_segments, 2) == 0
                mid_cols = [obj.n_segments/2, obj.n_segments/2 + 1];
            else
                mid_cols = (obj.n_segments + 1) / 2;   % e.g. 3 when n_segments=5
            end
            
            bottom_temp = obj.data_matrix(:, mid_cols);
            obj.bottom_segment_array = bottom_temp(:).';   % row vector
        end
        
        function [first_segment, initial_point, midpoint_first_segment, midpoint_bottom_segment] = getData(obj)
            % Return key data points
            if isempty(obj.data_matrix)
                error('SegmentAnalyzer:notProcessed', ...
                    'Call .process() before calling getData().');
            end
            
            first_segment         = obj.data_matrix(:, 1);
            initial_point         = obj.data_matrix(1, 1);
            midpoint_first_segment = first_segment(ceil(end/2));
            
            % Middle of the bottom segment
            midpoint_bottom_segment = obj.bottom_segment_array(ceil(end/2));
        end
        
        % Optional: helpful debugging method
        function printInfo(obj)
            if isempty(obj.data_matrix)
                disp('Data not yet processed. Call process() first.');
                return;
            end
            seg_len = size(obj.data_matrix, 1);
            disp(['Total points used: ' num2str(length(obj.numbers))]);
            disp(['Segments: ' num2str(obj.n_segments) ' | Points per segment: ' num2str(seg_len)]);
            disp(['Selected bottom segment column(s): ' num2str((obj.n_segments+1)/2) ' (for odd case)']);
            disp(['Middle value of bottom segment: ' num2str(obj.bottom_segment_array(ceil(end/2)))]);
        end
    end
end