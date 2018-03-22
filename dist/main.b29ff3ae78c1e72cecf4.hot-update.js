webpackHotUpdate("main",{

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _react = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nvar _Navigation = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"Navigation\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Time = function Time() {\n    return _react2.default.createElement(\n        'time',\n        null,\n        String(new Date())\n    );\n};\n\nvar component = _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n        'h1',\n        null,\n        'Hello'\n    ),\n    _react2.default.createElement(_Navigation.Navigation, null),\n    _react2.default.createElement(Time, null)\n);\n_reactDom2.default.render(component, document.getElementById('app'));\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

})