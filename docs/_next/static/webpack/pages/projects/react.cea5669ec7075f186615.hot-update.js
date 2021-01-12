webpackHotUpdate_N_E("pages/projects/react",{

/***/ "./components/ProjectsList.js":
/*!************************************!*\
  !*** ./components/ProjectsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ProjectsListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsListItem */ "./components/ProjectsListItem.js");
/* harmony import */ var _DisplayCase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisplayCase */ "./components/DisplayCase.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\Maciek\\Desktop\\CODE\\portfolio\\components\\ProjectsList.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





react_modal__WEBPACK_IMPORTED_MODULE_4___default.a.setAppElement("#__next");
var customStyles = {
  overlay: {
    backgroundColor: 'rgba(55, 55, 55, 0.6)'
  },
  content: {
    background: '#333',
    color: '#fff',
    margin: 'auto',
    border: 'none',
    borderRadius: '0',
    borderBottom: '3px solid #1ac966',
    boxShadow: '0 0 10px 3px #000',
    width: '80%',
    height: '60vh',
    inset: '10px'
  }
}; // modal custom styles

var StyledPadding = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProjectsList__StyledPadding",
  componentId: "sc-14annnf-0"
})(["height:0.1rem;width:100%;"]);
_c = StyledPadding;
var StyledProjectsList = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "ProjectsList__StyledProjectsList",
  componentId: "sc-14annnf-1"
})(["  display:grid;width:100%;grid-template-columns:1fr 1fr 1fr;grid-template-rows:repeat(3,minmax(15rem,auto));grid-gap:1rem 1rem;height:85vh;max-height:100%;overflow:auto;padding:1rem 1rem 0 1rem;-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,0.1);background-color:transparent;border-radius:5px;}&::-webkit-scrollbar{width:5px;background-color:transparent;}&::-webkit-scrollbar-thumb{border-radius:10px;background-color:#FFF;background-image:-webkit-gradient(linear,40% 0%,75% 84%,from(#4D9C41),to(#19911D),color-stop(.6,#1ac966));}@media (max-width:768px){grid-template-columns:1fr 1fr;height:85vh;margin-top:2em;}@media (max-width:480px){grid-template-columns:1fr;}"]);
_c2 = StyledProjectsList;

var ProjectsList = function ProjectsList(_ref) {
  _s();

  var data = _ref.data;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    title: "",
    description: "",
    type: "",
    repoLink: "",
    liveLink: "",
    image: ""
  }),
      modalContents = _useState2[0],
      setModalContents = _useState2[1];

  var openModal = function openModal(item) {
    setModalContents({
      title: item.name,
      description: item.description,
      type: item.repositoryTopics.edges[0].node.topic.name,
      repoLink: item.url,
      liveLink: item.homepageUrl,
      image: item.openGraphImageUrl
    });
    setModalIsOpen(true);
  };

  var closeModal = function closeModal() {
    return setModalIsOpen(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(StyledProjectsList, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, data.map(function (project) {
    return __jsx(_ProjectsListItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: project.node.openGraphImageUrl,
      title: project.node.name,
      description: project.node.description,
      type: project.node.repositoryTopics.edges[0].node.topic.name,
      key: project.node.id,
      onClick: function onClick() {
        return openModal(project.node);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 25
      }
    });
  }), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_4___default.a, {
    isOpen: modalIsOpen,
    onRequestClose: closeModal,
    key: modalContents.name,
    style: customStyles,
    closeTimeoutMS: 300,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 17
    }
  }, __jsx(_DisplayCase__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: modalContents.title,
    description: modalContents.description,
    type: modalContents.type,
    repoLink: modalContents.repoLink,
    liveLink: modalContents.liveLink,
    image: modalContents.image,
    onClick: closeModal,
    isModal: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  })), __jsx(StyledPadding, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }), __jsx(StyledPadding, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 17
    }
  }), __jsx(StyledPadding, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  })));
};

_s(ProjectsList, "U3I5ltwRHMyf/3Lsc/vSJydroB0=");

_c3 = ProjectsList;
/* harmony default export */ __webpack_exports__["default"] = (ProjectsList);

var _c, _c2, _c3;

