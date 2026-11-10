@titlepage
@heading Contents
@toc

#! Introduction

Welcome. If you picked up this book because you want to know how a website like this one gets built, you are in the right place. If you picked it up because you are a little afraid of the whole subject, you are in an even better place, because this book was written for you.

The website in question is an engineering portfolio. In its pages you can fly a spiral climb, watch a phugoid oscillation draw itself across a graph, and pull a small robot named Patrick to pieces to see what each part does. It looks like the work of a big team with a big budget. It is not. It is a handful of plain files, a browser, a text editor, and a pile of ideas that are far simpler than they first look. This book hands you those ideas, one at a time, and then shows you exactly how they were used.

#### Why this book explains everything twice

Most coding books tell you what to type. This one tells you **why**. Every time you meet a function, a setting, or a decision, the book stops and answers three questions: why is it done this way, why does that matter, and what goes wrong if you do it some other way? You will see the answer in a shaded box with a heading that says *Why Do It This Way?*

That sounds like extra reading, and it is. It is also the difference between a person who can copy a recipe and a person who can cook. If you only know *what* to type, the first time something breaks you are stuck. If you know *why* it was typed, you can usually see the problem before you finish reading the error message.

#### How the book is built

The book has five parts, and they build on each other.

**Part I** is theory. It explains how the web works and how a browser thinks, in plain English, before you write any serious code. Every chapter ends with questions to check what you have taken in.

**Part II** goes through the tools one at a time: HTML, CSS, JavaScript, React, canvas and SVG drawing, GSAP, three.js, the build tools, and a full C++ course, from a first program to a controller for a robot of your own. Each tool gets a list of words you will meet, an explanation of how it works, worked examples, and practice problems that have nothing to do with the website. A skill you can only use on one project is not really a skill.

**Part III** is six guided projects, from a first page up to a 3D model you can take apart and a C++ cart that brakes before a wall. Each one uses what you learned in Part II, and each ends with a short quiz.

**Part IV** covers the advanced material for each tool, including stable simulation and twin testing in C++.

**Part V** is a guided tour of the real website, one section, function and decision at a time. It includes a guided project that builds the robot's whole C++ program from an empty file in nine runnable stages, and covers the Claude skills that helped build it.

#### A living book

This is Edition 0.4. It will change. Whenever the website grows or a better way of explaining something turns up, the book grows with it. The Book Map after this introduction shows what the book contains today.

#### A promise about honesty

You will notice that this book sometimes says "the site does not do this". For example, the website does not use GSAP, and the React file in the project is not yet connected to any page. The book says so plainly, because a guide that pretends a project does things it does not do is worse than no guide at all. Where a tool is not used, Part V tells you where it would fit and why.

#! How to Use This Book

#### The little boxes

You will see five kinds of shaded boxes. Learn to love them.

:::tip
A Tip is a shortcut or a habit that saves you time or trouble. You can skip a Tip and the book will still make sense, but you will probably wish you had read it.
:::

:::warning
A Warning marks something that will bite you. If a Warning is there, someone (usually the author) has already been bitten.
:::

:::remember
A Remember box repeats an idea that the rest of the chapter leans on. If you forget it, the next page will feel harder than it should.
:::

:::technical Technical Stuff
Technical Stuff is for the curious. It explains what is going on underneath. You can safely skip it on a first reading and come back later.
:::

:::why The Why Box
**What it is.** The thing being explained: a function, a setting, a line of code.

**Why it is done this way.** The reason this approach was chosen over the alternatives.

**Why it matters.** What this buys you: speed, safety, clarity, or something else.

**What happens if you do not.** The failure you would see. This is often the most useful line of the four.
:::

#### Questions and answers

Part I ends every chapter with **Check Your Knowledge** (short questions) and **Review Problems** (longer ones, often with a calculation). Part II ends every chapter with **Practice Problems**, and Part III ends each project with a **Check Yourself** quiz. All the answers are at the back of the book. Please try each question before you peek. Your brain only remembers what it has had to dig for.

#### Typography

The text is in Times New Roman at 11 points, with 1.5 line spacing, justified. Chapter and section headings are 13 points and subsection headings are 12. Code and tables are set tighter than the running text, because a code listing at 1.5 spacing is harder to read, not easier.

#### What you need

A modern browser, a text editor (Visual Studio Code is a good one), and a willingness to try things. You do not need any programming experience. You will meet Node.js and npm in Part II, when you first need them, and not before.

#### How to read it

New to all this? Start at Chapter 1 and do the problems. Already building websites? Skim Part I, pick the Part II chapters you are weakest in, and jump to the projects. Only want to know how this particular site works? Part V stands on its own, and points back to earlier chapters for any idea it needs.

#! Book Map

The table lists every part of the book and where it stands today.

| Part | What is in it | State |
|---|---|---|
| I. Foundations | The theory of the frontend: the web, the browser, the three languages, space and size, events, animation, graphics, and quality. Eight chapters with questions. | Written |
| II. The Tech Stack | HTML, CSS, JavaScript, React, canvas and SVG, GSAP, three.js, build tools with Git, and a full C++ course (18 sections, five mini projects, 40 practice problems with line answers). Words you will meet, theory, worked examples, practice problems. | Written; C++ is the most complete |
| III. Six Guided Projects | A landing page, a responsive gallery, an animated story, an interactive physics chart, a 3D model you can take apart, and a C++ cart that brakes before a wall. Each ends with a quiz. | Written, first edition |
| IV. Advanced Topics | Advanced CSS, JavaScript, React, canvas, GSAP, three.js, accessibility with performance, and C++ (stable simulation, twin testing). | Written, first edition |
| V. The Guided Build | The real website: its shape, the HTML, CSS and JavaScript of the flight dynamics page, the stability model, the Patrick robot page, the robot's C++ program built from scratch in nine stages, the build pipeline, React and GSAP (honestly), and the Claude skills. | Written, first edition |

"First edition" means the chapter is complete enough to learn from, and will be deepened as the site grows. The exercises in Part I are the most polished; the later parts will gain more exercises and more line-by-line detail over time.
