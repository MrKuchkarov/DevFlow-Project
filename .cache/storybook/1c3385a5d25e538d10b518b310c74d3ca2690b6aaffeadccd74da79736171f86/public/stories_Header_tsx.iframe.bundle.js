"use strict";
(self["webpackChunknextjs13"] = self["webpackChunknextjs13"] || []).push([["stories_Header_tsx"],{

/***/ "./stories/Button.tsx":
/*!****************************!*\
  !*** ./stories/Button.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.css */ "./stories/button.css");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





/**
 * Primary UI component for user interaction
 */ const Button = (param)=>{
    let { primary = false, size = "medium", backgroundColor, label, ...props } = param;
    const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        ...props,
        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([
            [
                "1db2ff09cbb475ab",
                [
                    backgroundColor
                ]
            ]
        ]) + " " + (props && props.className != null && props.className || [
            "storybook-button",
            "storybook-button--".concat(size),
            mode
        ].join(" ") || ""),
        children: [
            label,
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "1db2ff09cbb475ab",
                dynamic: [
                    backgroundColor
                ],
                children: "button.__jsx-style-dynamic-selector{background-color:".concat(backgroundColor, "}")
            }, void 0, false, void 0, undefined)
        ]
    }, void 0, true, {
        fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Button.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, undefined);
};
_c = Button;
Button.__docgenInfo = {
    "description": "Primary UI component for user interaction",
    "methods": [],
    "displayName": "Button",
    "props": {
        "primary": {
            "required": false,
            "tsType": {
                "name": "boolean"
            },
            "description": "Is this the principal call to action on the page?",
            "defaultValue": {
                "value": "false",
                "computed": false
            }
        },
        "backgroundColor": {
            "required": false,
            "tsType": {
                "name": "string"
            },
            "description": "What background color to use"
        },
        "size": {
            "required": false,
            "tsType": {
                "name": "union",
                "raw": "'small' | 'medium' | 'large'",
                "elements": [
                    {
                        "name": "literal",
                        "value": "'small'"
                    },
                    {
                        "name": "literal",
                        "value": "'medium'"
                    },
                    {
                        "name": "literal",
                        "value": "'large'"
                    }
                ]
            },
            "description": "How large should the button be?",
            "defaultValue": {
                "value": "'medium'",
                "computed": false
            }
        },
        "label": {
            "required": true,
            "tsType": {
                "name": "string"
            },
            "description": "Button contents"
        },
        "onClick": {
            "required": false,
            "tsType": {
                "name": "signature",
                "type": "function",
                "raw": "() => void",
                "signature": {
                    "arguments": [],
                    "return": {
                        "name": "void"
                    }
                }
            },
            "description": "Optional click handler"
        }
    }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Button");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./stories/Header.tsx":
/*!****************************!*\
  !*** ./stories/Header.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ "./stories/Button.tsx");
/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.css */ "./stories/header.css");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





