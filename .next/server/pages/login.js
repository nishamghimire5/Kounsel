"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst login = ()=>{\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Welcome, \",\n                        session.user.email\n                    ]\n                }, void 0, true, {\n                    fileName: \"N:\\\\Projects\\\\3rd Sem\\\\Kounsel\\\\pages\\\\login.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"N:\\\\Projects\\\\3rd Sem\\\\Kounsel\\\\pages\\\\login.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"N:\\\\Projects\\\\3rd Sem\\\\Kounsel\\\\pages\\\\login.jsx\",\n            lineNumber: 8,\n            columnNumber: 13\n        }, undefined);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"You are not signed in.\"\n                }, void 0, false, {\n                    fileName: \"N:\\\\Projects\\\\3rd Sem\\\\Kounsel\\\\pages\\\\login.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 18\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(\"google\"),\n                    children: \"Sign in\"\n                }, void 0, false, {\n                    fileName: \"N:\\\\Projects\\\\3rd Sem\\\\Kounsel\\\\pages\\\\login.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"N:\\\\Projects\\\\3rd Sem\\\\Kounsel\\\\pages\\\\login.jsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, undefined);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ2tDO0FBRTNELE1BQU1JLEtBQUssR0FBRyxJQUFNO0lBQ2hCLE1BQU0sRUFBQ0MsSUFBSSxFQUFFQyxPQUFPLEdBQUMsR0FBR0wsMkRBQVUsRUFBRTtJQUNwQyxJQUFJSyxPQUFPLEVBQUU7UUFDVCxxQkFDSSw4REFBQ0MsS0FBRzs7OEJBQ0EsOERBQUNDLEdBQUM7O3dCQUFDLFdBQVM7d0JBQUNGLE9BQU8sQ0FBQ0csSUFBSSxDQUFDQyxLQUFLOzs7Ozs7NkJBQUs7OEJBQ3BDLDhEQUFDQyxRQUFNO29CQUFDQyxPQUFPLEVBQUUsSUFBTVQsd0RBQU8sRUFBRTs4QkFBRSxVQUFROzs7Ozs2QkFBUzs7Ozs7O3FCQUNqRCxDQUNUO0tBQ0osTUFBTTtRQUNILHFCQUNJLDhEQUFDSSxLQUFHOzs4QkFBQyw4REFBQ0MsR0FBQzs4QkFBQyx3QkFBc0I7Ozs7OzZCQUFJOzhCQUNsQyw4REFBQ0csUUFBTTtvQkFBQ0MsT0FBTyxFQUFFLElBQUtWLHVEQUFNLENBQUMsUUFBUSxDQUFDOzhCQUFFLFNBQU87Ozs7OzZCQUFTOzs7Ozs7cUJBQ2xELENBQ1Q7S0FDSjtDQUNKO0FBRUQsaUVBQWVFLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb3Vuc2VsLy4vcGFnZXMvbG9naW4uanN4PzllZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5cclxuY29uc3QgbG9naW4gPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7ZGF0YTogc2Vzc2lvbn0gPSB1c2VTZXNzaW9uKClcclxuICAgIGlmIChzZXNzaW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPldlbGNvbWUsIHtzZXNzaW9uLnVzZXIuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ24gb3V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PjxwPllvdSBhcmUgbm90IHNpZ25lZCBpbi48L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBzaWduSW4oJ2dvb2dsZScpfT5TaWduIGluPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbG9naW4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwic2lnbk91dCIsImxvZ2luIiwiZGF0YSIsInNlc3Npb24iLCJkaXYiLCJwIiwidXNlciIsImVtYWlsIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.jsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/login.jsx"));
module.exports = __webpack_exports__;

})();