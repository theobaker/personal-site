(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{7375:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{Z:function(){return r}})},6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var a=o(n(7294)),c=n(1689),i=n(2441),u=n(5749),l={};function f(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.asPath||"/",s=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,b=e.shallow,g=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=a.Children.only(v),x=m&&"object"===typeof m&&m.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),E=r(w,2),k=E[0],_=E[1],L=a.default.useCallback((function(e){k(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,k]);(0,a.useEffect)((function(){var e=_&&t&&(0,c.isLocalURL)(d),r="undefined"!==typeof y?y:n&&n.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&f(n,d,p,{locale:r})}),[p,d,_,y,t,n]);var O={ref:L,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i}))}(e,n,d,p,h,b,g,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var j="undefined"!==typeof y?y:n&&n.locale,M=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(p,j,n&&n.locales,n&&n.domainLocales);O.href=M||(0,c.addBasePath)((0,c.addLocale)(p,j,n&&n.defaultLocale))}return a.default.cloneElement(m,O)};t.default=s},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,u=(0,o.useRef)(),l=(0,o.useState)(!1),f=r(l,2),s=f[0],d=f[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||s||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,s]);return(0,o.useEffect)((function(){if(!c&&!s){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[s]),[p,s]};var o=n(7294),a=n(8391),c="undefined"!==typeof IntersectionObserver;var i=new Map},6522:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var r=n(5893),o=(n(7294),n(6063));n(1565);function a(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("section",{className:"bg-white dark:bg-gray-800",children:(0,r.jsx)("div",{className:"max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800",children:(0,r.jsx)("h1",{className:" text-5xl md:text-9xl font-bold py-20 text-center md:text-left",children:"Under construction."})})})})}function c(){return(0,r.jsx)(o.Z,{title:"Writing - Theo Baker",children:(0,r.jsx)(a,{})})}},5686:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/writing",function(){return n(6522)}])},1664:function(e,t,n){e.exports=n(6071)},1163:function(e,t,n){e.exports=n(2441)}},function(e){e.O(0,[63,774,888,179],(function(){return t=5686,e(e.s=t);var t}));var t=e.O();_N_E=t}]);