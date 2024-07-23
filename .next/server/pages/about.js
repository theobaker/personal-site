"use strict";
(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 6867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ContainerBlock.js + 2 modules
var ContainerBlock = __webpack_require__(5585);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(9536);
;// CONCATENATED MODULE: ./components/AboutMe.js



function AboutMe() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "bg-white dark:bg-gray-800",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800",
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: " text-5xl md:text-9xl font-bold py-20 text-center md:text-left",
                    children: "About Me."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-[#F1F1F1] -mt-10 dark:bg-gray-900",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-container max-w-6xl mx-auto pt-20",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "leading-loose text-2xl md:text-4xl font-semibold  mx-4",
                        style: {
                            lineHeight: "3rem"
                        },
                        children: data/* default.about.title */.Z.about.title
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-[#F1F1F1] dark:bg-gray-900 px-4",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "inline-flex flex-col",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-xl font-semibold text-gray-700 dark:text-gray-200",
                                            children: "Contact"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-lg text-gray-500 mt-4 dark:text-gray-300",
                                            children: [
                                                "For any sort of inquiry or question, shoot an",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: `mailto:${data/* default.email */.Z.email}`,
                                                    className: "text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300",
                                                    children: "email"
                                                }),
                                                "! ",
                                                "I love to chat about all things tech ethics, current events, and public affairs – if you wanna talk hit me up :)"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                            className: "text-xl font-semibold text-gray-700 dark:text-gray-200",
                                            children: "Get to know me"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "text-lg text-gray-500 mt-4 dark:text-gray-300",
                                            children: [
                                                "I'm passionate about a lot of things, from cars to neuroscience to comic books and cooking. If you want some random stuff, this is the",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://drive.google.com/file/d/1J6sDcGMHgIw9ugtLmW7gqsWyRTUPFrKE/view?usp=sharing",
                                                    target: "__blank",
                                                    className: "text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300",
                                                    children: "cover"
                                                }),
                                                " ",
                                                "to a project I did about Angels in America.",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://glasser.recipes/",
                                                    target: "__blank",
                                                    className: "text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300",
                                                    children: "This"
                                                }),
                                                " ",
                                                "is a link to an online cookbook I compiled for my family with contributions from my relatives and some original recipes. This",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://drive.google.com/file/d/1mcs9W8NlRdOF6L6tHWU0mpZu2KZ5aCyl/view?usp=sharing",
                                                    target: "__blank",
                                                    className: "text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300",
                                                    children: "poster"
                                                }),
                                                " ",
                                                "is the first poll I ever fielded –\xa0a fifth grade science fair project examining the gender bias of the students at my school versus the general population. And if you want to know me better, my",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "https://stanforddaily.com/author/tabaker/",
                                                    target: "__blank",
                                                    className: "text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300",
                                                    children: "writing"
                                                }),
                                                " ",
                                                "is a great place to go!"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200",
                                    children: "Social Links"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-4 ml-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-row justify-start items-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: data/* default.socialLinks.twitter */.Z.socialLinks.twitter,
                                                className: "flex flex-row items-center space-x-4 group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "my-4",
                                                        children: "→"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"
                                                            }),
                                                            "Twitter"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-row justify-start items-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: data/* default.socialLinks.github */.Z.socialLinks.github,
                                                className: "flex flex-row items-center space-x-4 group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "my-4",
                                                        children: "→"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"
                                                            }),
                                                            "GitHub"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-row justify-start items-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: data/* default.socialLinks.linkedin */.Z.socialLinks.linkedin,
                                                className: "flex flex-row items-center space-x-4 group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "my-4",
                                                        children: "→"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"
                                                            }),
                                                            "LinkedIn"
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex flex-row justify-start items-center",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                href: data/* default.socialLinks.instagram */.Z.socialLinks.instagram,
                                                className: "flex flex-row items-center space-x-4 group",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "my-4",
                                                        children: "→"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                        className: "text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"
                                                            }),
                                                            "Instagram"
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "col-span-1 md:col-span-2",
                            children: [
                                data/* default.about.description */.Z.about.description?.map((desc, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-xl text-gray-700 mb-4 dark:text-gray-300 ",
                                        children: desc
                                    }, idx)),
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50",
                                    children: "Tech Stack"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex flex-row flex-wrap mt-8",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
                                            className: "h-20 w-20 mx-4 my-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/java/java.png",
                                            className: "h-20 w-20 mx-4 my-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
                                            className: "h-20 w-20 mx-4 my-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png",
                                            className: "h-20 w-20 mx-4 my-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png",
                                            className: "h-20 w-20 mx-4 my-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png",
                                            className: "h-20 w-20 mx-4 my-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png",
                                            className: "h-20 w-20 mx-4 my-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png",
                                            className: "h-20 w-20 mx-4 my-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
                                            className: "h-20 w-20 mx-4 my-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/jmnote/z-icons/master/svg/python.svg",
                                            className: "h-20 w-20 mx-4 my-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/jmnote/z-icons/master/svg/github.svg",
                                            className: "h-20 w-20 mx-4 my-4"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "https://raw.githubusercontent.com/jmnote/z-icons/master/svg/bash.svg",
                                            className: "h-20 w-20 mx-4 my-4"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/about.js




function about() {
    return /*#__PURE__*/ jsx_runtime_.jsx(ContainerBlock/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(AboutMe, {})
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
var __webpack_exports__ = __webpack_require__.X(0, [664,585], () => (__webpack_exec__(6867)));
module.exports = __webpack_exports__;

})();