@part Part I. Foundations: The Theory of the Frontend
@partsub Eight chapters on the ideas that everything else rests on

# How the Web Works

Here is a secret that most beginners are never told: a website is not a thing. It is a conversation. One computer asks, another computer answers, and the page you see is just what happens when the answer arrives. Once you picture that conversation, a great deal of web development stops being mysterious. This chapter introduces the two speakers, the language they use, and what each exchange costs.

:::objectives
- Tell a client from a server, and explain why one machine can be both.
- Take a URL apart into its six pieces, and say which piece never leaves the browser.
- Read an HTTP request and response, including the status code and the `Content-Type` header.
- Explain what a packet, a connection and an encrypted connection are, and why each costs a round trip.
- Estimate how long a file takes to arrive from its size, the bandwidth and the round-trip time.
- Say what caching is, what goes wrong with it, and how a changed file name fixes that.
:::

## Meet the Client and the Server

The two speakers have names. The **client** is whoever asks. In this book the client is always a web browser on a phone or a laptop. The **server** is whoever answers: a computer, usually far away, that keeps files and hands them to anyone who asks correctly.

Notice that these are *jobs*, not kinds of machine. Your laptop can run a browser (a client) and a tiny test server at the same moment, and that is exactly what happens when you try out the pages of this website on your own computer.

:::remember
The server does not draw the page. It only hands over text and data. Your browser reads that text and does all the drawing. That is why a page looks the same in Johannesburg and in Oslo, and it is why the work the browser has to do *after* the files arrive is so important. Chapter 2 is all about that work.
:::

## Addresses: URLs and DNS

Every file on the web has an address, called a **URL** (uniform resource locator). A URL looks like one long word, but it has parts, and you should be able to name them.

```
https://example.com:443/pages/flight-dynamics.html?view=modes#routh
\___/   \_________/ \_/ \_________________________/ \________/ \____/
scheme     host    port           path                 query   fragment
```

The **scheme** says which language to speak (`https` means "the web language, with encryption"). The **host** is the name of the server. The **port** picks one of the many services a server might run, and `443` is the default for `https`, so you almost never see it. The **path** names the file. The **query** passes extra settings. The **fragment** names a spot inside the page, and here is a detail that trips people up: the fragment is *never sent to the server*. The browser keeps it and uses it to scroll.

A host like `example.com` is a name for humans. Computers use numbers called **IP addresses**, and a kind of phone book called the **Domain Name System (DNS)** converts one into the other. Before your browser can say anything to `example.com`, it has to look the name up, and that takes a moment. Browsers remember the answer for a while, which is why a second visit to a site is quicker than the first.

## The Conversation: HTTP

Once the browser knows where the server is, it sends an **HTTP request**. A request is plain text with a simple shape: the **method** and the path, followed by **headers** that describe the client.

```
GET /flight-dynamics.html HTTP/1.1
Host: example.com
Accept: text/html
Accept-Encoding: gzip, br
```

`GET` means "please send me this". The server answers with an **HTTP response**: a **status code**, some headers, and then the **body**, which is the file itself.

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Length: 28457
Cache-Control: max-age=600

