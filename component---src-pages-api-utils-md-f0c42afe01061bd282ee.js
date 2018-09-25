(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return u});var n=a(176),r=a.n(n),o=a(0),c=a.n(o),i=a(172),l=a(171);t.default=function(e){var t=e.components,a=r()(e,["components"]);return c.a.createElement(i.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:a,components:t},c.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"matchesstateparentstatevalue-childstatevalue"}},c.a.createElement(i.MDXTag,{name:"a",components:t,parentName:"h2",props:{href:"#matchesstateparentstatevalue-childstatevalue","aria-hidden":!0,class:"anchor"}}),c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"h2"},"matchesState(parentStateValue, childStateValue)")),c.a.createElement(i.MDXTag,{name:"p",components:t},"Determines if the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"childStateValue")," matches (is contained by, or equal to) the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"parentStateValue"),"."),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Arguments:")),c.a.createElement(i.MDXTag,{name:"ul",components:t},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"parentStateValue"),": the state value (or delimited string path) of the parent state value to match against"),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},c.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"childStateValue"),": the child state value (or delimited string path) of the state value to determine whether it is:"),c.a.createElement(i.MDXTag,{name:"ul",components:t,parentName:"li"},c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"equal to the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"parentStateValue")),c.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"or a child state value of the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"parentStateValue"),".")))),c.a.createElement(i.MDXTag,{name:"p",components:t},c.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Examples:")),c.a.createElement(i.MDXTag,{name:"p",components:t},"Typically, you would pass the ",c.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},".value")," of the state you want to match into the function:"),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metaString:""}},"import { matchesState } from 'xstate';\n\nconst nextState = machine.transition(/* ... */);\n\n// Check if nextState is in 'a.b':\nconst isInDesiredState = matchesState('a.b', nextState.value);\n")),c.a.createElement(i.MDXTag,{name:"p",components:t},"Some equality examples: "),c.a.createElement(i.MDXTag,{name:"pre",components:t},c.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metaString:""}},"matchesState('a', 'a'); // true\nmatchesState('b', 'b.b1'); // true\nmatchesState('b', { b: 'b1' }); // true\nmatchesState({ a: 'b' }, { a: 'b' }); // true\nmatchesState({ a: { b: 'c' } }, { a: { b: 'c' } }); // true\nmatchesState({ foo: 'bar' }, { foo: { bar: { baz: 'quo' } } }); // true\nmatchesState('b', { b: 'b1', c: 'c1' }); // true\nmatchesState('a.b.c', { a: { b: 'c' } }); // true\n\nmatchesState('a.a1', 'b.b1'); // false\nmatchesState('a.b.c', 'a.b'); // false\nmatchesState({ a: { b: { c: 'd' } } }, { a: 'b' }); // false\n")))};var u={}},164:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),o=a(4),c=a.n(o),i=a(163),l=a.n(i);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return i.withPrefix}),a.d(t,"navigate",function(){return i.navigate}),a.d(t,"push",function(){return i.push}),a.d(t,"replace",function(){return i.replace}),a.d(t,"navigateTo",function(){return i.navigateTo});var u=a(28);a.d(t,"waitForRouteChange",function(){return u.c});var s=a(165),m=a.n(s);a.d(t,"PageRenderer",function(){return m.a});var p=a(39);a.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),f=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},165:function(e,t,a){var n;e.exports=(n=a(168))&&n.default||n},166:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=i(a(0)),o=i(a(54)),c=i(a(4));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.default)({}),u=l.Provider,s=l.Consumer;t.withMDXComponents=function(e){return function(t){var a=t.components,o=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["components"]);return r.default.createElement(s,null,function(t){return r.default.createElement(e,n({components:a||t},o))})}};var m=function(e){var t=e.components,a=e.children;return r.default.createElement(u,{value:t},a)};m.propTypes={components:c.default.object.isRequired,children:c.default.element.isRequired},t.default=m},167:function(e){e.exports={data:{site:{siteMetadata:{title:"Xstate Docs"}}}}},168:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),o=a(0),c=a.n(o),i=a(4),l=a.n(i),u=a(53),s=a(1),m=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(u.a,r()({location:t,pageResources:a},a.json))};m.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=m},169:function(e,t,a){},171:function(e,t,a){"use strict";var n=a(167),r=a(0),o=a.n(r),c=a(4),i=a.n(c),l=a(175),u=a.n(l),s=a(164),m=function(e){var t=e.siteTitle;return o.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))},p=(a(169),function(e){var t=e.children;return o.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:n})});p.propTypes={children:i.a.node.isRequired};t.a=p},172:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(173);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(n).default}});var r=a(166);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},173:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=a(0),c=u(o),i=u(a(174)),l=a(166);function u(e){return e&&e.__esModule?e:{default:e}}var s={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.parentName,r=e.props,o=void 0===r?{}:r,l=e.children,u=e.components,m=void 0===u?{}:u,p=e.Layout,d=e.layoutProps,f=m[a+"."+t]||m[t]||s[t]||t;return p?((0,i.default)(this,p),c.default.createElement(p,n({components:m},d),c.default.createElement(f,o,l))):c.default.createElement(f,o,l)}}]),t}();t.default=(0,l.withMDXComponents)(m)},174:function(e,t,a){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,c=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,s=u&&u(Object);e.exports=function e(t,a,m){if("string"!=typeof a){if(s){var p=u(a);p&&p!==s&&e(t,p,m)}var d=c(a);i&&(d=d.concat(i(a)));for(var f=0;f<d.length;++f){var h=d[f];if(!(n[h]||r[h]||m&&m[h])){var g=l(a,h);try{o(t,h,g)}catch(e){}}}return t}return t}}}]);
//# sourceMappingURL=component---src-pages-api-utils-md-f0c42afe01061bd282ee.js.map