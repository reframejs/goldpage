<p align="center">
  <a href="/../../#readme">
    <img align="center" src="https://github.com/brillout/ssr-coin/raw/master/docs/ssr-coin.min.svg?sanitize=true" width=96 height=96 style="max-width:100%;" alt="ssr-coin"/>
  </a>
</p>

<h1>
  <p align="center">
    <code>ssr-coin</code>
  </p>
</h1>

<p align="center">
Add SSR to your app.
</p>

<br/>
<br/>

- [What is `ssr-coin` <img src="https://github.com/brillout/ssr-coin/raw/master/docs/ssr-coin.min.svg?sanitize=true" width=16 height=10 style="max-width:100%;" alt="ssr-coin"/>](#what-is-ssr-coin-)
- Usage
  - [Quick Start]()
  - [Zero-config Setup]()
  - [Server Build Setup]()
  - [Can I use `ssr-coin` with my own bundling?]()
  - [Performance tuning]()
- Configuration
  - [Page](#page-config)
  - [Render](#)
  - [Router](#)
  - [Build](#)
  - [Bundler](#)
- [Plugins](#plugins)
- [How it works](#how-it-works)

## What is `ssr-coin` <img src="https://github.com/brillout/ssr-coin/raw/master/docs/ssr-coin.min.svg?sanitize=true" width=16 height=10 style="max-width:100%;" alt="ssr-coin"/>

`ssr-coin`
<img src="https://github.com/brillout/ssr-coin/raw/master/docs/ssr-coin.min.svg?sanitize=true" width=16 height=10 style="max-width:100%;" alt="ssr-coin"/>
is a do-one-thing-do-it-well library that adds server-side rendering (SSR) to your Node.js server.
It is designed to be easy yet entirely flexible.

Infos about SSR:
- [Awesome Universal Rendering - What is SSR](https://github.com/brillout/awesome-universal-rendering)
- [Awesome Universal Rendering - When to use SSR](https://github.com/brillout/awesome-universal-rendering) -
  Explains whether SSR should be used or not.
- [Awesome Universal Rendering - Performance](https://github.com/brillout/awesome-universal-rendering) -
  Explains the performance benefits of SSR which can be substantial for mobile.
- [Awesome Universal Rendering - Developer Experience](https://github.com/brillout/awesome-universal-rendering) -
  Not many people know that SSR introduces a new way of developing applications with an important increase in developing speed.

`ssr-coin` is unopinionated and works with any stack:
- Any view libray: React, Vue, React Native Web, etc.
- Any server framework: Express, Koa, Hapi, etc.
- Any language: ES6, TypeScript, PostCSS, etc.

By default,
`ssr-coin` has zero-config:
you can add SSR to your app with only couple of lines.
But, if you need to, you can configure and take control over:
- The HTML rendering (full control)
- The DOM rendering (full control)
- The routing (full control)
- The building (partial control)

## Quick Start

The `github:brillout/ssr-coin-starter` starter 

1. Clone the starter repo.
  ~~~shell
  git clone git@github.com:brillout/ssr-coin-starter
  ~~~

2. Install dependencies.
  ~~~shell
  cd ssr-coin-starter && npm install
  ~~~

3. Start the dev server.
  ~~~shell
  npm run dev
  ~~~

In the `ssr-coin-starter/package.json` you can see the used plugins. Try to change the 

If you want to add SSR to your existing app then read the next section.

## Zero-config Setup

This 
Then go through the Quick Start instead.


0. Install.

   `ssr-coin`:
   ~~~shell
   npm install ssr-coin
   ~~~

   A [render plugin]() such as `@ssr-coin/vue` or `@ssr-coin/react`:
   ~~~shell
   npm install @ssr-coin/react
   ~~~

   And a [server plugin]() such as `@ssr-coin/hapi` or `@ssr/express`:
   ~~~shell
   npm install @ssr-coin/express
   ~~~

   Note that plugins
   listed in the `dependencies` list of your `package.json`
   are automatically loaded.


1. Add `ssr-coin` to your Node.js server.

   With Express:
   ~~~js
   const express = require('express');
   const ssr = require('ssr-coin');

   const app = express();
   app.use(ssr.express);
   ~~~

   <details>
   <summary>
   With Hapi
   </summary>

   ~~~js
   const Hapi = require('hapi');
   const ssr = require('ssr-coin');

   (async ()=>{
     const server = Hapi.Server();
     await server.register(ssr.hapi);
   })();
   ~~~
   </details>

   <details>
   <summary>
   With Koa
   </summary>

   ~~~js
   const Koa = require('koa');
   const ssr = require('ssr-coin');

   const app = new Koa();
   app.use(ssr.koa);
   ~~~
   </details>

   <details>
   <summary>
   With other server frameworks
   </summary>

   `ssr-coin` can be used with any server framework.
   But there is no documentation for this (yet).
   Open a GitHub issue
   if you want to use `ssr-coin` with a server framework other than
   Express, Koa, or Hapi.
   </details>

2. Create a page.

   Create the `pages/` directory.
   ~~~shell
   cd path/to/your/project/dir/ && mkdir pages/
   ~~~

   Create
   Then copy
   ~~~js
   export default {
     route: 'hello/:name',
     view: ({data, name}) => (
       // We assume that `@ssr-coin/react`
       <div>
       </div>
     ),
     tittle: ({name}) => 'Hi '+name,
     getInitialProps: async () => {
       await sleep(0.3);
       return {data: "This is some async data;"};
     },
   };
   ~~~
   to `pages/test.page.js`

3. Add the `ssr-coin` scripts to your `package.json`:
   ~~~json
   {
     "scripts": {
      "dev": "ssr-coin dev",
      "prod": "npm run build && npm run start",
      "build": "export NODE_ENV='production' && ssr-coin build",
      "start": "export NODE_ENV='production' && node ./.build/nodejs/server"
     }
   }
   ~~~

That's it,
you can now run `npm run dev` and go to the newly created page `/ssr-test`.


Note two things:

Note that you'll have to replace your current bundling step with `ssr-coin`'s one.

It is a **conscious design decision to including the bundling step** inside `ssr-coin`
and to abstract it away from you.
Read [Config - Bundler]() if you want to know why.

Replacing your bundling from Parcel to `ssr-coin` is easy
(Since Parcel is zero-config.)
It should be only a matter of changing your `package.json` scripts such as `"dev": "parcel"` to `"dev": "ssr-coin dev"`.

Replacing your bundling from Webpack to `ssr-coin` could be trickier.
(Since Webpack's complex configuration is effectively a vendor lock-in.)
Please open a GitHub issue if you run into problems.

A **migration strategy** to progessively add view components to a `ssr-coin` pages and iteratively address any problem you may encounter.


## Server Build Setup

You can make `ssr-coin` build your server code.

If you want to
- transpile your server code (e.g. if you want to use TypeScript on the server), or
- enable auto-reload for your server
you can add make `ssr-coin` build your server code by setting the `serverStartFile` config in your `package.json`:

~~~json
{
  "ssr-coin": {
    "serverEntryFile": "./path/to/your/server/entry"
  },
}
~~~

3. Enable server-side auto-reload:
   Or if you don't want `ssr-coin` to auto-reload your server:
   ~~~json
   {
     "ssr-coin": {
       "doNotBuildServer": true
     },
   }
   ~~~
   Note that browser-side auto-reload will be enabled either way.




If you a bundling that is custom to your app,
for example if you have a webpack,
then you'll have to replace it with `ssr-coin`'s bundling.

You may think at first "Didn't you say that `ssr-coin` is a do-one-thing-do-it-well Library".
We don't believe so. We believe .
SSR and bundling are intimetly connected and.

(Integrating SSR is most complex part of SSR 
We strongly believe that 

You may
you'll have to replace.
This is a conscious and is a non-goal.
We believe .
Ideally

tighly couples you with Webpack.
Webpack's configuration is effectively a webpack lock-in.

You may 
As for the dev server you can easily
You may 
The bundling

You can configure ``

 - `pages/**/*.page.js` to configure your pages
 - `.ssr-coin.config.js` to globally configure `ssr-coin`

The options of a page config `*.page.js` are:

~~~js
// pages/landing.page.js

const landingPageConfig = {
  route: '/hello/:name',

  view: props => (
    <div>
      Welcome {props.name}.
      You are a {props.gender}
    </div>
  ),

  getInitialProps: async props => {
    const props = await fetch('https://example.org/person/'+name);
    // Load some async data
    // We assume that 
    assert(props.gender);
    return props;
  },

  // HTML meta scripts
  title: ({name, gender}) => 'Hi '+name,
  description: ({name}) => 'This is the page of '+name,

  // We explain the following two options below
  renderHtmlAtBuildTime: true,
  doNotRenderInBrowser: true,
};

module.exports = landingPageConfig;
~~~

And the `.ssr-coin.config.js` file has following options:

~~~js
// /ssr-coin.config.js

const = require.resolve('path/to/renderToHtml.js');

module.exports = {
  log: {
  },
  indexHtml: 'path/to/indexHtml.js',
};
~~~

The files `renderToHtml.js` and `renderPageToHtml.js` are explained at:

- [HTML Rendering](#html-rendering)

The files `renderToDom.js` and `renderPageToDom.js` are explained at:

- [DOM Rendering](#dom-rendering)

The file `router.js` is explained at:

- [Routing](#routing)

We talk about configuring the builing at:

- [Building](#building)

If you need then read:

- [Full Flexibility](#full-flexibility)

#### HTML Rendering

#### DOM Rendering

#### Routing

#### Building

We strongly believe that, as a developer, you shouldn't mess around with building.
Building is a complex topic and and configuring building can quickly become a considerably time sink.
We believe that the build process should be taken care of by tools with minimal configuration.
Messing with building should be your last resort.

Today,
`ssr-coin` is based on Webpack,
but we will migrate to Parcel once Parcel v2 is ready.

to alter Webpack but for now

We may publish documentation about how to write plugins
we prefer to develop the plugins hand-in-hand today.

If you want to change Webpack's configuration then we suggest you to use a `ssr-coin` plugin

#### Full Flexibility

For internal `ssr-coin` developing purposes,
the entire `ssr-coin` build process is design in a modular way.
What this means for you,
is that you can take control over many aspect of the building process.

If you need to configure something not covered in this Readme,
then open a GitHub issue
and let's discuss solutions to your problem.
We aim to make `ssr-coin` highly flexible,
and we meant it.

## How it works

It works by building what we call "page configs" and you server.
It generates a browser entry.

This is crucial design decision that makes `ssr-coin` unique.
It's a simple design and achieves scalable and high performance for browser load time.
Scalable because each page is rendered 
SSR
With zero JavaScript.

That is:
 - 

