
% Enhanced function: finds middle segment + extracts the central value(s)
function [middle_value] = find_middle(A, segments)
    N = length(A);
    
    % Divide array into segments as evenly as possible
    breaks = round(linspace(0, N, segments + 1));
    start_idx = breaks(1:segments) + 1;
    end_idx   = breaks(2:segments + 1);
    
    if mod(segments, 2) == 1
        % Odd segments → single central segment
        mid_seg = (segments + 1) / 2;
        mid_start = start_idx(mid_seg);
        mid_end   = end_idx(mid_seg);
        % disp(['For ' num2str(segments) ' segments (odd): Middle is the ' num2str(mid_seg) 'th segment']);
    else
        % Even segments → mixture of two central segments
        mid_seg1 = segments / 2;
        mid_seg2 = segments / 2 + 1;
        mid_start = start_idx(mid_seg1);
        mid_end   = end_idx(mid_seg2);
        % disp(['For ' num2str(segments) ' segments (even): Middle is mixture of ' num2str(mid_seg1) 'th and ' num2str(mid_seg2) 'th segments']);
    end
    
    middle_array = A(mid_start : mid_end);
    
    % === NEW: Extract the middle value(s) from middle_array ===
    len = length(middle_array);
    if mod(len, 2) == 1
        % Odd length → single middle value
        mid_pos = (len + 1) / 2;
        middle_value = middle_array(mid_pos);
        % disp(['Middle array length: ' num2str(len) ' (odd) → Center value = ' num2str(middle_value)]);
    else
        % Even length → two central values
        mid_pos1 = len / 2;
        mid_pos2 = len / 2 + 1;
        middle_value = [middle_array(mid_pos1), middle_array(mid_pos2)];
        % disp(['Middle array length: ' num2str(len) ' (even) → Center values = ' num2str(middle_value(1)) ' and ' num2str(middle_value(2))]);
    end

    if length(middle_value) > 1

        middle_value = middle_value(1);

    end
end