$RefreshReg$(_c, "StyledPadding");
$RefreshReg$(_c2, "StyledProjectsList");
$RefreshReg$(_c3, "ProjectsList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9qZWN0c0xpc3QuanMiXSwibmFtZXMiOlsiTW9kYWwiLCJzZXRBcHBFbGVtZW50IiwiY3VzdG9tU3R5bGVzIiwib3ZlcmxheSIsImJhY2tncm91bmRDb2xvciIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJtYXJnaW4iLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJCb3R0b20iLCJib3hTaGFkb3ciLCJ3aWR0aCIsImhlaWdodCIsImluc2V0IiwiU3R5bGVkUGFkZGluZyIsInN0eWxlZCIsImRpdiIsIlN0eWxlZFByb2plY3RzTGlzdCIsIlByb2plY3RzTGlzdCIsImRhdGEiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidHlwZSIsInJlcG9MaW5rIiwibGl2ZUxpbmsiLCJpbWFnZSIsIm1vZGFsQ29udGVudHMiLCJzZXRNb2RhbENvbnRlbnRzIiwib3Blbk1vZGFsIiwiaXRlbSIsIm5hbWUiLCJyZXBvc2l0b3J5VG9waWNzIiwiZWRnZXMiLCJub2RlIiwidG9waWMiLCJ1cmwiLCJob21lcGFnZVVybCIsIm9wZW5HcmFwaEltYWdlVXJsIiwiY2xvc2VNb2RhbCIsIm1hcCIsInByb2plY3QiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGtEQUFLLENBQUNDLGFBQU4sQ0FBb0IsU0FBcEI7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDakJDLFNBQU8sRUFBRTtBQUNMQyxtQkFBZSxFQUFFO0FBRFosR0FEUTtBQUlqQkMsU0FBTyxFQUFHO0FBQ05DLGNBQVUsRUFBRSxNQUROO0FBRU5DLFNBQUssRUFBRSxNQUZEO0FBR05DLFVBQU0sRUFBRSxNQUhGO0FBSU5DLFVBQU0sRUFBRSxNQUpGO0FBS05DLGdCQUFZLEVBQUUsR0FMUjtBQU1OQyxnQkFBWSxFQUFFLG1CQU5SO0FBT05DLGFBQVMsRUFBRSxtQkFQTDtBQVFOQyxTQUFLLEVBQUUsS0FSRDtBQVNOQyxVQUFNLEVBQUUsTUFURjtBQVVOQyxTQUFLLEVBQUU7QUFWRDtBQUpPLENBQXJCLEMsQ0FnQks7O0FBRUwsSUFBTUMsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGlDQUFuQjtLQUFNRixhO0FBS04sSUFBTUcsa0JBQWtCLEdBQUdGLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsOHRCQUF4QjtNQUFNQyxrQjs7QUE4Q04sSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBYztBQUFBOztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVzs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxLQUFELENBRGY7QUFBQSxNQUN4QkMsV0FEd0I7QUFBQSxNQUNYQyxjQURXOztBQUFBLG1CQUVXRixzREFBUSxDQUFDO0FBQy9DRyxTQUFLLEVBQUUsRUFEd0M7QUFFL0NDLGVBQVcsRUFBRSxFQUZrQztBQUcvQ0MsUUFBSSxFQUFFLEVBSHlDO0FBSS9DQyxZQUFRLEVBQUUsRUFKcUM7QUFLL0NDLFlBQVEsRUFBRSxFQUxxQztBQU0vQ0MsU0FBSyxFQUFFO0FBTndDLEdBQUQsQ0FGbkI7QUFBQSxNQUV4QkMsYUFGd0I7QUFBQSxNQUVUQyxnQkFGUzs7QUFXL0IsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0FBQ3hCRixvQkFBZ0IsQ0FBQztBQUNiUCxXQUFLLEVBQUVTLElBQUksQ0FBQ0MsSUFEQztBQUViVCxpQkFBVyxFQUFFUSxJQUFJLENBQUNSLFdBRkw7QUFHYkMsVUFBSSxFQUFFTyxJQUFJLENBQUNFLGdCQUFMLENBQXNCQyxLQUF0QixDQUE0QixDQUE1QixFQUErQkMsSUFBL0IsQ0FBb0NDLEtBQXBDLENBQTBDSixJQUhuQztBQUliUCxjQUFRLEVBQUVNLElBQUksQ0FBQ00sR0FKRjtBQUtiWCxjQUFRLEVBQUVLLElBQUksQ0FBQ08sV0FMRjtBQU1iWCxXQUFLLEVBQUVJLElBQUksQ0FBQ1E7QUFOQyxLQUFELENBQWhCO0FBUUFsQixrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNILEdBVkQ7O0FBV0EsTUFBTW1CLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FBTW5CLGNBQWMsQ0FBQyxLQUFELENBQXBCO0FBQUEsR0FBbkI7O0FBRUEsU0FDSSxtRUFDSSxNQUFDLGtCQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0gsSUFBSSxDQUFDdUIsR0FBTCxDQUFTLFVBQUNDLE9BQUQsRUFBYTtBQUNuQixXQUNJLE1BQUMseURBQUQ7QUFDSSxXQUFLLEVBQUVBLE9BQU8sQ0FBQ1AsSUFBUixDQUFhSSxpQkFEeEI7QUFFSSxXQUFLLEVBQUVHLE9BQU8sQ0FBQ1AsSUFBUixDQUFhSCxJQUZ4QjtBQUdJLGlCQUFXLEVBQUVVLE9BQU8sQ0FBQ1AsSUFBUixDQUFhWixXQUg5QjtBQUlJLFVBQUksRUFBRW1CLE9BQU8sQ0FBQ1AsSUFBUixDQUFhRixnQkFBYixDQUE4QkMsS0FBOUIsQ0FBb0MsQ0FBcEMsRUFBdUNDLElBQXZDLENBQTRDQyxLQUE1QyxDQUFrREosSUFKNUQ7QUFLSSxTQUFHLEVBQUVVLE9BQU8sQ0FBQ1AsSUFBUixDQUFhUSxFQUx0QjtBQU1JLGFBQU8sRUFBRTtBQUFBLGVBQU1iLFNBQVMsQ0FBQ1ksT0FBTyxDQUFDUCxJQUFULENBQWY7QUFBQSxPQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESjtBQVVILEdBWEEsQ0FETCxFQWFJLE1BQUMsa0RBQUQ7QUFDSSxVQUFNLEVBQUVmLFdBRFo7QUFFSSxrQkFBYyxFQUFFb0IsVUFGcEI7QUFHSSxPQUFHLEVBQUVaLGFBQWEsQ0FBQ0ksSUFIdkI7QUFJSSxTQUFLLEVBQUVqQyxZQUpYO0FBS0ksa0JBQWMsRUFBRSxHQUxwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyxvREFBRDtBQUNJLFNBQUssRUFBRTZCLGFBQWEsQ0FBQ04sS0FEekI7QUFFSSxlQUFXLEVBQUVNLGFBQWEsQ0FBQ0wsV0FGL0I7QUFHSSxRQUFJLEVBQUVLLGFBQWEsQ0FBQ0osSUFIeEI7QUFJSSxZQUFRLEVBQUVJLGFBQWEsQ0FBQ0gsUUFKNUI7QUFLSSxZQUFRLEVBQUVHLGFBQWEsQ0FBQ0YsUUFMNUI7QUFNSSxTQUFLLEVBQUVFLGFBQWEsQ0FBQ0QsS0FOekI7QUFPSSxXQUFPLEVBQUVhLFVBUGI7QUFRSSxXQUFPLE1BUlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBKLENBYkosRUErQkksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkosRUFnQ0ksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQ0osRUFpQ0ksTUFBQyxhQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0osQ0FESixDQURKO0FBdUNILENBL0REOztHQUFNdkIsWTs7TUFBQUEsWTtBQWlFU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvamVjdHMvcmVhY3QuY2VhNTY2OWVjNzA3NWYxODY2MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBQcm9qZWN0c0xpc3RJdGVtIGZyb20gJy4vUHJvamVjdHNMaXN0SXRlbSc7XHJcbmltcG9ydCBEaXNwbGF5Q2FzZSBmcm9tICcuL0Rpc3BsYXlDYXNlJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcclxuXHJcbk1vZGFsLnNldEFwcEVsZW1lbnQoXCIjX19uZXh0XCIpO1xyXG5cclxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xyXG4gICAgb3ZlcmxheToge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoNTUsIDU1LCA1NSwgMC42KSdcclxuICAgIH0sXHJcbiAgICBjb250ZW50IDoge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMzMzJyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogJzAnLFxyXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzNweCBzb2xpZCAjMWFjOTY2JyxcclxuICAgICAgICBib3hTaGFkb3c6ICcwIDAgMTBweCAzcHggIzAwMCcsXHJcbiAgICAgICAgd2lkdGg6ICc4MCUnLFxyXG4gICAgICAgIGhlaWdodDogJzYwdmgnLFxyXG4gICAgICAgIGluc2V0OiAnMTBweCdcclxuICAgIH1cclxuICB9OyAvLyBtb2RhbCBjdXN0b20gc3R5bGVzXHJcblxyXG5jb25zdCBTdHlsZWRQYWRkaW5nID0gc3R5bGVkLmRpdmBcclxuICAgIGhlaWdodDogMC4xcmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmA7XHJcblxyXG5jb25zdCBTdHlsZWRQcm9qZWN0c0xpc3QgPSBzdHlsZWQuZGl2YCBcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCBtaW5tYXgoMTVyZW0sIGF1dG8pKTtcclxuICAgIGdyaWQtZ2FwOiAxcmVtIDFyZW07XHJcbiAgICBoZWlnaHQ6IDg1dmg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMCAxcmVtO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAgLyogSUUgYW5kIEVkZ2UgKi9cclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgIC8qIEZpcmVmb3ggKi9cclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA0MCUgMCUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA3NSUgODQlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSgjNEQ5QzQxKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvKCMxOTkxMUQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3Itc3RvcCguNiwjMWFjOTY2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgICAgIGhlaWdodDogODV2aDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbmA7XHJcblxyXG5jb25zdCBQcm9qZWN0c0xpc3QgPSAoeyBkYXRhIH0pID0+IHtcclxuICAgIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW21vZGFsQ29udGVudHMsIHNldE1vZGFsQ29udGVudHNdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxyXG4gICAgICAgIHR5cGU6IFwiXCIsXHJcbiAgICAgICAgcmVwb0xpbms6IFwiXCIsXHJcbiAgICAgICAgbGl2ZUxpbms6IFwiXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiXCJcclxuICAgIH0pOyAgIFxyXG5cclxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgc2V0TW9kYWxDb250ZW50cyh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLm5hbWUsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICB0eXBlOiBpdGVtLnJlcG9zaXRvcnlUb3BpY3MuZWRnZXNbMF0ubm9kZS50b3BpYy5uYW1lLFxyXG4gICAgICAgICAgICByZXBvTGluazogaXRlbS51cmwsXHJcbiAgICAgICAgICAgIGxpdmVMaW5rOiBpdGVtLmhvbWVwYWdlVXJsLFxyXG4gICAgICAgICAgICBpbWFnZTogaXRlbS5vcGVuR3JhcGhJbWFnZVVybFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldE1vZGFsSXNPcGVuKHRydWUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxTdHlsZWRQcm9qZWN0c0xpc3Q+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHByb2plY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdHNMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3Byb2plY3Qubm9kZS5vcGVuR3JhcGhJbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9qZWN0Lm5vZGUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0Lm5vZGUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPXtwcm9qZWN0Lm5vZGUucmVwb3NpdG9yeVRvcGljcy5lZGdlc1swXS5ub2RlLnRvcGljLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3Qubm9kZS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbChwcm9qZWN0Lm5vZGUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cclxuICAgICAgICAgICAgICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e21vZGFsQ29udGVudHMubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlVGltZW91dE1TPXszMDB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlDYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXttb2RhbENvbnRlbnRzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17bW9kYWxDb250ZW50cy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17bW9kYWxDb250ZW50cy50eXBlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvTGluaz17bW9kYWxDb250ZW50cy5yZXBvTGlua31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGl2ZUxpbms9e21vZGFsQ29udGVudHMubGl2ZUxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXttb2RhbENvbnRlbnRzLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjbG9zZU1vZGFsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc01vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGVkUGFkZGluZyAvPlxyXG4gICAgICAgICAgICAgICAgPFN0eWxlZFBhZGRpbmcgLz5cclxuICAgICAgICAgICAgICAgIDxTdHlsZWRQYWRkaW5nIC8+XHJcbiAgICAgICAgICAgIDwvU3R5bGVkUHJvamVjdHNMaXN0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0c0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==