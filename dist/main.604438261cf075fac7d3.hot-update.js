webpackHotUpdate("main",{

/***/ "./Navigation.js":
false,

/***/ "./Navigation/Navigation.js":
/*!**********************************!*\
  !*** ./Navigation/Navigation.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Navigation = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Navigation = exports.Navigation = function Navigation() {\n    return _react2.default.createElement(\n        'nav',\n        null,\n        _react2.default.createElement(\n            'ul',\n            null,\n            _react2.default.createElement(\n                'li',\n                null,\n                'Home'\n            ),\n            _react2.default.createElement(\n                'li',\n                null,\n                'About'\n            )\n        )\n    );\n};\n\n//# sourceURL=webpack:///./Navigation/Navigation.js?");

/***/ }),

/***/ "./Navigation/index.js":
/*!*****************************!*\
  !*** ./Navigation/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _Navigation = __webpack_require__(/*! ./Navigation */ \"./Navigation/Navigation.js\");\n\nObject.keys(_Navigation).forEach(function (key) {\n  if (key === \"default\" || key === \"__esModule\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _Navigation[key];\n    }\n  });\n});\n\n//# sourceURL=webpack:///./Navigation/index.js?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Navigation = __webpack_require__(/*! ./Navigation/ */ \"./Navigation/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Time = function Time() {\n    return _react2.default.createElement(\n        'time',\n        null,\n        String(new Date())\n    );\n};\n\nvar component = _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n        'h1',\n        null,\n        'Hello'\n    ),\n    _react2.default.createElement(_Navigation.Navigation, null),\n    _react2.default.createElement(Time, null)\n);\n_reactDom2.default.render(component, document.getElementById('app'));\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

})