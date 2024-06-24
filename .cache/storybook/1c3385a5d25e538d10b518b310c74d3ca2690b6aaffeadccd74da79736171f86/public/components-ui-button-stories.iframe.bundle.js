"use strict";
(self["webpackChunknextjs13"] = self["webpackChunknextjs13"] || []).push([["components-ui-button-stories"],{

/***/ "./components/ui/button.stories.jsx":
/*!******************************************!*\
  !*** ./components/ui/button.stories.jsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Default: () => (/* binding */ Default),
/* harmony export */   __namedExportsOrder: () => (/* binding */ __namedExportsOrder),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button */ "./components/ui/button.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _Default_parameters, _Default_parameters_docs, _Default_parameters1;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    title: "Button",
    component: _button__WEBPACK_IMPORTED_MODULE_1__.Button
});
const Template = (arg)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_button__WEBPACK_IMPORTED_MODULE_1__.Button, {
        ...arg
    }, void 0, false, {
        fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/components/ui/button.stories.jsx",
        lineNumber: 6,
        columnNumber: 25
    }, undefined);
_c = Template;
const Default = Template.bind({});
Default.arg = {
    children: "Press me",
    variant: "primary"
};
Default.parameters = {
    ...Default.parameters,
    docs: {
        ...(_Default_parameters = Default.parameters) === null || _Default_parameters === void 0 ? void 0 : _Default_parameters.docs,
        source: {
            originalSource: "arg => <Button {...arg} />",
            ...(_Default_parameters1 = Default.parameters) === null || _Default_parameters1 === void 0 ? void 0 : (_Default_parameters_docs = _Default_parameters1.docs) === null || _Default_parameters_docs === void 0 ? void 0 : _Default_parameters_docs.source
        }
    }
};
var _c;
__webpack_require__.$Refresh$.register(_c, "Template");
;const __namedExportsOrder = ["Default"];

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

/***/ "./components/ui/button.tsx":
/*!**********************************!*\
  !*** ./components/ui/button.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   buttonVariants: () => (/* binding */ buttonVariants)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/next/dist/compiled/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @radix-ui/react-slot */ "./node_modules/@radix-ui/react-slot/dist/index.mjs");
/* harmony import */ var class_variance_authority__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-variance-authority */ "./node_modules/class-variance-authority/dist/index.mjs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ "./lib/utils.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






const buttonVariants = (0,class_variance_authority__WEBPACK_IMPORTED_MODULE_3__.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(_c = (param, ref)=>{
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? _radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_4__.Slot : "button";
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Comp, {
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "/Users/mr.kuchkorov/Desktop/Projects/nextjs-traing-project/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, undefined);
});
_c1 = Button;
Button.displayName = "Button";

Button.__docgenInfo = {
    "description": "",
    "methods": [],
    "displayName": "Button",
    "props": {
        "asChild": {
            "defaultValue": {
                "value": "false",
                "computed": false
            },
            "required": false
        }
    }
};
var _c, _c1;
__webpack_require__.$Refresh$.register(_c, "Button$React.forwardRef");
__webpack_require__.$Refresh$.register(_c1, "Button");


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

/***/ "./lib/utils.ts":
/*!**********************!*\
  !*** ./lib/utils.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   formatNumber: () => (/* binding */ formatNumber),
/* harmony export */   getTimestamp: () => (/* binding */ getTimestamp)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var tailwind_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tailwind-merge */ "./node_modules/tailwind-merge/dist/bundle-mjs.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.twMerge)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.clsx)(inputs));
}
// export const getTimestamp = (createdAt: Date): string => {
//   const now = new Date();
//   let diff = Math.floor((now.getTime() - createdAt.getTime()) / 1000);
//
//   const units = [
//     { name: 'year', seconds: 31536000 },
//     { name: 'month', seconds: 2592000 },
//     { name: 'day', seconds: 86400 },
//     { name: 'hour', seconds: 3600 },
//     { name: 'minute', seconds: 60 },
//     { name: 'second', seconds: 1 }
//   ];
//
//   let result: string[] = [];
//
//   for (const unit of units) {
//     const interval = Math.floor(diff / unit.seconds);
//     if (interval >= 1) {
//       result.push(`${interval} ${unit.name}${interval !== 1 ? 's' : ''}`);
//       diff -= interval * unit.seconds;
//     }
//   }
//
//   return result.length > 0 ? result.join(' ') + ' ago' : 'just now';
// }
// Пример использования:
// const createdAt = new Date('2023-06-17T14:30:00');
// console.log(getTimestamp(createdAt)); // Пример вывода: "5 days 2 minutes ago"
const getTimestamp = (createdAt)=>{
    const now = new Date();
    const diff = Math.floor((now.getTime() - createdAt.getTime()) / 1000);
    const units = [
        {
            name: "year",
            seconds: 31536000
        },
        {
            name: "month",
            seconds: 2592000
        },
        {
            name: "day",
            seconds: 86400
        },
        {
            name: "hour",
            seconds: 3600
        },
        {
            name: "minute",
            seconds: 60
        },
        {
            name: "second",
            seconds: 1
        }
    ];
    for (const unit of units){
        const interval = Math.floor(diff / unit.seconds);
        if (interval >= 1) {
            return "".concat(interval, " ").concat(unit.name).concat(interval !== 1 ? "s" : "", " ago");
        }
    }
    return "just now";
};
// // Пример использования:
// const createdAt = new Date('2023-06-17T14:30:00');
// console.log(getTimestamp(createdAt)); // Пример вывода: "5 days ago"
const formatNumber = (number)=>{
    if (number >= 1000000) {
        return "".concat((number / 1000000).toFixed(1), "M");
    } else if (number >= 1000) {
        return "".concat((number / 1000).toFixed(1), "K");
    } else {
        return number.toString();
    }
};


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

/***/ })

}]);
//# sourceMappingURL=components-ui-button-stories.iframe.bundle.js.map