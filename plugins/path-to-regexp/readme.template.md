!MENU_SKIP

Goldpage + `path-to-regexp` = :heart:

# `@goldpage/path-to-regexp`

Routing with [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp).

(Note that `@goldpage/path-to-regexp` doesn't use the npm module `path-to-regexp` directly, but uses a modified version [`@brillout/path-to-regexp`](https://github.com/brillout/path-to-regexp).)

### Usage

Install `@goldpage/path-to-regexp`.

~~~bash
$ npm install @goldpage/path-to-regexp
~~~

The plugin is automatically loaded and
the `route` property of your page configs is now handled by `path-to-regexp`.

### Example

~~~js
!INLINE /examples/basics/pages/hello.page.js
~~~
