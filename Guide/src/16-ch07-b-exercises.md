:::check
1. What is the difference between retained-mode and immediate-mode graphics? Which is SVG, and which is canvas?
2. In a canvas, which way does the y axis point? What must a chart do to plot values upwards?
3. What is the purpose of `ctx.save()` and `ctx.restore()`?
4. List the coordinate spaces a 3D point passes through, from model to screen.
5. State the perspective projection formulas for x_ndc and y_ndc, and explain why distant objects look smaller.
6. What is z-fighting and how do you reduce it?
7. State Lambert's law. What does an environment map add to a physically based material?
:::

:::problems
1. A camera has a vertical field of view of 60 degrees and a 1280 by 720 canvas. A point is at camera-space position (−0.2, 0.1, −1.0). Find its pixel position.
2. For the same camera, how far does a point at (0.5, 0, −z) have to be from the camera for its x pixel position to be within 10 pixels of the centre? (Hint: find the x_ndc that corresponds to 10 pixels.)
3. Rotating a point about the y axis by an angle θ in three.js gives x′ = x cos θ + z sin θ and z′ = −x sin θ + z cos θ. Where does the point (1, 0, 0) go after a rotation of 90 degrees? Where does the forward direction of a robot (x axis) point after a yaw of 30 degrees?
4. A scene contains 480 meshes. Each costs 0.02 ms of main-thread time to prepare as a draw call. How long do the draw calls take? If merging by material reduces the scene to 48 meshes, how much time is saved per frame, and what is the saving as a fraction of a 60 hertz frame budget?
5. A surface has the normal (0, 0, 1). Compute its brightness under lights from the directions (0, 0, 1), (0, 0.6, 0.8) and (1, 0, 0). Which of these lights leaves it black?
6. With the near plane at 0.1 and the far plane at 100, the normalised depth is given by z_ndc = ((f + n) / (n − f) · z + 2fn / (n − f)) / (−z) for camera-space z, with n the near plane and f the far plane. Compute z_ndc at distances of 1, 10 and 50. What fraction of the depth range is used up by 10 distance units?
:::

:::answers
**Check Your Knowledge.**

1. Retained mode keeps a record of the shapes, which can be styled and clicked individually; immediate mode paints pixels and forgets how. SVG is retained; canvas is immediate.
2. Downward. A chart must flip the axis, mapping larger data values to smaller pixel y values.
3. They save and restore the whole drawing state (colour, line width, transform), so a temporary change such as a rotation can be undone without disturbing later drawing.
4. Model space, world space, camera (view) space, clip space (normalised device coordinates), screen space.
5. x_ndc = (f / a) x / (−z) and y_ndc = f y / (−z), with f = 1 / tan(θ/2). The division by distance −z makes the apparent offset from the centre shrink as the distance grows.
6. Flickering where two surfaces are nearly at the same depth, caused by the limited precision of the depth buffer. Reduce it by setting the near plane as far and the far plane as near as the scene allows.
7. Brightness = max(0, n · l). An environment map supplies reflections of a surrounding scene, which glossy and metallic surfaces need in order to look realistic.

**Review Problems.**

1. f = 1 / tan 30° = 1.7321 and a = 16 / 9 = 1.7778. x_ndc = (1.7321 / 1.7778)(−0.2 / 1) = −0.1949; y_ndc = 1.7321 × 0.1 = 0.1732. x_px = (−0.1949 × 0.5 + 0.5) × 1280 = 515.3; y_px = (−0.1732 × 0.5 + 0.5) × 720 = 297.6.
2. Ten pixels from the centre means x_px − 640 = 10, so x_ndc × 0.5 × 1280 = 10 and x_ndc = 0.015625. Then 0.015625 = (1.7321 / 1.7778) × 0.5 / d = 0.9743 × 0.5 / d, so d = 0.4871 / 0.015625 = 31.2 metres.
3. After 90° the point (1, 0, 0) goes to (cos 90°, 0, −sin 90°) = (0, 0, −1). After a yaw of 30° the robot's x axis points to (cos 30°, 0, −sin 30°) = (0.866, 0, −0.5).
4. 480 × 0.02 = 9.6 ms. Merged: 48 × 0.02 = 0.96 ms, a saving of 8.64 ms. A 60 Hz frame is 16.67 ms, so the saving is 8.64 / 16.67 = 52% of the budget.
5. For (0, 0, 1): 1. For (0, 0.6, 0.8): 0.8. For (1, 0, 0): 0, so the light from the side leaves the surface black.
6. With n = 0.1, f = 100: (f + n)/(n − f) = 100.1 / (−99.9) = −1.002002 and 2fn/(n − f) = 20 / (−99.9) = −0.200200. At distance 1 (z = −1): (1.002002 − 0.200200) / 1 = 0.8018. At 10 (z = −10): (10.02002 − 0.2002) / 10 = 0.9820. At 50 (z = −50): (50.1001 − 0.2002) / 50 = 0.9980. So 10 distance units use 98.2% of the depth range, all but the last 1.8%.
:::
