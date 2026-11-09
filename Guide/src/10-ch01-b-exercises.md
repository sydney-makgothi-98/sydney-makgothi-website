:::check
1. What is the difference between a client and a server? Can one computer be both?
2. Name the six parts of the URL `https://example.com:8080/a/b.html?x=1#top`, and say which part is never sent to the server.
3. A server sends a JavaScript file with the header `Content-Type: text/plain`. Why might the browser refuse to run it?
4. State the difference between latency and bandwidth, and say which one dominates the time to fetch a very small file.
5. Give two advantages of a static site over a dynamic one, and one thing a static site cannot do by itself.
:::

:::problems
1. A page loads a 2.4 megabyte image over a 20 megabits per second connection with a 50 millisecond round-trip time. Using three round trips for connection set-up and one for the request, estimate the load time.
2. Compression reduces a 686 kilobyte script to 31% of its size. Recompute the transfer time of the worked example on a 10 megabits per second link, and state the new total including the 0.320 second set-up.
3. A page needs 12 separate small files. Each file takes one round trip (80 milliseconds) to fetch, and the browser can fetch only 6 at a time. How long do the 12 fetches take if they are perfectly parallel within each batch of 6? How long would they take if the files were combined into one file of the same total size, ignoring transfer time?
4. Explain why changing a file's name when its content changes allows a server to set a one-year cache lifetime safely.
5. Open any page of this website in a browser, open the developer tools, and choose the Network tab. Reload the page. Record how many requests it makes, the total size transferred, and the slowest single request. Which file would you shrink first, and why?
6. A visitor in a region with a 300 millisecond round-trip time requests the page from the worked example. Recompute the total time with the same bandwidth. By what factor does it change, and what does this suggest about hosting files closer to the visitor?
:::

:::answers
**Check Your Knowledge.**

1. The client asks and the server answers. The words describe roles, so one computer can run both: a laptop running a browser and a local development server is both at once.
2. Scheme `https`, host `example.com`, port `8080`, path `/a/b.html`, query `x=1`, fragment `top`. The fragment is never sent to the server; the browser uses it to scroll to a place in the page.
3. The `Content-Type` header tells the browser how to interpret the body. Some browsers will not execute a script announced as plain text, and strict checks exist to stop text being run as code by mistake.
4. Latency is the time for a message to make the round trip; bandwidth is the amount of data carried per second. Latency dominates a very small file, because the transfer itself takes almost no time.
5. Advantages: nothing on the server to attack, and cheap and fast hosting. A static site cannot by itself remember or change data on the server, for example store a visitor's comment, without calling some other service.

**Review Problems.**

1. Size: 2.4 megabytes = 2 400 000 × 8 = 19.2 megabits; at 20 megabits per second that is 0.96 s. Set-up and request: 4 × 0.050 = 0.20 s. Total: 1.16 s.
2. 686 000 × 0.31 = 212 660 bytes = 1.701 megabits, so transfer takes 0.170 s. Total with set-up: 0.170 + 0.320 = 0.490 s.
3. Two batches of 6, each taking one round trip: 2 × 80 = 160 ms. One combined file: a single round trip, 80 ms. Combining halves the time in this case, and the saving grows with the number of files.
4. A new name is a new address, so the browser has nothing cached under it and fetches the file at once; the old name is simply no longer referenced. The old cached copies can never be shown stale, because nothing points to them.
5. Answers depend on the page and the connection. The usual first candidate is the largest image or script, because for large files the transfer time dominates.
6. Set-up and request: 4 × 0.300 = 1.200 s. Transfer is unchanged at 0.549 s, so the total is 1.749 s. This is 2.01 times the original 0.869 s. Latency scales with distance, so serving files from a location near the visitor, as content delivery networks do, reduces exactly the part of the time that no change to the file can touch.
:::
