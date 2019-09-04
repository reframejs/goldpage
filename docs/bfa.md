<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/bfa.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/bfa.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/bfa.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/bfa.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/bfa.template.md` and run `npm run docs` (or `yarn docs`).






-->
<p align="center">
  <a href="/../../#readme">
    <img align="center" src="https://github.com/reframejs/goldpage/raw/master/docs/assets/icon-with-text.svg?sanitize=true" height=96 style="max-width:100%;" alt="Goldpage"/>
  </a>
</p>

# Backend First App

> :information_source:
>
> You can use Goldpage and start creating a prototype without reading this document.

> :warning:
>
> This document assumes that you are familiar with the differences between CSR and SSR,
> between an interactive page and a non-interactive page, and between `renderToDom` and `renderToHtml`.
> You can learn about all this at
> [CSR & SSR Explained](/docs/csr-and-ssr-explained.md)
> and
> [Client-side Rendering (CSR) VS Server-side Rendering (SSR)](/docs/csr-vs-ssr.md).

Goldpage introduces a new app type we call *Backend First App* (BFA).

A Backend First App is an app that uses React (or Vue)
primarily as an HTML template engine and
only secondarily to implement interactive views.

In other words, most pages are non-interactive and have:
- `renderToDom: false`
- `renderToHtml: true`

And only few pages are interactive and have:
- `renderToDom: true`
- `renderToHtml: false` (or `renderToHtml: true`)

The idea of a BFA is to prefer non-interactive pages over interactive ones
for a higher development speed, increased (mobile) performance, and better SEO.

**Non-interactive First**

Interactive views are inherently complex.
Mostly because state changes are hard to manage and error prone.
Interactive views need considerably more time to be developed than non-interactive views.

Non-interactive views need
no state managemenet and using
React solely as an HTML template engine
is vastly simpler.

In short,
implementing non-interactive views is much faster than implementing interactive views,
which leads us to the *non-interactive first* approach:

> **Non-interactive first**
> <br/>
> Whenever possible, implement features using non-interactive pages.
> Use interactive views as last resort.

Following the non-interactive first approach is not only about achieving a higher development speed
but also about (mobile) performance and SEO, which we will discuss later.

**Fast prototyping**

Interactive views offer more possibilities to implement a good user experience.
The trade-off is often between dev speed and user experience.

One way to approach this is to
implement an inferior user experience with non-interactive pages at first in order to quickly build an MVP.

Later,
as your prototype grows,
as you get to know what your users need,
and as you get to product-market-fit,
you re-write your non-interactive pages into interactive pages for a better user experience.

**Performance & Mobile**

Non-interactive pages are rendered to HTML only and have (almost) no browser-side JavaScript.
This makes non-interactive pages more performant, especially on mobile where
rendering to HTML is vastly more peformant than rendering to the DOM.

On slow internet connections, non-interactive pages are vastly more performant as well.

Developing a native mobile app takes substantially more time than developing a mobile web app.
For a mobile app that is highly interactive (a music player, an email app, a video editor, ...),
writing the app in native code is the way to go &mdash; interactive views on web apps are too slow on mobile.
But, for a mobile app that is mainly about content (a meditation app, a news app, ...),
a BFA can be an alternative for a drastically higher developing speed.

**SEO**

Non-interactive pages are rendered to HTML and are easily crawlable by search engines.

**Example**

For example,
a BFA is usually a good fit for an online newspaper.
News articles are mostly about
text and images &mdash;
there is no need for interactive views.
And, if a news article
contains an interactive view,
for example an interactive US Election Poll,
then the news arcticle page can be made interactive by setting `renderToDom: true`.

Both SEO and mobile performance are crucial for a newspaper and a BFA delivers
a near-optimal mobile web performance and SEO.

**Modern Stack**

There are many benefits to use the modern stack to generate HTML:
- JSX is a simple and powerful HTML template engine.
  <br/>
  Using the JavaScript language to declaratively generate HTML is simple and powerful:
  You can use your JavaScript knowledge to generate HTML,
  and using a full-blown programming language as a template language is vastly
  superiour than the usual template operators such as `{% for todo in todos %} <li>{{ todo.text }}</li> {% endfor %}`.
- Possibility to have interative views.
  <br/>
  Even though we follow the non-interactive first approach,
  we can still write interactive views when necessary.
- Learn one stack to create any kind of app.
  <br/>
  You can learn and use the same tools
  to create a modern desktop-like interactive app as well as a goold old plain HTML website.
- JS stack.
  <br/>
  The JS stack is evovling at a speed never seen before &mdash; it's a hotbed of innovation.
  (The speed can be daunting but we expect only the best tools to survive and the ecosystem to stabilize.)
  The JS stack lies right in the middle of the promising WebAssembly future.

**Conclusion**

A BFA is about following the non-interactive first approach, that is we prefer to implement features by using non-interactive pages and we avoid interactive views whenever possible.

The non-interactive first approach and a BFA can achieve:
- High development speed.
- High performance, especially on mobile.
- Crawlability for SEO and social sharing.
- Possibility to have interative views.


<!---






    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/bfa.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/bfa.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/bfa.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/bfa.template.md` and run `npm run docs` (or `yarn docs`).












    WARNING, READ THIS.
    This is a computed file. Do not edit.
    Instead, edit `/docs/bfa.template.md` and run `npm run docs` (or `yarn docs`).






-->