const Header = (param)=>{
    let { user, onLogin, onLogout, onCreateAccount } = param;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "storybook-header",
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
                                fill: "none",
                                fillRule: "evenodd",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                                        d: "M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",
                                        fill: "#FFF"
                                    }, void 0, false, {
                                        fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                                        lineNumber: 23,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                                        d: "M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",
                                        fill: "#555AB9"
                                    }, void 0, false, {
                                        fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, undefined),
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                                        d: "M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",
                                        fill: "#91BAF8"
                                    }, void 0, false, {
                                        fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, undefined)
                                ]
                            }, void 0, true, {
                                fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, undefined)
                        }, void 0, false, {
                            fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                            lineNumber: 21,
                            columnNumber: 9
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                            children: "Acme"
                        }, void 0, false, {
                            fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                            lineNumber: 37,
                            columnNumber: 9
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    children: user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                className: "welcome",
                                children: [
                                    "Welcome, ",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
                                        children: user.name
                                    }, void 0, false, {
                                        fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                                        lineNumber: 43,
                                        columnNumber: 24
                                    }, undefined),
                                    "!"
                                ]
                            }, void 0, true, {
                                fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                size: "small",
                                onClick: onLogout,
                                label: "Log out"
                            }, void 0, false, {
                                fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                size: "small",
                                onClick: onLogin,
                                label: "Log in"
                            }, void 0, false, {
                                fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, undefined),
                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Button__WEBPACK_IMPORTED_MODULE_2__.Button, {
                                primary: true,
                                size: "small",
                                onClick: onCreateAccount,
                                label: "Sign up"
                            }, void 0, false, {
                                fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, undefined)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
                    lineNumber: 39,
                    columnNumber: 7
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
            lineNumber: 19,
            columnNumber: 5
        }, undefined)
    }, void 0, false, {
        fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/stories/Header.tsx",
        lineNumber: 18,
        columnNumber: 3
    }, undefined);
};
_c = Header;
Header.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "Header",
    "props": {
        "user": {
            "required": false,
            "tsType": {
                "name": "signature",
                "type": "object",
                "raw": "{\n  name: string;\n}",
                "signature": {
                    "properties": [
                        {
                            "key": "name",
                            "value": {
                                "name": "string",
                                "required": true
                            }
                        }
                    ]
                }
            },
            "description": ""
        },
        "onLogin": {
            "required": false,
            "tsType": {
                "name": "signature",
                "type": "function",
                "raw": "() => void",
                "signature": {
                    "arguments": [],
                    "return": {
                        "name": "void"
                    }
                }
            },
            "description": ""
        },
        "onLogout": {
            "required": false,
            "tsType": {
                "name": "signature",
                "type": "function",
                "raw": "() => void",
                "signature": {
                    "arguments": [],
                    "return": {
                        "name": "void"
                    }
                }
            },
            "description": ""
        },
        "onCreateAccount": {
            "required": false,
            "tsType": {
                "name": "signature",
                "type": "function",
                "raw": "() => void",
                "signature": {
                    "arguments": [],
                    "return": {
                        "name": "void"
                    }
                }
            },
            "description": ""
        }
    }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Header");


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.storybook-button {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
}
.storybook-button--primary {
  color: white;
  background-color: #1ea7fd;
}
.storybook-button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}
.storybook-button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.storybook-button--medium {
  font-size: 14px;
  padding: 11px 20px;
}
.storybook-button--large {
  font-size: 16px;
  padding: 12px 24px;
}
`, "",{"version":3,"sources":["webpack://./stories/button.css"],"names":[],"mappings":"AAAA;EACE,0EAA0E;EAC1E,gBAAgB;EAChB,SAAS;EACT,kBAAkB;EAClB,eAAe;EACf,qBAAqB;EACrB,cAAc;AAChB;AACA;EACE,YAAY;EACZ,yBAAyB;AAC3B;AACA;EACE,WAAW;EACX,6BAA6B;EAC7B,qDAAqD;AACvD;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,kBAAkB;AACpB","sourcesContent":[".storybook-button {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/header.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/header.css ***!
  \****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.storybook-header {
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.storybook-header svg {
  display: inline-block;
  vertical-align: top;
}

.storybook-header h1 {
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
}

.storybook-header button + button {
  margin-left: 10px;
}

.storybook-header .welcome {
  color: #333;
  font-size: 14px;
  margin-right: 10px;
}
`, "",{"version":3,"sources":["webpack://./stories/header.css"],"names":[],"mappings":"AAAA;EACE,0EAA0E;EAC1E,2CAA2C;EAC3C,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,kBAAkB;AACpB","sourcesContent":[".storybook-header {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 15px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.storybook-header svg {\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header h1 {\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 1;\n  margin: 6px 0 6px 10px;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.storybook-header button + button {\n  margin-left: 10px;\n}\n\n.storybook-header .welcome {\n  color: #333;\n  font-size: 14px;\n  margin-right: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./stories/button.css":
/*!****************************!*\
  !*** ./stories/button.css ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../node_modules/postcss-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../node_modules/postcss-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../node_modules/postcss-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/button.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./stories/header.css":
/*!****************************!*\
  !*** ./stories/header.css ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../node_modules/postcss-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../node_modules/postcss-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/header.css",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!../node_modules/postcss-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[6].use[1]!./node_modules/postcss-loader/dist/cjs.js!./stories/header.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_6_use_1_node_modules_postcss_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=stories_Header_tsx.iframe.bundle.js.map