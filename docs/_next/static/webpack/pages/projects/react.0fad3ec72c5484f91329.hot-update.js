webpackHotUpdate_N_E("pages/projects/react",{

/***/ "./components/DisplayCase.js":
/*!***********************************!*\
  !*** ./components/DisplayCase.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _utils_getAdequateIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/getAdequateIcon */ "./utils/getAdequateIcon.js");
/* harmony import */ var _utils_getAdequateText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/getAdequateText */ "./utils/getAdequateText.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Maciek\\Desktop\\CODE\\portfolio\\components\\DisplayCase.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var StyledDisplayCaseContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseContainer",
  componentId: "sc-14ywbd2-0"
})(["display:flex;height:100%;@media (max-width:540px){flex-direction:column;}"]);
_c = StyledDisplayCaseContainer;
var StyledDisplayCaseHalfContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseHalfContainer",
  componentId: "sc-14ywbd2-1"
})(["width:50%;height:100%;display:flex;flex-direction:column;margin-top:8px;&:nth-child(1){padding-left:1rem;padding-right:1rem;@media (max-width:540px){width:100%;padding:0;}}&:nth-child(2){padding-right:1rem;display:flex;align-items:center;@media (max-width:540px){width:100%;}@media (min-height:720px){height:auto;}@media (max-width:540px) and (min-height:720px){height:25vh;}}@media (max-width:480px){margin-top:0;}"]);
_c2 = StyledDisplayCaseHalfContainer;
var StyledDisplayCaseTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h3.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseTitle",
  componentId: "sc-14ywbd2-2"
})(["display:flex;justify-content:space-between;font-size:24px;margin:0 1.4rem 1rem 0;@media (max-width:540px){font-size:16px;}"]);
_c3 = StyledDisplayCaseTitle;
var StyledDisplayCaseProject = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseProject",
  componentId: "sc-14ywbd2-3"
})(["display:flex;align-items:center;"]);
_c4 = StyledDisplayCaseProject;
var StyledDisplayCaseProjectLogo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseProjectLogo",
  componentId: "sc-14ywbd2-4"
})(["color:", ";margin-right:0.5rem;"], function (props) {
  switch (props.type) {
    case "react":
      return '#30b7ff';

    case "javascript":
      return '#ffee03';

    case "html":
      return '#ff4900';

    case "dotnet":
      return '#476cff';

    case "other":
      return '#b247ff';
  }
});
_c5 = StyledDisplayCaseProjectLogo;
var StyledDisplayCaseProjectType = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseProjectType",
  componentId: "sc-14ywbd2-5"
})(["font-size:16px;"]);
_c6 = StyledDisplayCaseProjectType;
var StyledDisplayCaseDescription = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].p.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseDescription",
  componentId: "sc-14ywbd2-6"
})(["font-size:18px;word-wrap:break-word;@media (max-width:540px){font-size:1.2em;}"]);
_c7 = StyledDisplayCaseDescription;
var StyledDisplayCaseButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseButtonContainer",
  componentId: "sc-14ywbd2-7"
})(["display:flex;height:100%;align-items:flex-end;justify-content:flex-start;"]);
_c8 = StyledDisplayCaseButtonContainer;
var StyledDisplayCaseLink = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].a.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseLink",
  componentId: "sc-14ywbd2-8"
})(["display:flex;align-items:center;font-size:20px;text-decoration-line:none;color:inherit;svg{margin-right:0.6rem;font-size:1.6em;}span{font-size:1.6em;}@media (max-width:1600px){svg,span{font-size:1.3em;}}@media (max-width:1366px){svg,span{font-size:1em;}svg{margin-right:0.4em;}}"]);
_c9 = StyledDisplayCaseLink;
var StyledDisplayCaseButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseButton",
  componentId: "sc-14ywbd2-9"
})(["background:inherit;color:", ";border:2px solid ", ";border-radius:0.3rem;outline:none;cursor:pointer;padding:0.5rem;margin-bottom:2rem;margin-right:2rem;transition:all 0.3s;&:hover{background:", ";color:#333;}&:active{background:#eee;border-color:#eee;color:", ";}@media (max-width:480px){margin-right:1em;margin-bottom:1em;}"], function (props) {
  if (!!props.repoLink) {
    return '#257f5c';
  } else if (!!props.liveLink) {
    return '#1ac966';
  } else {
    return '#ddd';
  }
}, function (props) {
  if (!!props.repoLink) {
    return '#257f5c';
  } else if (!!props.liveLink) {
    return '#1ac966';
  } else {
    return '#ddd';
  }
}, function (props) {
  if (!!props.repoLink) {
    return '#257f5c';
  } else if (!!props.liveLink) {
    return '#1ac966';
  } else {
    return '#ddd';
  }
}, function (props) {
  if (!!props.repoLink) {
    return '#257f5c';
  } else if (!!props.liveLink) {
    return '#1ac966';
  } else {
    return '#000';
  }
});
_c10 = StyledDisplayCaseButton;
var StyledDisplayCaseImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseImageContainer",
  componentId: "sc-14ywbd2-10"
})(["border:2px solid #1ac966;height:100%;width:95%;overflow:hidden;margin-bottom:2rem;@media (max-width:480px){margin-bottom:0;}"]);
_c11 = StyledDisplayCaseImageContainer;
var StyledDisplayCaseImage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "DisplayCase__StyledDisplayCaseImage",
  componentId: "sc-14ywbd2-11"
})(["height:100%;width:100%;background:url(", ");background-size:cover;background-position:left top;"], function (props) {
  return props.image;
});
_c12 = StyledDisplayCaseImage;
var StyledCloseButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(StyledDisplayCaseButton).withConfig({
  displayName: "DisplayCase__StyledCloseButton",
  componentId: "sc-14ywbd2-12"
})(["display:", ";font-size:0.8em;line-height:1em;height:2.2em;position:absolute;right:-1.5em;top:0.5em;color:#eee;border:none;@media (max-width:480px){right:-0.6em;}"], function (props) {
  return props.isModal ? 'inline-block' : 'none';
});
_c13 = StyledCloseButton;

