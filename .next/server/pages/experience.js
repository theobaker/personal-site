"use strict";
(() => {
var exports = {};
exports.id = 538;
exports.ids = [538];
exports.modules = {

/***/ 3182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ experience)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ContainerBlock.js + 2 modules
var ContainerBlock = __webpack_require__(5585);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(9536);
;// CONCATENATED MODULE: ./components/Experience.js



function Experience() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "bg-white dark:bg-gray-800",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: " text-5xl md:text-9xl font-bold py-20 text-center md:text-left",
                    children: "Experience"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-[#F1F1F1] dark:bg-gray-900 -mt-4",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid grid-cols-1 dark:bg-gray-900 max-w-xl mx-auto pt-20",
                    children: data/* default.experience.map */.Z.experience.map((exp, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ExperienceCard, {
                                    title: exp.title,
                                    desc: exp.desc,
                                    year: exp.year,
                                    company: exp.company,
                                    companyLink: exp.companyLink
                                }, idx),
                                idx === data/* default.experience.length */.Z.experience.length - 1 ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "divider-container flex flex-col items-center -mt-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-4 h-4 bg-green-500 rounded-full relative z-10",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-4 h-4 bg-green-500 rounded-full relative z-10 animate-ping"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-1 h-24 bg-gray-200 dark:bg-gray-500 rounded-full -mt-2"
                                        })
                                    ]
                                })
                            ]
                        }))
                })
            })
        ]
    });
}
const ExperienceCard = ({ title , desc , year , company , companyLink  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative experience-card border p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 z-10 mx-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "absolute -top-10 md:-left-10 md:-top-10 text-4xl text-gray-200 font-bold dark:text-gray-800",
                children: year
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: "font-semibold text-xl",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: companyLink,
                className: "text-gray-500",
                children: company
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-gray-600 dark:text-gray-400 my-2",
                children: desc
            })
        ]
    });
};

;// CONCATENATED MODULE: ./pages/experience.js




function experience() {
    return /*#__PURE__*/ jsx_runtime_.jsx(ContainerBlock/* default */.Z, {
        title: "Experience - Theo Baker",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Experience, {})
    });
}


/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,585], () => (__webpack_exec__(3182)));
module.exports = __webpack_exports__;

})();