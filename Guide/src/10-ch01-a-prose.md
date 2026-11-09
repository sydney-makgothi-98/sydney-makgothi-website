@part Part I. Foundations: The Theory of the Frontend
@partsub Eight chapters on the ideas that everything else rests on

# How the Web Works

Here is a secret that most beginners are never told: a website is not a thing. It is a conversation. One computer asks, another computer answers, and the page you see is just what happens when the answer arrives. Once you picture that conversation, a great deal of web development stops being mysterious. This chapter introduces the two speakers, the language they use, and what each exchange costs.

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

:::why Making the site static
**What it is.** Every page is a finished file sitting on a server. There is no program running on the server and no database.

**Why it is done this way.** A portfolio shows the same thing to everyone. There is nothing to calculate per visitor, so there is nothing to put on a server.

**Why it matters.** A static site has nothing to hack, because there is no program to attack and no database to steal. It costs almost nothing to host, because any service that can serve files will do. It is fast, because the server's whole job is to hand over a file.

**What happens if you do not.** A dynamic site must be maintained, patched, backed up and paid for, and every one of those is a place for something to go wrong. For a portfolio that is a lot of trouble for no benefit. The pages are still interactive, by the way. The interactivity lives in JavaScript that runs in the visitor's browser.
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
