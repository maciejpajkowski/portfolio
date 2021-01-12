webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ContentTemplate.js":
/*!***************************************!*\
  !*** ./components/ContentTemplate.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Maciek\\Desktop\\CODE\\portfolio\\components\\ContentTemplate.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var StyledContentHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].header.withConfig({
  displayName: "ContentTemplate__StyledContentHeader",
  componentId: "sc-1tjhw6k-0"
})(["background:#292929;text-align:center;line-height:2em;font-size:26px;@media (max-width:768px){position:fixed;width:94%;font-size:20px;}@media (max-width:480px){width:100%;}"]);
_c = StyledContentHeader;
var StyledOpenButton = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "ContentTemplate__StyledOpenButton",
  componentId: "sc-1tjhw6k-1"
})(["display:none;position:fixed;left:2%;top:1.3%;outline:0;border:0;line-height:1em;background:none;font-size:1em;color:#1ac966;transition:all 0.3s;cursor:pointer;&:active{color:#eee;border-color:#eee;}@media (max-width:768px){display:inline-block;left:5%;}@media (max-width:600px){left:3%;}@media (max-width:480px){top:1.4%;}@media (min-height:800px){top:1.2%;}"]);
_c2 = StyledOpenButton;

var ContentTemplate = function ContentTemplate(_ref) {
  var headerText = _ref.headerText,
      children = _ref.children,
      setSidebarOpen = _ref.setSidebarOpen;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(StyledContentHeader, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(StyledOpenButton, {
    onClick: function onClick() {
      return setSidebarOpen(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBars"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  })), headerText), children);
};

_c3 = ContentTemplate;
/* harmony default export */ __webpack_exports__["default"] = (ContentTemplate);

var _c, _c2, _c3;

$RefreshReg$(_c, "StyledContentHeader");
$RefreshReg$(_c2, "StyledOpenButton");
$RefreshReg$(_c3, "ContentTemplate");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250ZW50VGVtcGxhdGUuanMiXSwibmFtZXMiOlsiU3R5bGVkQ29udGVudEhlYWRlciIsInN0eWxlZCIsImhlYWRlciIsIlN0eWxlZE9wZW5CdXR0b24iLCJidXR0b24iLCJDb250ZW50VGVtcGxhdGUiLCJoZWFkZXJUZXh0IiwiY2hpbGRyZW4iLCJzZXRTaWRlYmFyT3BlbiIsImZhQmFycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLG1CQUFtQixHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLG1MQUF6QjtLQUFNRixtQjtBQWlCTixJQUFNRyxnQkFBZ0IsR0FBR0YseURBQU0sQ0FBQ0csTUFBVjtBQUFBO0FBQUE7QUFBQSw4V0FBdEI7TUFBTUQsZ0I7O0FBcUNOLElBQU1FLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBOEM7QUFBQSxNQUEzQ0MsVUFBMkMsUUFBM0NBLFVBQTJDO0FBQUEsTUFBL0JDLFFBQStCLFFBQS9CQSxRQUErQjtBQUFBLE1BQXJCQyxjQUFxQixRQUFyQkEsY0FBcUI7QUFDbEUsU0FDSSxtRUFDSSxNQUFDLG1CQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGdCQUFEO0FBQWtCLFdBQU8sRUFBRTtBQUFBLGFBQU1BLGNBQWMsQ0FBQyxJQUFELENBQXBCO0FBQUEsS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsOEVBQUQ7QUFBaUIsUUFBSSxFQUFFQyx3RUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJS0gsVUFKTCxDQURKLEVBT0tDLFFBUEwsQ0FESjtBQVdILENBWkQ7O01BQU1GLGU7QUFjU0EsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjdiYzVhNGI3MmVlMjBkYTZkNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XHJcbmltcG9ydCB7IGZhQmFycyB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgU3R5bGVkQ29udGVudEhlYWRlciA9IHN0eWxlZC5oZWFkZXJgXHJcbiAgICBiYWNrZ3JvdW5kOiAjMjkyOTI5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDJlbTtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDk0JTtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRPcGVuQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBsZWZ0OiAyJTtcclxuICAgIHRvcDogMS4zJTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6ICMxYWM5NjY7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6ICNlZWU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBsZWZ0OiA1JTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICBsZWZ0OiAzJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICB0b3A6IDEuNCU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4taGVpZ2h0OiA4MDBweCkge1xyXG4gICAgICAgIHRvcDogMS4yJTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgQ29udGVudFRlbXBsYXRlID0gKHsgaGVhZGVyVGV4dCwgY2hpbGRyZW4sIHNldFNpZGViYXJPcGVuIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFN0eWxlZENvbnRlbnRIZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkT3BlbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRTaWRlYmFyT3Blbih0cnVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUJhcnN9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZE9wZW5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICB7aGVhZGVyVGV4dH1cclxuICAgICAgICAgICAgPC9TdHlsZWRDb250ZW50SGVhZGVyPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRlbnRUZW1wbGF0ZTsiXSwic291cmNlUm9vdCI6IiJ9