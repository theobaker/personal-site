"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./components/ContainerBlock.js + 2 modules
var ContainerBlock = __webpack_require__(5585);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(9536);
;// CONCATENATED MODULE: ./components/FavouriteProjects.js




function FavouriteProjects() {
    var _userData_home_description;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-[#F1F1F1] -mt-40 dark:bg-gray-700",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "flex flex-col md:flex-row justify-between items-center pt-40 mx-5 md:my-10 lg:my-20",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/signature.png",
                            width: "550",
                            alt: "signature"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-span-1 md:col-span-2",
                            children: (_userData_home_description = data/* default.home.description */.Z.home.description) === null || _userData_home_description === void 0 ? void 0 : _userData_home_description.map((desc, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-xl max-w-lg text-gray-700 mb-4 dark:text-gray-300 ",
                                    children: desc
                                }, idx))
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/about",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                        className: "w-full mb-20 row-start-2 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex space-x-4 justify-center items-center dark:text-gray-700",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "16",
                                height: "16",
                                fill: "currentColor",
                                className: "bi bi-arrow-up-right-square",
                                stroke: "4",
                                strokeWidth: "4",
                                viewBox: "0 0 16 16",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    fillRule: "evenodd",
                                    d: "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Read my bio!"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./lib/getLatestRepos.js

const getLatestRepos = async (data, token)=>{
    // console.log("data", data);
    try {
        const username = data.githubUsername;
        // let token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
        // console.log("TOKEN", token);
        if (token) {
            const res = await external_axios_default().get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`, {
                headers: {
                    Authorization: `token ${token}`
                }
            });
            let repos = res.data.items;
            let latestSixRepos = repos.splice(0, 6);
            // console.log("LATEST 6 repos", latestSixRepos);
            return latestSixRepos;
        } else {
            const res = await external_axios_default().get(`https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`);
            let repos = res.data.items;
            let latestSixRepos = repos.splice(0, 6);
            return latestSixRepos;
        }
    } catch (err) {
        console.log(err);
    }
};
/* harmony default export */ const lib_getLatestRepos = (getLatestRepos);

;// CONCATENATED MODULE: ./components/LatestCode.js





function LatestCode({ repositories  }) {
    const [repos, setRepos] = useState([]);
    useEffect(async ()=>{
        // let latestRepos = await getLatestRepos(userData);
        // console.log("latestRepos", latestRepos);
        setRepos(repositories);
    }, []);
    return /*#__PURE__*/ _jsxs("section", {
        className: "bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40",
        children: [
            /*#__PURE__*/ _jsx("div", {
                className: "max-w-6xl mx-auto",
                children: /*#__PURE__*/ _jsxs("div", {
                    className: "flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10",
                    children: [
                        /*#__PURE__*/ _jsx("h1", {
                            className: "text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left",
                            children: "Latest Code"
                        }),
                        /*#__PURE__*/ _jsxs("a", {
                            href: `https://github.com/${userData.githubUsername}`,
                            className: "mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700",
                            children: [
                                /*#__PURE__*/ _jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-arrow-up-right-square",
                                    stroke: "4",
                                    strokeWidth: "4",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ _jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: "View GitHub"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20",
                children: repos && repos.map((latestRepo, idx)=>/*#__PURE__*/ _jsx(GithubRepoCard, {
                        latestRepo: latestRepo
                    }, "idx"))
            })
        ]
    });
}
const GithubRepoCard = ({ latestRepo  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "github-repo",
        children: [
            /*#__PURE__*/ _jsx("h1", {
                className: "font-semibold text-xl dark:text-gray-200 text-gray-700",
                children: latestRepo.name
            }),
            /*#__PURE__*/ _jsx("p", {
                className: "text-base font-normal my-4 text-gray-500",
                children: latestRepo.description
            }),
            /*#__PURE__*/ _jsxs("a", {
                href: latestRepo.clone_url,
                className: "font-semibold group flex flex-row space-x-2 w-full items-center",
                children: [
                    /*#__PURE__*/ _jsx("p", {
                        children: "View Repository "
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "transform  group-hover:translate-x-2 transition duration-300",
                        children: "→"
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: external "react-rough-notation"
const external_react_rough_notation_namespaceObject = require("react-rough-notation");
;// CONCATENATED MODULE: ./components/RainbowHighlight.js



const RainbowHighlight = ({ color , children  })=>{
    // Change the animation duration depending on length of text we're animating (speed = distance / time)
    const animationDuration = Math.floor(30 * children.length);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_rough_notation_namespaceObject.RoughNotation, {
        type: "highlight",
        multiline: true,
        padding: [
            0,
            2
        ],
        iterations: 1,
        animationDuration: animationDuration,
        color: color,
        children: children
    });
};

;// CONCATENATED MODULE: ./components/Hero.js





function Hero() {
    const colors = [
        "#D00070",
        "#8C4799",
        "#0032A0",
        "#3B82F6"
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-row justify-center items-start overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-1/2 md:w-1/2 mx-auto text-center md:text-left lg:p-20",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_rough_notation_namespaceObject.RoughNotationGroup, {
                    show: true,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(RainbowHighlight, {
                            color: colors[0],
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-4xl md:text-8xl font-bold text-gray-900 dark:text-gray-200 my-2",
                                children: "Student."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RainbowHighlight, {
                            color: colors[1],
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-4xl md:text-8xl font-bold text-gray-900 dark:text-gray-200 my-2",
                                children: "Writer."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RainbowHighlight, {
                            color: colors[2],
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-4xl md:text-8xl font-bold text-gray-900 dark:text-gray-200 my-2",
                                children: "Builder."
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(RainbowHighlight, {
                            color: colors[3],
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-4xl md:text-8xl font-bold text-gray-900 dark:text-gray-200 my-2",
                                children: "Researcher."
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "w-3/4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: data/* default.avatarUrl */.Z.avatarUrl,
                            width: "400",
                            height: "400",
                            alt: "avatar",
                            className: " shadow"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-row justify-between mt-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-row space-x-4",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-arrow-90deg-up",
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            fillRule: "evenodd",
                                            d: "M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "font-mono",
                                        children: "That's me with the WCK!"
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./pages/index.js









function Home({ repositories  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerBlock/* default */.Z, {
        title: "Theo Baker - Student, Journalist, Builder",
        description: "This is my personal website! Come learn about me!",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Hero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FavouriteProjects, {})
        ]
    });
}
const getServerSideProps = async ()=>{
    console.log(process.env.GITHUB_AUTH_TOKEN);
    let token = process.env.GITHUB_AUTH_TOKEN;
    const repositories = await lib_getLatestRepos(data/* default */.Z, token);
    // console.log("REPOSITORIES", repositories);
    return {
        props: {
            repositories
        }
    };
};


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
var __webpack_exports__ = __webpack_require__.X(0, [664,585], () => (__webpack_exec__(9410)));
module.exports = __webpack_exports__;

})();