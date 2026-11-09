:::check
1. What is the relationship between CSS pixels, device pixels and the device pixel ratio?
2. A canvas is shown 600 CSS pixels wide on a DPR 3 screen. How many device pixels wide should its drawing surface be, and what happens if it is left at 600?
3. List the four layers of the box model from the inside outwards.
4. What does `box-sizing: border-box` change?
5. Explain what `repeat(auto-fit, minmax(190px, 1fr))` does as the container narrows.
6. Why is `rem` generally better than `px` for font sizes?
:::

:::problems
1. A canvas is shown at 512 by 384 CSS pixels. Give the drawing-surface size, and the number of pixels in the surface, at DPR 1, 1.5 and 2.
2. Using `clamp(1rem, 2.5vw + 0.5rem, 2rem)` with a 16 px root, compute the font size at viewport widths of 360, 800 and 1600 pixels. At what width does the size stop growing?
3. A box has `width: 200px; padding: 20px; border: 5px solid; margin: 10px`. Find the total horizontal space it occupies (a) with `content-box` and (b) with `border-box`.
4. A grid uses `repeat(auto-fit, minmax(190px, 1fr))` with a gap of 16 px in a container 900 px wide. How many columns are made, and how wide is each?
5. A page shows a 4 megapixel image (2000 by 2000) in a box that is 400 CSS pixels square on a DPR 2 screen. How many device pixels cover the box, and is the image sharp or soft? What is the smallest square image that would be sharp?
6. Write the CSS for a navigation bar that is a row of links with equal gaps on wide screens and a vertical stack of links on screens narrower than 600 px.
:::

:::answers
**Check Your Knowledge.**

1. Device pixels = CSS pixels × DPR. A CSS pixel is a unit of length that is made of DPR × DPR device pixels on a dense screen.
2. 600 × 3 = 1800 device pixels. If left at 600, the browser stretches the bitmap to three times its size and it looks blurred.
3. Content, padding, border, margin.
4. It makes the declared `width` and `height` include the padding and border, so the box is exactly the size you declared.
5. It makes as many columns of at least 190 px as fit in the row, and shares any leftover space equally among them. As the container narrows, columns drop away one at a time and the rest grow to fill the row.
6. `rem` scales with the visitor's chosen default text size, whereas `px` ignores it, so `rem` respects accessibility settings.

**Review Problems.**

1. DPR 1: 512 × 384 = 196 608 pixels. DPR 1.5: 768 × 576 = 442 368 pixels. DPR 2: 1024 × 768 = 786 432 pixels.
2. The limits are 16 px and 32 px. The preferred value is 2.5vw + 8 px: at 360 it is 9 + 8 = 17 px; at 800 it is 20 + 8 = 28 px; at 1600 it is 40 + 8 = 48 px, which is clamped to 32 px. It stops growing when 2.5vw + 8 = 32, so 2.5vw = 24 and the width is 960 px.
3. (a) content-box: 200 + 2 × 20 + 2 × 5 + 2 × 10 = 270 px. (b) border-box: the width of 200 includes padding and border, so 200 + 2 × 10 = 220 px.
4. The number of columns n satisfies 190n + 16(n − 1) ≤ 900, so 206n ≤ 916 and n = 4 (since 4 × 206 = 824 ≤ 916 and 5 × 206 = 1030 > 916). The gaps take 3 × 16 = 48 px, leaving 852 px, so each column is 213 px wide.
5. The box is 400 × 2 = 800 device pixels square. The image has 2000 pixels across, more than 800, so it is sharp (and larger than needed). The smallest sharp square image is 800 by 800 pixels.
6. 
```
nav { display: flex; gap: 1rem; }
@media (max-width: 599px) { nav { flex-direction: column; } }
```
:::
