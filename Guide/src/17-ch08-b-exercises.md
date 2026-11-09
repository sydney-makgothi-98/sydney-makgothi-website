:::check
1. Why are native elements such as `<button>` better for accessibility than styled `<div>` elements?
2. What does an `alt` attribute do, and what should the `alt` of a decorative image be?
3. State the WCAG AA contrast requirement for normal text.
4. Name the three Core Web Vitals and say what each measures.
5. What is cross-site scripting, and why is `textContent` safer than `innerHTML` for text from a user?
6. Why does pinning a library to an exact version matter for security and reliability?
7. What does a bundler do, and what does minification add?
:::

:::problems
1. Compute the contrast ratio of white text (#ffffff, luminance 1.0) on the page background (luminance 0.00337). Does it pass AA? Compute also mid-grey text #777777 (luminance 0.1845) on white, and say whether it passes.
2. A designer wants text of colour #5f668f (luminance 0.1392) on a white card (luminance 1.0). Compute the ratio and decide whether it passes AA for normal text.
3. A visitor sets their browser's default font size to 24 px. A heading is sized `2rem` and a caption is sized `12px`. What sizes do they show? Which respects the visitor's setting?
4. A page's largest image arrives after 3.4 s and the page reaches interactivity after 1.1 s. Which Core Web Vital is failing, by how much, and suggest two fixes.
5. The following code builds a greeting from a URL parameter. Explain the vulnerability, give a malicious input, and rewrite the code to be safe.

```
const name = new URLSearchParams(location.search).get('name');
document.getElementById('hello').innerHTML = '<b>Hello, ' + name + '</b>';
```

6. An image is displayed 400 CSS pixels wide on screens with DPR 1, 2 and 3. If you may offer only one file, what width should it be so that it is sharp on all three? What is the cost on the DPR 1 screen, expressed as the ratio of pixels downloaded to pixels needed?
:::

:::answers
**Check Your Knowledge.**

1. Native elements come with keyboard operation, focus handling and the correct role announced by assistive technology. A `<div>` has none of this unless it is rebuilt by hand.
2. It gives a text alternative to an image for those who cannot see it. A decorative image should have an empty `alt=""` so that it is skipped.
3. A contrast ratio of at least 4.5 : 1 between text and background (3 : 1 for large text).
4. LCP, the time until the largest visible element appears; INP, how quickly the page responds to an interaction; CLS, how much the layout shifts during loading.
5. XSS is an attacker getting their script to run in your page. `textContent` treats the value strictly as text, so markup in it is displayed and not executed; `innerHTML` parses it as HTML and may run script.
6. A pinned URL cannot change under you, so a compromised or buggy new release cannot reach your page silently; it also keeps behaviour reproducible.
7. A bundler follows `import` statements and combines the code into one file the browser can load. Minification shrinks the output by removing whitespace and shortening names.

**Review Problems.**

1. White on the background: (1.0 + 0.05) / (0.00337 + 0.05) = 1.05 / 0.05337 = 19.67, which passes. Grey on white: (1.0 + 0.05) / (0.1845 + 0.05) = 1.05 / 0.2345 = 4.48, which narrowly fails 4.5 for normal text.
2. (1.0 + 0.05) / (0.1392 + 0.05) = 1.05 / 0.1892 = 5.55. It passes AA for normal text, even though the same colour fails on the dark background; contrast depends on the pair.
3. `2rem` is 2 × 24 = 48 px; the caption stays 12 px. The `rem` heading respects the setting; the caption in `px` ignores it.
4. LCP is failing: 3.4 s against the 2.5 s target, 0.9 s too slow. INP cannot be judged from the load time alone. Fixes: compress or resize the image so it downloads faster, and preload it or load it earlier in the page.
5. The value of `name` is inserted as HTML, so `?name=<img src=x onerror=alert(1)>` runs script in the page. Safe version: `const b = document.createElement('b'); b.textContent = 'Hello, ' + name; document.getElementById('hello').replaceChildren(b);`
6. Sharp at DPR 3 needs 400 × 3 = 1200 pixels wide. On the DPR 1 screen only 400 are needed, so the pixel ratio is (1200 × 1200) / (400 × 400) = 9, nine times as many pixels as necessary (the file is typically smaller than that in bytes, but the waste is real). This is why pages offer several sizes and let the browser choose with `srcset`.
:::
