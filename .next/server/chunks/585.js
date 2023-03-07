"use strict";
exports.id = 585;
exports.ids = [585];
exports.modules = {

/***/ 5585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ContainerBlock)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: ./constants/data.js
var data = __webpack_require__(9536);
;// CONCATENATED MODULE: ./components/Navbar.js






function Navbar() {
    const router = (0,router_.useRouter)();
    console.log(router.asPath);
    const { theme , setTheme  } = (0,external_next_themes_.useTheme)();
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-6xl  mx-auto px-4 py-10 md:py-20",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex  md:flex-row justify-between items-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: "font-semibold text-xl dark:text-gray-100",
                                        children: data/* default.name */.Z.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "text-base font-light text-gray-500 dark:text-gray-300",
                                        children: data/* default.designation */.Z.designation
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-x-8 hidden md:block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: `text-base  ${router.asPath === "/about" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
                                    children: [
                                        "About",
                                        " ",
                                        router.asPath === "/about" && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-arrow-down inline-block h-3 w-3",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/experience",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: `text-base  ${router.asPath === "/experience" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
                                    children: [
                                        "Experience",
                                        " ",
                                        router.asPath === "/experience" && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-arrow-down inline-block h-3 w-3",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://stanforddaily.com/author/tabaker/",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: `text-base  ${router.asPath === "/writing" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
                                    children: [
                                        "Writing",
                                        router.asPath === "/writing" && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-arrow-down inline-block h-3 w-3",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: `text-base  ${router.asPath === "/contact" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
                                    children: [
                                        "Contact",
                                        router.asPath === "/contact" && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-arrow-down inline-block h-3 w-3",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "https://drive.google.com/file/d/11R-rPPMP3a4wdeCuh-4djFDgCiHDOt2e/view?usp=sharing",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                    className: `text-base  ${router.asPath === "/CV" ? "text-gray-800 font-bold dark:text-gray-400" : "text-gray-600 dark:text-gray-300 font-normal "}`,
                                    children: [
                                        "CV",
                                        router.asPath === "/CV" && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            width: "16",
                                            height: "16",
                                            fill: "currentColor",
                                            className: "bi bi-arrow-down inline-block h-3 w-3",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "space-x-4 flex flex-row items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: data/* default.socialLinks.instagram */.Z.socialLinks.instagram,
                                className: "text-base font-normal text-gray-600 dark:text-gray-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-instagram h-5 w-5",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: data/* default.socialLinks.twitter */.Z.socialLinks.twitter,
                                className: "text-base font-normal text-gray-600 dark:text-gray-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-twitter h-5 w-5",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: data/* default.socialLinks.linkedin */.Z.socialLinks.linkedin,
                                className: "text-base font-normal text-gray-600 dark:text-gray-300",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "16",
                                    height: "16",
                                    fill: "currentColor",
                                    className: "bi bi-linkedin h-5 w-5",
                                    viewBox: "0 0 16 16",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                "aria-label": "Toggle Dark Mode",
                                type: "button",
                                className: "w-10 h-10 p-3 rounded focus:outline-none",
                                onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
                                children: mounted && /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    stroke: "currentColor",
                                    className: "w-4 h-4 text-yellow-500 dark:text-yellow-500",
                                    children: theme === "dark" ? /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                    })
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-x-8 block md:hidden mt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/about",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-base font-normal text-gray-600 dark:text-gray-300",
                            children: "About"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/experience",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-base font-normal text-gray-600 dark:text-gray-300",
                            children: "Experience"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://stanforddaily.com/author/tabaker/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-base font-normal text-gray-600 dark:text-gray-300",
                            children: "Writing"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "https://drive.google.com/file/d/11R-rPPMP3a4wdeCuh-4djFDgCiHDOt2e/view?usp=sharing",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "text-base font-normal text-gray-600 dark:text-gray-300",
                            children: "CV"
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Footer.js



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-[#F1F1F1] dark:bg-gray-900",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-6xl  mx-auto px-4 py-10 md:py-20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-0.5 w-full bg-white dark:bg-gray-700"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "\xa9 2021 Theo Baker."
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                "Currently Reading: ",
                                data/* default.currentBook */.Z.currentBook
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-x-4 flex flex-row items-center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: data/* default.socialLinks.instagram */.Z.socialLinks.instagram,
                                    className: "text-base font-normal text-gray-600 dark:text-gray-300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-instagram h-5 w-5",
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: data/* default.socialLinks.twitter */.Z.socialLinks.twitter,
                                    className: "text-base font-normal text-gray-600 dark:text-gray-300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-twitter h-5 w-5",
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: data/* default.socialLinks.linkedin */.Z.socialLinks.linkedin,
                                    className: "text-base font-normal text-gray-600 dark:text-gray-300",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "16",
                                        height: "16",
                                        fill: "currentColor",
                                        className: "bi bi-linkedin h-5 w-5",
                                        viewBox: "0 0 16 16",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/ContainerBlock.js






function ContainerBlock({ children , ...customMeta }) {
    const router = (0,router_.useRouter)();
    const meta = {
        title: "Theo Baker - Researcher, Writer, Builder",
        description: `An intrepid investigative reporter and technologist.`,
        image: "/WCKPoland.png",
        type: "website",
        ...customMeta
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "robots",
                        content: "follow, index"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: meta.description,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `https://theobaker.info${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "canonical",
                        href: `https://theobaker.info${router.asPath}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: meta.type
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: "Manu Arora"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: meta.image
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:site",
                        content: "@theobaker"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:title",
                        content: meta.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:description",
                        content: meta.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "twitter:image",
                        content: meta.image
                    }),
                    meta.date && /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "article:published_time",
                        content: meta.date
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "dark:bg-gray-800 w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 9536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const userData = {
    githubUsername: "theobaker",
    name: "Theo Baker",
    designation: "Investigations",
    avatarUrl: "/WCKPoland.jpg",
    email: "tabsterbaker [at] gmail.com",
    phone: "Two-oh-two 360-1086",
    address: "Washington, DC | Stanford, CA",
    currentBook: "Power Failure by Bill Cohan",
    home: {
        description: [
            `Hi there! My name is Theo (he/they) and I'm an undergraduate at Stanford University. My reporting has led to an investigation into Stanford's renowned neuroscientist president and made me the youngest ever recipient of the prestigious George Polk Award.`,
            `I love reading, writing, CS, and psychology! I'm a social science researcher with expertise in public opinions and current affairs and I believe in knowing more about the world, whether through anecdote or data (and ideally both).`
        ]
    },
    about: {
        title: "I'm a student with a burning curiosity about why we do what we do. Tackling this question has led me from humanities to CS to social science to somewhere in between, using the tools of many trades to answer universal questions.",
        description: [
            `Recently 18, my writing has been picked up by CNN, AP, LA Times, Washington Post, CBS, Wall Street Journal, Good Morning America, Axios, Science, ABC, Daily Beast, Chicago Tribune, NBC, SF Chronicle, KQED, and more. I've exposed a professor for $30m of fraud, revealed that a man was pretending to be a student and harassing others for a year with Stanford's knowledge, reported on a "war on fun" that has students and administrators worried, and reported on allegedly falsified Alzheimer's research that was once thought worthy of a Nobel.`,
            `Currently an undergrad at Stanford, I'm having a blast exploring the incredible opportunities available to me. I live and breathe for the bright-minded builder circles that make things just for the hell of it. And at the same time, I'm dedicated to the History, Philosophy, and English classes that ground me in precedent.`,
            `I'm lucky enough to have built up the technical skills to keep up in techy ventures. TreeHacks, in particular, has been a fantastic experience. Working with a brilliant team of twenty-or-so students, I helped put on an event for 1,750 college students from around the world. Our shared goal is to find brilliant people of all different experience levels and provide them the opportunities to build cool things in cool areas (e.g. Sustainability, Healthcare, Education, etc.). That's why we pay for all of their travel and food expenses, provide hundreds of thousands of dollars in provided hardware and software, run dozens of workshops, and work with our 50+ sponsors to offer $160k in prizes.`,
            `I'm also a dedicated researcher. I've done work to analyze QAnon rhetoric and compare it to Congressional tweets using NLP tools; I've fielded national polls and published my results in Axios; I've contributed to research on election disinformation and cyber policy efforts; and I've spent countless hours in and out of archives studying the rise of populism in the 20th century.`,
            `Ultimately, I've been extraordinarily lucky with the opportunities I've had and I hope I've done some cool things with them.`
        ],
        currentProject: "Graduating High School",
        currentProjectUrl: "https://andover.edu"
    },
    experience: [
        {
            title: "Investigations Editor",
            company: "The Stanford Daily",
            year: "2023",
            companyLink: "https://stanforddaily.com/author/tabaker",
            desc: 'As Investigations Editor, I’ve authored work that led to the first ever Polk Award for a student newspaper. My articles have prompted investigations by Stanford, Science, Cell, and other organizations; plus my journalism has been picked up dozens of times by national news outlets. My very first article was referenced on the front page of the Wall Street Journal. I\'ve broken stories about an reported $30m fraud verdict against a famous genenticist, a "war on social life" that has led to a decline in social events of all sorts and an increase in medical emergencies, a man who pretended to be a Stanford student for a year, living in dorms all the while Stanford knew of his presence and did not inform students, and plenty besides that.'
        },
        {
            title: "Organizer",
            company: "TreeHacks",
            year: "2023",
            companyLink: "https://treehacks.com",
            desc: "I helped run an event for 1,750 college students from around the world, planning and running dozens of workshops, recruiting and working with sponsors like YCombinator and OpenAI, and helping put together a weekend designed for maximum impact in Education, Healthcare, Sustainability, Privacy + Security, New Frontiers, and other areas. We provided $160k in prizes and paid for all of our teams to fly out from around the world to remove as many barriers to entry as possible. Teams had access to hardware, APIs, incredible mentors, and everything they needed to make awesome projects."
        },
        {
            title: "Teaching Assistant",
            company: "Stanford University",
            year: "2023",
            companyLink: "https://stanford.edu/",
            desc: "Under CS Professor Jerry Cain, I'm helping to teach CS106S: Coding for Social Good, a class designed to incorporate technical skills with ethical frameworks."
        },
        {
            title: "Research Assistant",
            company: "Cyber Policy Center",
            year: "2022",
            companyLink: "https://cyber.fsi.stanford.edu/io",
            desc: "I'm helping Marietje Schaake, the former Dutch representative to the European Parliament, write a book about Cyber Policy."
        },
        {
            title: "Research Assistant",
            company: "Stanford Internet Observatory",
            year: "2022",
            companyLink: "https://cyber.fsi.stanford.edu/io",
            desc: "I worked with the Election Integrity Partnership to do real-time election disinformation monitoring and combating during the 2022 midterm season using OSINT tools and working with a phenomenal team of researchers at Stanford and the University of Washington."
        },
        {
            title: "Volunteer",
            company: "World Central Kitchen",
            year: "2022",
            companyLink: "https://wck.org",
            desc: "Weeks after I graduated from high school, I got on a plane and flew to the border of Ukraine, volunteering with the World Central Kitchen in Prezmysl, Poland to feed thousands of displaced Ukrainians fleeing Putin's brutal war. Our team prepared up to 7,000 sandwiches and thousands more hot meals each day. I also spent time distributing food at the train station where refugees were arriving from Ukraine and in the converted mall that housed a thousand beds full of mostly women and children."
        },
        {
            title: "Independent Researcher",
            company: "Phillips Academy Andover",
            year: "2022",
            companyLink: "https://andover.edu",
            desc: "In my last year at Andover, I'm undertaking an ambitious series of projects. Currently, I'm conducting an interdisciplinary Independent Project in History/English where I'm writing a counterfactual novel. I'm conducting another History/English project next term about post-Napoleonic European Literature, while simultaneously completing another Computer Science IP. And in the Spring, I've been accepted into Andover's hallowed school within a school – The Workshop. The Workshop is a multidisciplinary opportunity which requires me to take no classes other than The Workshop, instead spending all of my time on the projects we produce. I hope to begin a longitudinal study on pedagogy which will continue after my departure."
        },
        {
            title: "College Intern",
            company: "The Generation Lab",
            year: "2021",
            companyLink: "https://generationlab.org",
            desc: "Because of my research with The Gen Z Project, I was accepted to the college internship program of the Generation Lab, a public opinions firm focused on 18-29 year olds. I generated my own poll, pitched it, fielded it, analyzed it, and had it published in Axios. I also worked on AI strategy for the firm and expanded their database of respondents by deploying webscrapers on college directories."
        },
        {
            title: "Co-President",
            company: "Computer Science Club",
            year: "2021",
            companyLink: "https://andover.edu",
            desc: "Despite being a new Junior, I earned a number of board positions. I'm most proud of CS Club. Under my leadership, we've grown into the largest tech club on campus with more than 270 students on our canvas page and with an average of around 40 participants a session. We teach, discuss, host speakers, and compete."
        },
        {
            title: "QAnon Twitter Research",
            company: "Computer Science Independent Project",
            year: "2020",
            companyLink: "https://csc600.wordpress.com",
            desc: "I undertook an independent project in computer science where I generated novel research about the influence of QAnon rhetoric on the Twitter messages of mainstream House Republicans over time using Machine Learning tools. I spent more than 600 hours on the project, while also taking 5 other courses."
        },
        {
            title: "New Junior",
            company: "Phillips Academy Andover",
            year: "2020",
            companyLink: "https://andover.edu",
            desc: "After 7 years at St. Albans, it was time to make a change. I left in the middle of a global pandemic to attend the world's best boarding school... virtually. I've maintained a 5.8/6.0 GPA with coursework intended for sophomores or juniors in college."
        },
        {
            title: "The Gen Z Project",
            company: "Founder",
            year: "2020",
            companyLink: "https://genzproject.org",
            desc: "I was frustrated by the gaps in youth polling, so I decided to do it myself. I set up The Gen Z Project to provide quality qualitative research on teens."
        },
        {
            title: "Summer Program",
            company: "Stanford Humanities Institute",
            year: "2020",
            companyLink: "https://stanford.edu",
            desc: "I attended the prestigious Stanford Humanities Institute, where I took an intensive course on Ancient Rome and its legacies. Under Stanford Professor Christopher Krebs, I read nearly two dozen texts and enjoyed every minute of my experience."
        },
        {
            title: "Student Journalism",
            company: "St. Albans News, The Exchanged, The Phillipian, The Revere.",
            year: "2019",
            companyLink: "https://exchanged.org",
            desc: "I've edited and written for four student publications. In 2019, I was the only editor to serve at both of my school's newspapers and the youngest editor at both. I wrote articles which garnered as much as 15x the interaction of the next-most-interacted-with article from the publication. Read some of my writings above."
        },
        {
            title: "Euro Challenge",
            company: "The Federal Reserve Bank, New York City.",
            year: "2018",
            companyLink: "https://eurochallenge.org",
            desc: "Euro Challenge is a national economics competition sponsorerd by the EU. My team and I taught ourselves economics and won our regional competition. We then received a paid trip to present at the Fed, where we placed 6th in the country."
        }
    ],
    resumeUrl: "https://drive.google.com/drive/u/0/folders/1FOz4oBVtEm0Zm4AjcCe_urWZvqiheshg",
    socialLinks: {
        instagram: "https://instagram.com/tabsterbaker",
        twitter: "https://twitter.com/tab_delete",
        linkedin: "https://linkedin.com/in/theo-baker/",
        github: "https://github.com/theobaker",
        facebook: "https://facebook.com/"
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userData);


/***/ })

};
;