<!DOCTYPE html> ...
```

The status code is a quick summary of how things went. Codes in the 200s mean success. The 300s mean "it moved". The 400s mean *you* made a mistake (the famous `404 Not Found` means you asked for a path that does not exist). The 500s mean the *server* made a mistake.

@figure http-conversation The whole conversation for one page: a name lookup, a connection, an encryption handshake, and only then the request for the page, followed by a request for every file the page mentions. Each pair of arrows is one round trip.

| Code | Name | What it means |
|---|---|---|
| 200 | OK | Here is what you asked for. |
| 301 / 302 | Moved | Ask at this other address instead (permanently / for now). |
| 304 | Not Modified | Your cached copy is still good; use it. |
| 400 | Bad Request | The request itself was malformed. |
| 403 | Forbidden | You are not allowed to see this. |
| 404 | Not Found | No such path. The most common error on the web, and usually a typo in a link. |
| 500 | Internal Server Error | The server's program crashed. |
| 503 | Service Unavailable | The server is overloaded or down for maintenance. |

:::why Sending a Content-Type header
**What it is.** A header on the response that says what kind of thing the body is, for example `text/html` or `text/css` or `application/javascript`.

**Why it is done this way.** A file is just a pile of bytes. The server has no other way to tell the browser whether those bytes are a page, a picture, or a script.

**Why it matters.** The browser decides what to *do* with the bytes based on this header. HTML gets parsed into a page. CSS gets applied. A script gets run.

**What happens if you do not.** The wrong header gives baffling failures. A stylesheet sent as plain text is ignored, and a script sent as plain text may refuse to run. When a page looks completely unstyled for no reason you can see, check the Content-Type before you check anything else.
:::

#### One page, many requests

A page is never a single request. When your browser reads the first HTML file, it spots references to other files (stylesheets, scripts, images, fonts) and asks for each one. Those may mention still more files. The flight dynamics page of this website starts with one HTML file and then asks for a font stylesheet, the KaTeX stylesheet, two KaTeX scripts, and its own script. You can watch it happen in the **Network** tab of your browser's developer tools, which lists every request with its status, size and time. Open it now on any page. It is oddly satisfying.

## What the Server Sends

The files a browser receives come in a few kinds. This book is mostly about the first three.

| Kind | Typical file | What the browser does with it |
|---|---|---|
| HTML | `page.html` | Builds the structure and content of the page. |
| CSS | `style.css` | Works out how everything looks and where it goes. |
| JavaScript | `app.js` | Runs it, so the page can react and change. |
| Images | `.png`, `.jpg`, `.svg` | Decodes them and draws them. |
| Fonts | `.woff2` | Loads them so text can use the chosen typeface. |
| Data | `.json` | Hands it to a script. |

HTML, CSS and JavaScript are not three versions of one thing. They are three languages with three different jobs, and Chapter 3 is about keeping those jobs apart.

## Static Sites and Applications

A **static site** is one whose files are ready-made and identical for every visitor. The server finds the right file and sends it, and that is all it does. A **dynamic site** builds a different page for different visitors, often by running a program and asking a database for information every time. In between are **single-page applications**, which load one HTML file and a big script, and then build everything in the browser.

This website is static, and that was a deliberate choice.

@figure static-vs-dynamic A static server has one job: find the file and send it. A dynamic server runs a program and often asks a database before it can answer, so every visit costs work on the server.

:::why Making the site static
**What it is.** Every page is a finished file sitting on a server. There is no program running on the server and no database.

**Why it is done this way.** A portfolio shows the same thing to everyone. There is nothing to calculate per visitor, so there is nothing to put on a server.

**Why it matters.** A static site has nothing to hack, because there is no program to attack and no database to steal. It costs almost nothing to host, because any service that can serve files will do. It is fast, because the server's whole job is to hand over a file.

**What happens if you do not.** A dynamic site must be maintained, patched, backed up and paid for, and every one of those is a place for something to go wrong. For a portfolio that is a lot of trouble for no benefit. The pages are still interactive, by the way. The interactivity lives in JavaScript that runs in the visitor's browser.
:::

## What Travels on the Wire

It helps to know what is really happening underneath, because the costs in the next section come straight from it. Three layers are stacked under every request.

**Packets.** Nothing travels in one piece. A file is cut into **packets** of about 1 500 bytes, each stamped with the address it is going to and the address it came from, and each finds its own way across the network. They may arrive out of order, and some may not arrive at all.

**TCP.** The **Transmission Control Protocol** turns that unreliable stream of packets into a reliable conversation. It numbers the packets, puts them back in order, asks again for any that went missing, and slows down when the network is congested. Before any of that can start, the two computers exchange a small "hello, hello back, thanks" called the **handshake**, which costs one round trip.

**TLS.** The **Transport Layer Security** protocol is what the *s* in `https` stands for. The browser and the server agree on secret keys so that nobody in between can read or alter what passes. Agreeing takes another round trip (older versions took two). Everything after that, including the URL path and the headers, is encrypted; only the host name is visible to the network.

Only when all three layers are ready does the first `GET` go out. That is why the worked example below counts several round trips before a single byte of the file arrives, and why a page that needs files from five different servers pays this set-up five times.

:::technical Technical Stuff
Newer versions of HTTP change the arithmetic a little. **HTTP/2** sends many requests over one connection at the same time, so the "six at a time" limit of HTTP/1.1 goes away and small files stop queuing. **HTTP/3** replaces TCP with a protocol called QUIC that folds the connection and encryption handshakes together, saving a round trip. The ideas in this chapter still hold: set-up costs round trips, transfer costs bandwidth, and the fastest request is the one you never make.
:::

## The Cost of a Request

Every page load pays a toll, and once you understand the toll you can predict whether a page will feel quick. Two things matter. **Latency** is how long a message takes to go to the server and back (the round-trip time, or RTT). **Bandwidth** is how many bits per second the connection can carry. A tiny file is all latency, because the request spends nearly all its time travelling. A huge file is mostly bandwidth, because most of the time goes on the download.

There is also set-up. Before the first byte of a file can even be requested over a secure connection, your browser has to look up the name, open a connection, and agree on encryption keys. That costs several round trips before anything useful happens.

:::worked Time to load one script
The bundle that runs the robot page of this website is about 686 kilobytes. A visitor has 10 megabits per second of bandwidth and an 80 millisecond round-trip time. How long does the file take on a first visit?

**Step 1. Convert to bits.** 686 kilobytes is 686 000 bytes. Each byte is 8 bits, so the file is 686 000 × 8 = 5 488 000 bits, or 5.488 megabits.

**Step 2. Transfer time.** At 10 megabits per second, 5.488 ÷ 10 = 0.549 seconds.

**Step 3. Set-up.** Assume three round trips before the request can be sent (name lookup, connection, encryption) and one more for the request and the first byte back. That is 4 × 0.080 = 0.320 seconds.

**Step 4. Total.** 0.549 + 0.320 = 0.869 seconds.

**What the answer tells you.** More than a third of the time is set-up, and no change to the file can remove it. Halve the file and the total only falls to about 0.59 seconds. That is why a page with many small requests feels slower than one with a few bigger ones. It is also why servers compress text files, which can shrink a script like this one to a third of its size.
:::

@figure load-time-bar The 869 milliseconds of the worked example, drawn to scale. The four grey blocks are round trips that depend only on distance; the violet block is the only part that shrinks when the file does.

:::worked A page with a chain of files
A page is made of `index.html` (20 kB), which links to `style.css` (10 kB) and `app.js` (60 kB), and the stylesheet names a font file `font.woff2` (40 kB). The connection is already open and encrypted. The round-trip time is 80 ms and the bandwidth is 10 Mbit/s. How long until the font arrives, and what is the longest chain?

**Step 1. Find the chain.** The browser cannot ask for a file until it has seen the file that mentions it. So: HTML first; then CSS and JS, which it discovers while reading the HTML; then the font, which it discovers only while reading the CSS. That is three *rounds* of requests, one after another.

**Step 2. Round 1, the HTML.** One round trip for the request plus the transfer: 20 000 × 8 / 10 000 000 = 0.016 s. Total 0.080 + 0.016 = 0.096 s.

**Step 3. Round 2, CSS and JS together.** They are requested at the same moment and share the bandwidth. One round trip plus the transfer of 70 kB: 70 000 × 8 / 10 000 000 = 0.056 s. Total 0.080 + 0.056 = 0.136 s.

**Step 4. Round 3, the font.** It cannot be requested until the CSS has been read. One round trip plus 40 000 × 8 / 10 000 000 = 0.032 s. Total 0.112 s.

**Step 5. Add up the chain.** 0.096 + 0.136 + 0.112 = 0.344 s before the text can be drawn in the right font.

**What the answer tells you.** The sizes add up to only 130 kB, which would take 0.104 s to transfer on its own. The chain of discovery costs more than the bytes do. That is why this website's pages use `preconnect` and load fonts early (Part V), and why a stylesheet that imports another stylesheet is a quiet performance bug: it adds a whole round to the chain.
:::

## Caching

The fastest request is the one you never make. A server can send a `Cache-Control` header that says "you may keep this file and reuse it for a while". Next time, the browser uses its own copy.

The catch is staleness. If you change a file and the visitor's browser still holds the old copy, they see the old page. That is where the famous advice "try a hard refresh" comes from.

:::why Changing a file's name when its content changes
**What it is.** Instead of always serving `app.js`, you serve `app.3f9a1c.js`, where the odd bit changes whenever the file's contents change.

**Why it is done this way.** The browser treats a different name as a different file. It has nothing cached under the new name, so it fetches the new one at once.

**Why it matters.** It lets you tell browsers "keep this for a year" without any risk, because the name changes when the file does.

**What happens if you do not.** You have to choose between a short cache (slow pages for everyone) and a long cache (visitors stuck on old versions after you update).
:::

## Hosting a Static Site

Because a static site is only files, publishing it means putting the files where a server can reach them. The source of this website lives in a Git repository, and a repository host can serve a repository's files as a website. Other static hosts exist too. The choice changes the address, the speed and the price. It does not change the pages. The same folder can be opened from your own disk, served from your laptop, or served from a data centre on another continent, and a well-built page behaves the same in all three.

:::tip
Whenever a page does something odd, open the developer tools first (press F12) and look at the Console for red errors and the Network tab for failed requests. Nine times out of ten, the answer is sitting there.
:::

:::summary
- A website is a conversation: the **client** asks with an HTTP request and the **server** answers with a status code, headers and a body. The browser does all the drawing.
- A URL has a scheme, host, port, path, query and fragment. The fragment is never sent.
- The `Content-Type` header tells the browser what the bytes are. The wrong type gives silent failures.
- Underneath, packets travel unreliably, TCP makes them reliable, and TLS makes them private. Each layer costs a round trip before the first request can be sent.
- Time = set-up (round trips × latency) + transfer (bits ÷ bandwidth). Small files are all latency; big files are all bandwidth; chains of discovery multiply the round trips.
- Caching makes the fastest request the one you never send, and a changed file name makes long caching safe.
:::