var DisplayCase = function DisplayCase(_ref) {
  var title = _ref.title,
      description = _ref.description,
      type = _ref.type,
      repoLink = _ref.repoLink,
      liveLink = _ref.liveLink,
      image = _ref.image,
      isModal = _ref.isModal,
      onClick = _ref.onClick;
  return __jsx(StyledDisplayCaseContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 9
    }
  }, __jsx(StyledDisplayCaseHalfContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 13
    }
  }, __jsx(StyledDisplayCaseTitle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 17
    }
  }, title, __jsx(StyledDisplayCaseProject, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 21
    }
  }, __jsx(StyledDisplayCaseProjectLogo, {
    type: type,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: Object(_utils_getAdequateIcon__WEBPACK_IMPORTED_MODULE_5__["default"])(type),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 29
    }
  })), __jsx(StyledDisplayCaseProjectType, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 25
    }
  }, Object(_utils_getAdequateText__WEBPACK_IMPORTED_MODULE_6__["default"])(type)))), __jsx(StyledDisplayCaseDescription, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 17
    }
  }, description), __jsx(StyledDisplayCaseButtonContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 17
    }
  }, __jsx(StyledDisplayCaseLink, {
    href: repoLink + "/blob/master/README.md",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 21
    }
  }, __jsx(StyledDisplayCaseButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFileAlt"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 29
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 29
    }
  }, "Read more"))), __jsx(StyledDisplayCaseLink, {
    href: repoLink,
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 21
    }
  }, __jsx(StyledDisplayCaseButton, {
    repoLink: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGithub"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 33
    }
  }, "Repo"))), __jsx(StyledDisplayCaseLink, {
    href: liveLink,
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 21
    }
  }, __jsx(StyledDisplayCaseButton, {
    liveLink: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGlobeEurope"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 33
    }
  }), __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 33
    }
  }, "Live"))), __jsx(StyledDisplayCaseLink, {
    onClick: onClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 21
    }
  }, __jsx(StyledCloseButton, {
    isModal: isModal,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 25
    }
  }, __jsx("span", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 33
    }
  }, "X"))))), __jsx(StyledDisplayCaseHalfContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 13
    }
  }, __jsx(StyledDisplayCaseImageContainer, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 17
    }
  }, __jsx(StyledDisplayCaseImage, {
    image: image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 21
    }
  }))));
};

