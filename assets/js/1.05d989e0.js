(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{50:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"参与我们"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参与我们","aria-hidden":"true"}},[t._v("#")]),t._v(" 参与我们")]),s("p",[t._v("如果有任何想法或需求，可以在 "),s("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/issues",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue")]),t._v(" 中告诉我们，同时我们欢迎各种 pull requests")]),s("h2",{attrs:{id:"提交新的-rss-内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#提交新的-rss-内容","aria-hidden":"true"}},[t._v("#")]),t._v(" 提交新的 RSS 内容")]),s("ol",[s("li",[s("p",[t._v("在 "),s("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/blob/master/router.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("/router.js")]),t._v(" 里添加路由")])]),s("li",[s("p",[t._v("在 "),s("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/tree/master/routes",target:"_blank",rel:"noopener noreferrer"}},[t._v("/routes/")]),t._v(" 中的路由对应路径添加获取 RSS 内容的脚本")])]),s("li",[s("p",[t._v("更新 "),s("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("README (/README.md) ")]),t._v(" 和 "),s("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/blob/master/docs/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("文档 (/docs/README.md) ")]),t._v("，可以执行 "),s("code",[t._v("npm run docs:dev")]),t._v(" 查看文档效果")])]),s("li",[s("p",[t._v("执行 "),s("code",[t._v("npm run format")]),t._v(" 自动处理代码格式后，提交代码，然后提交 pull request")])])]),s("h2",{attrs:{id:"编写脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编写脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" 编写脚本")]),s("h3",{attrs:{id:"从接口获取数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从接口获取数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 从接口获取数据")]),s("p",[t._v("使用 "),s("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios")]),t._v(" 请求接口，然后把获取的标题、链接、描述、发布时间等数据赋值给 ctx.state.data（每个字段的含义在下面说明），可以直接看这个典型的例子："),s("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/blob/master/routes/bilibili/bangumi.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("/routes/bilibili/bangumi.js")])]),s("h3",{attrs:{id:"从-html-获取数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从-html-获取数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 从 HTML 获取数据")]),s("p",[t._v("有时候数据是写在 HTML 里的，没有接口供我们调用，这时候可以使用 "),s("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("axios")]),t._v(" 请求 HTML 数据，然后使用 "),s("a",{attrs:{href:"https://github.com/cheeriojs/cheerio",target:"_blank",rel:"noopener noreferrer"}},[t._v("cheerio")]),t._v(" 解析 HTML，再把数据赋值给 ctx.state.data，可以直接看这个典型的例子："),s("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/blob/master/routes/jianshu/home.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("/routes/jianshu/home.js")])]),s("h3",{attrs:{id:"使用缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用缓存","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用缓存")]),s("p",[t._v("所有路由都有一个缓存，缓存时间在 "),s("code",[t._v("config.js")]),t._v(" 里设定，但某些接口返回的内容可能长时间都不会变化，这时应该给这些数据设置一个更长的缓存。")]),s("p",[t._v("添加缓存:")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("set")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" number"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// time 为缓存时间，单位为秒")]),t._v("\n")])]),s("p",[t._v("获取缓存:")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" value "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" ctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token keyword"}},[t._v("get")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("p",[t._v("可以直接看这个典型的例子："),s("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/blob/master/routes/zhihu/daily.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("/routes/zhihu/daily.js")]),t._v("，这个例子中需要获取每篇文章的详细内容，每篇文章都需要单独请求一次，请求很多而且每个请求只需要一次，这时候可以把结果缓存一天。")]),s("h3",{attrs:{id:"数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据")]),s("p",[t._v("获取到的数据赋给 ctx.state.data，然后数据会经过 "),s("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/blob/master/middleware/template.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("template.js")]),t._v(" 中间件处理，最后传到 "),s("a",{attrs:{href:"https://github.com/DIYgod/RSSHub/blob/master/views/rss.art",target:"_blank",rel:"noopener noreferrer"}},[t._v("/views/rss.art")]),t._v(" 来生成最后的 RSS 结果，每个字段的含义如下:")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ctx"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    title"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 项目的标题")]),t._v("\n    link"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 指向项目的链接")]),t._v("\n    description"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 描述项目")]),t._v("\n    item"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{attrs:{class:"token comment"}},[t._v("// 其中一篇文章或一项内容")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            title"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 文章标题")]),t._v("\n            description"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 文章内容或描述")]),t._v("\n            pubDate"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 文章发布时间")]),t._v("\n            guid"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 文章唯一标示，必须唯一，可选，默认为文章链接")]),t._v("\n            link"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 指向文章的链接")]),t._v("\n        "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("h2",{attrs:{id:"参与讨论"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参与讨论","aria-hidden":"true"}},[t._v("#")]),t._v(" 参与讨论")]),s("ol",[s("li",[s("a",{attrs:{href:"https://t.me/rsshub",target:"_blank",rel:"noopener noreferrer"}},[t._v("Telegram 群")])])])])}],!1,null,null,null);a.default=e.exports}}]);