"use strict";
(() => {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 2196:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ contact)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ContainerBlock.js + 2 modules
var ContainerBlock = __webpack_require__(5585);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(9536);
;// CONCATENATED MODULE: ./components/Contact.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'emailjs-com'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




function Contact() {
    function sendEmail(e) {
        e.preventDefault();
        Object(function webpackMissingModule() { var e = new Error("Cannot find module 'emailjs-com'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("service_id", "template_id", e.target, "user_id").then((result)=>{
            console.log(result.text);
        }, (error)=>{
            console.log(error.text);
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800 antialiased",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: " text-5xl md:text-9xl font-bold py-20 text-center md:text-left",
                    children: "Contact"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative z-10 rounded-md shadow-md bg-[#02044A] p-4 md:p-10 lg:p-20 max-w-6xl mx-auto mb-20 -mt-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "md:ml-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                                    className: "",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-gray-50 font-semibold text-2xl",
                                            children: "Get in touch, let's talk."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            className: "font-light text-base text-gray-200 mt-2",
                                            children: "Fill in the details and I'll get back to you as soon as I can."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "icons-container inline-flex flex-col my-20",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    fill: "currentColor",
                                                    className: "bi bi-telephone-fill h-4 w-4 text-blue-500",
                                                    viewBox: "0 0 16 16",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-gray-50 font-light text-sm",
                                                    children: data/* default.phone */.Z.phone
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    fill: "currentColor",
                                                    className: "bi bi-envelope-fill h-4 w-4 text-blue-500",
                                                    viewBox: "0 0 16 16",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-gray-50 font-light text-sm",
                                                    children: data/* default.email */.Z.email
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex flex-row items-center space-x-6 rounded-md border border-[#02044A] hover:border hover:border-blue-500 p-4",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    width: "16",
                                                    height: "16",
                                                    fill: "currentColor",
                                                    className: "bi bi-pin-fill h-4 w-4 text-blue-500",
                                                    viewBox: "0 0 16 16",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-gray-50 font-light text-sm",
                                                    children: data/* default.address */.Z.address
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "social-icons flex flex-row space-x-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: data/* default.socialLinks.linkedin */.Z.socialLinks.linkedin,
                                            className: "h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "24",
                                                height: "24",
                                                className: "text-gray-50",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                                                    fill: "currentColor"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: data/* default.socialLinks.twitter */.Z.socialLinks.twitter,
                                            className: "h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                width: "24",
                                                height: "24",
                                                className: "text-gray-50",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M8 3C9.10457 3 10 3.89543 10 5V8H16C17.1046 8 18 8.89543 18 10C18 11.1046 17.1046 12 16 12H10V14C10 15.6569 11.3431 17 13 17H16C17.1046 17 18 17.8954 18 19C18 20.1046 17.1046 21 16 21H13C9.13401 21 6 17.866 6 14V5C6 3.89543 6.89543 3 8 3Z",
                                                    fill: "currentColor"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: data/* default.socialLinks.instagram */.Z.socialLinks.instagram,
                                            className: "h-10 w-10 rounded-full hover:bg-blue-500 flex items-center justify-center cursor-pointer",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                                width: "24",
                                                height: "24",
                                                className: "text-gray-50",
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z",
                                                        fill: "currentColor"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        d: "M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z",
                                                        fill: "currentColor"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z",
                                                        fill: "currentColor"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                            onSubmit: sendEmail,
                            className: "form rounded-lg bg-white p-4 flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
                                    htmlFor: "name",
                                    className: "text-sm text-gray-600 mx-4",
                                    children: [
                                        " ",
                                        "Your Name"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500",
                                    name: "name"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "email",
                                    className: "text-sm text-gray-600 mx-4 mt-4",
                                    children: "Email"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    className: "font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500",
                                    name: "email"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "message",
                                    className: "text-sm text-gray-600 mx-4 mt-4",
                                    children: "Message"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                    rows: "4",
                                    type: "text",
                                    className: "font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500",
                                    name: "message"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    type: "submit",
                                    className: "bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold",
                                    children: "Send Message"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/contact.js




function contact() {
    return /*#__PURE__*/ jsx_runtime_.jsx(ContainerBlock/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Contact, {})
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
var __webpack_exports__ = __webpack_require__.X(0, [664,585], () => (__webpack_exec__(2196)));
module.exports = __webpack_exports__;

})();