_c14 = DisplayCase;
/* harmony default export */ __webpack_exports__["default"] = (DisplayCase);

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;

$RefreshReg$(_c, "StyledDisplayCaseContainer");
$RefreshReg$(_c2, "StyledDisplayCaseHalfContainer");
$RefreshReg$(_c3, "StyledDisplayCaseTitle");
$RefreshReg$(_c4, "StyledDisplayCaseProject");
$RefreshReg$(_c5, "StyledDisplayCaseProjectLogo");
$RefreshReg$(_c6, "StyledDisplayCaseProjectType");
$RefreshReg$(_c7, "StyledDisplayCaseDescription");
$RefreshReg$(_c8, "StyledDisplayCaseButtonContainer");
$RefreshReg$(_c9, "StyledDisplayCaseLink");
$RefreshReg$(_c10, "StyledDisplayCaseButton");
$RefreshReg$(_c11, "StyledDisplayCaseImageContainer");
$RefreshReg$(_c12, "StyledDisplayCaseImage");
$RefreshReg$(_c13, "StyledCloseButton");
$RefreshReg$(_c14, "DisplayCase");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EaXNwbGF5Q2FzZS5qcyJdLCJuYW1lcyI6WyJTdHlsZWREaXNwbGF5Q2FzZUNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlN0eWxlZERpc3BsYXlDYXNlSGFsZkNvbnRhaW5lciIsIlN0eWxlZERpc3BsYXlDYXNlVGl0bGUiLCJoMyIsIlN0eWxlZERpc3BsYXlDYXNlUHJvamVjdCIsIlN0eWxlZERpc3BsYXlDYXNlUHJvamVjdExvZ28iLCJwcm9wcyIsInR5cGUiLCJTdHlsZWREaXNwbGF5Q2FzZVByb2plY3RUeXBlIiwic3BhbiIsIlN0eWxlZERpc3BsYXlDYXNlRGVzY3JpcHRpb24iLCJwIiwiU3R5bGVkRGlzcGxheUNhc2VCdXR0b25Db250YWluZXIiLCJTdHlsZWREaXNwbGF5Q2FzZUxpbmsiLCJhIiwiU3R5bGVkRGlzcGxheUNhc2VCdXR0b24iLCJidXR0b24iLCJyZXBvTGluayIsImxpdmVMaW5rIiwiU3R5bGVkRGlzcGxheUNhc2VJbWFnZUNvbnRhaW5lciIsIlN0eWxlZERpc3BsYXlDYXNlSW1hZ2UiLCJpbWFnZSIsIlN0eWxlZENsb3NlQnV0dG9uIiwiaXNNb2RhbCIsIkRpc3BsYXlDYXNlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9uQ2xpY2siLCJnZXRBZGVxdWF0ZUljb24iLCJnZXRBZGVxdWF0ZVRleHQiLCJmYUZpbGVBbHQiLCJmYUdpdGh1YiIsImZhR2xvYmVFdXJvcGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSwwQkFBMEIsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxpRkFBaEM7S0FBTUYsMEI7QUFTTixJQUFNRyw4QkFBOEIsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx1YUFBcEM7TUFBTUMsOEI7QUF3Q04sSUFBTUMsc0JB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RUFBRDtBQUFpQixRQUFJLEVBQUVjLCtFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFIsRUFFUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsQ0FESixDQWJKLEVBbUJJLE1BQUMscUJBQUQ7QUFBdUIsV0FBTyxFQUFFTCxPQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpQkFBRDtBQUFtQixXQUFPLEVBQUVKLE9BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRFIsQ0FESixDQW5CSixDQWZKLENBREosRUEwQ0ksTUFBQyw4QkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzQkFBRDtBQUF3QixTQUFLLEVBQUVGLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBMUNKLENBREo7QUFrREgsQ0FwREQ7O09BQU1HLFc7QUFzRFNBLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2plY3RzL3JlYWN0LjBmYWQzZWM3MmM1NDg0ZjkxMzI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcclxuaW1wb3J0IHsgZmFHbG9iZUV1cm9wZSwgZmFGaWxlQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcclxuaW1wb3J0IHsgZmFHaXRodWIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcclxuaW1wb3J0IGdldEFkZXF1YXRlSWNvbiBmcm9tICcuLi91dGlscy9nZXRBZGVxdWF0ZUljb24nO1xyXG5pbXBvcnQgZ2V0QWRlcXVhdGVUZXh0IGZyb20gJy4uL3V0aWxzL2dldEFkZXF1YXRlVGV4dCc7XHJcblxyXG5jb25zdCBTdHlsZWREaXNwbGF5Q2FzZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXNwbGF5Q2FzZUhhbGZDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG5cclxuICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWluLWhlaWdodDogNzIwcHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSBhbmQgKG1pbi1oZWlnaHQ6IDcyMHB4KSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjV2aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpc3BsYXlDYXNlVGl0bGUgPSBzdHlsZWQuaDNgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbWFyZ2luOiAwIDEuNHJlbSAxcmVtIDA7XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGlzcGxheUNhc2VQcm9qZWN0ID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGlzcGxheUNhc2VQcm9qZWN0TG9nbyA9IHN0eWxlZC5kaXZgXHJcbiAgICBjb2xvcjogJHtwcm9wcyA9PiB7XHJcbiAgICAgICAgc3dpdGNoKHByb3BzLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInJlYWN0XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyMzMGI3ZmYnO1xyXG4gICAgICAgICAgICBjYXNlIFwiamF2YXNjcmlwdFwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjZmZlZTAzJztcclxuICAgICAgICAgICAgY2FzZSBcImh0bWxcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnI2ZmNDkwMCc7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkb3RuZXRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAnIzQ3NmNmZic7XHJcbiAgICAgICAgICAgIGNhc2UgXCJvdGhlclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjYjI0N2ZmJztcclxuICAgICAgICB9XHJcbiAgICB9fTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGlzcGxheUNhc2VQcm9qZWN0VHlwZSA9IHN0eWxlZC5zcGFuYFxyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGlzcGxheUNhc2VEZXNjcmlwdGlvbiA9IHN0eWxlZC5wYFxyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXNwbGF5Q2FzZUJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkRGlzcGxheUNhc2VMaW5rID0gc3R5bGVkLmFgXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiBub25lO1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNnJlbTtcclxuICAgICAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG4gICAgICAgIHN2Zywgc3BhbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMzY2cHgpIHtcclxuICAgICAgICBzdmcsIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjRlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXNwbGF5Q2FzZUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgY29sb3I6ICR7cHJvcHMgPT4ge1xyXG4gICAgICAgIGlmICghIXByb3BzLnJlcG9MaW5rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnIzI1N2Y1Yyc7XHJcbiAgICAgICAgfSBlbHNlIGlmICghIXByb3BzLmxpdmVMaW5rKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnIzFhYzk2Nic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICcjZGRkJztcclxuICAgICAgICB9XHJcbiAgICB9fTtcclxuXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAke3Byb3BzID0+IHtcclxuICAgICAgICBpZiAoISFwcm9wcy5yZXBvTGluaykge1xyXG4gICAgICAgICAgICByZXR1cm4gJyMyNTdmNWMnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoISFwcm9wcy5saXZlTGluaykge1xyXG4gICAgICAgICAgICByZXR1cm4gJyMxYWM5NjYnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnI2RkZCc7XHJcbiAgICAgICAgfVxyXG4gICAgfX07XHJcbiAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJHtwcm9wcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICghIXByb3BzLnJlcG9MaW5rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyMyNTdmNWMnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCEhcHJvcHMubGl2ZUxpbmspIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnIzFhYzk2Nic7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJyNkZGQnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfX07XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgJjphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZWVlO1xyXG4gICAgICAgIGNvbG9yOiAke3Byb3BzID0+IHtcclxuICAgICAgICAgICAgaWYgKCEhcHJvcHMucmVwb0xpbmspIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnIzI1N2Y1Yyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoISFwcm9wcy5saXZlTGluaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICcjMWFjOTY2JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnIzAwMCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWREaXNwbGF5Q2FzZUltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMxYWM5NjY7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuYDtcclxuXHJcbmNvbnN0IFN0eWxlZERpc3BsYXlDYXNlSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtwcm9wcyA9PiBwcm9wcy5pbWFnZX0pO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgdG9wO1xyXG5gO1xyXG5cclxuY29uc3QgU3R5bGVkQ2xvc2VCdXR0b24gPSBzdHlsZWQoU3R5bGVkRGlzcGxheUNhc2VCdXR0b24pYFxyXG4gICAgZGlzcGxheTogJHtwcm9wcyA9PiBwcm9wcy5pc01vZGFsID8gJ2lubGluZS1ibG9jaycgOiAnbm9uZSd9O1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBoZWlnaHQ6IDIuMmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0xLjVlbTtcclxuICAgIHRvcDogMC41ZW07XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICByaWdodDogLTAuNmVtO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuY29uc3QgRGlzcGxheUNhc2UgPSAoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHR5cGUsIHJlcG9MaW5rLCBsaXZlTGluaywgaW1hZ2UsIGlzTW9kYWwsIG9uQ2xpY2sgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFN0eWxlZERpc3BsYXlDYXNlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8U3R5bGVkRGlzcGxheUNhc2VIYWxmQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZERpc3BsYXlDYXNlVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXNwbGF5Q2FzZVByb2plY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXNwbGF5Q2FzZVByb2plY3RMb2dvIHR5cGU9e3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtnZXRBZGVxdWF0ZUljb24odHlwZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGlzcGxheUNhc2VQcm9qZWN0TG9nbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpc3BsYXlDYXNlUHJvamVjdFR5cGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0QWRlcXVhdGVUZXh0KHR5cGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpc3BsYXlDYXNlUHJvamVjdFR5cGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXNwbGF5Q2FzZVByb2plY3Q+XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpc3BsYXlDYXNlVGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGlzcGxheUNhc2VEZXNjcmlwdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L1N0eWxlZERpc3BsYXlDYXNlRGVzY3JpcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkRGlzcGxheUNhc2VCdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpc3BsYXlDYXNlTGluayBocmVmPXtyZXBvTGluayArIFwiL2Jsb2IvbWFzdGVyL1JFQURNRS5tZFwifSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpc3BsYXlDYXNlQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUZpbGVBbHR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SZWFkIG1vcmU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGlzcGxheUNhc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXNwbGF5Q2FzZUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpc3BsYXlDYXNlTGluayBocmVmPXtyZXBvTGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXNwbGF5Q2FzZUJ1dHRvbiByZXBvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2l0aHVifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlcG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3R5bGVkRGlzcGxheUNhc2VCdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXNwbGF5Q2FzZUxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpc3BsYXlDYXNlTGluayBocmVmPXtsaXZlTGlua30gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdHlsZWREaXNwbGF5Q2FzZUJ1dHRvbiBsaXZlTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2xvYmVFdXJvcGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+TGl2ZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWREaXNwbGF5Q2FzZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpc3BsYXlDYXNlTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkRGlzcGxheUNhc2VMaW5rIG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3R5bGVkQ2xvc2VCdXR0b24gaXNNb2RhbD17aXNNb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+WDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdHlsZWRDbG9zZUJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1N0eWxlZERpc3BsYXlDYXNlTGluaz5cclxuICAgICAgICAgICAgICAgIDwvU3R5bGVkRGlzcGxheUNhc2VCdXR0b25Db250YWluZXI+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkRGlzcGxheUNhc2VIYWxmQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8U3R5bGVkRGlzcGxheUNhc2VIYWxmQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZERpc3BsYXlDYXNlSW1hZ2VDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZERpc3BsYXlDYXNlSW1hZ2UgaW1hZ2U9e2ltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdHlsZWREaXNwbGF5Q2FzZUltYWdlQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L1N0eWxlZERpc3BsYXlDYXNlSGFsZkNvbnRhaW5lcj5cclxuICAgICAgICA8L1N0eWxlZERpc3BsYXlDYXNlQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5Q2FzZTsiXSwic291cmNlUm9vdCI6IiJ9