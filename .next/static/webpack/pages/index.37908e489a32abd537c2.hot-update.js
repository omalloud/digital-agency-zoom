webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_search_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/search-context */ "./context/search-context.js");
/* harmony import */ var _context_menu_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/menu-context */ "./context/menu-context.js");
/* harmony import */ var _components_search_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/search-popup */ "./components/search-popup.js");
/* harmony import */ var _components_popup_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/popup-menu */ "./components/popup-menu.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\mallo\\OneDrive\\Desktop\\1-react\\digital agency\\components\\layout.js",
    _this = undefined,
    _s = $RefreshSig$();









var Layout = function Layout(_ref) {
  _s();

  var PageTitle = _ref.PageTitle,
      children = _ref.children;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_search_context__WEBPACK_IMPORTED_MODULE_3__["SearchContext"]),
      searchStatus = _useContext.searchStatus;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_menu_context__WEBPACK_IMPORTED_MODULE_4__["MenuContext"]),
      menuStatus = _useContext2.menuStatus;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      scrollTop = _useState[0],
      setScrollTop = _useState[1];

  var handleScrollTop = function handleScrollTop() {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", handleScrollTop);
    return function () {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: PageTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "wrapper",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this), true === searchStatus ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_search_popup__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 32
    }, _this) : null, true === menuStatus ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_popup_menu__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 30
    }, _this) : null, scrollTop === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_scroll__WEBPACK_IMPORTED_MODULE_7__["Link"], {
      to: "wrapper",
      smooth: true,
      duration: 500,
      id: "backToTop",
      className: "scroll-to-top showit",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
        className: "fa fa-angle-double-up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, _this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(Layout, "XrbL6RIp6Bnfp80z3OGqx7PxzJQ=");

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiUGFnZVRpdGxlIiwiY2hpbGRyZW4iLCJ1c2VDb250ZXh0IiwiU2VhcmNoQ29udGV4dCIsInNlYXJjaFN0YXR1cyIsIk1lbnVDb250ZXh0IiwibWVudVN0YXR1cyIsInVzZVN0YXRlIiwic2Nyb2xsVG9wIiwic2V0U2Nyb2xsVG9wIiwiaGFuZGxlU2Nyb2xsVG9wIiwid2luZG93Iiwic2Nyb2xsWSIsInVzZUVmZmVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTZCO0FBQUE7O0FBQUEsTUFBMUJDLFNBQTBCLFFBQTFCQSxTQUEwQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFDakJDLHdEQUFVLENBQUNDLHFFQUFELENBRE87QUFBQSxNQUNsQ0MsWUFEa0MsZUFDbENBLFlBRGtDOztBQUFBLHFCQUVuQkYsd0RBQVUsQ0FBQ0csaUVBQUQsQ0FGUztBQUFBLE1BRWxDQyxVQUZrQyxnQkFFbENBLFVBRmtDOztBQUFBLGtCQUdSQyxzREFBUSxDQUFDLEtBQUQsQ0FIQTtBQUFBLE1BR25DQyxTQUhtQztBQUFBLE1BR3hCQyxZQUh3Qjs7QUFLMUMsTUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLFFBQUlDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixFQUFyQixFQUF5QjtBQUN2Qkgsa0JBQVksQ0FBQyxJQUFELENBQVo7QUFDRCxLQUZELE1BRU8sSUFBSUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCLEVBQXJCLEVBQXlCO0FBQzlCSCxrQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNEO0FBQ0YsR0FORDs7QUFRQUkseURBQVMsQ0FBQyxZQUFNO0FBQ2RGLFVBQU0sQ0FBQ0csZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NKLGVBQWxDO0FBQ0EsV0FBTyxZQUFNO0FBQ1hDLFlBQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNMLGVBQXJDO0FBQ0QsS0FGRDtBQUdELEdBTFEsRUFLTixDQUFDRixTQUFELENBTE0sQ0FBVDtBQU9BLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUNHUjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFNRTtBQUFLLFFBQUUsRUFBQyxTQUFSO0FBQUEsZ0JBQW1CQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsRUFPRyxTQUFTRyxZQUFULGdCQUF3QixxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXhCLEdBQTBDLElBUDdDLEVBUUcsU0FBU0UsVUFBVCxnQkFBc0IscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF0QixHQUFzQyxJQVJ6QyxFQVVHRSxTQUFTLEtBQUssSUFBZCxnQkFDQyxxRUFBQyxpREFBRDtBQUNFLFFBQUUsRUFBQyxTQURMO0FBRUUsWUFBTSxFQUFFLElBRlY7QUFHRSxjQUFRLEVBQUUsR0FIWjtBQUlFLFFBQUUsRUFBQyxXQUpMO0FBS0UsZUFBUyxFQUFDLHNCQUxaO0FBQUEsNkJBT0U7QUFBRyxpQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxHQVVHLElBcEJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBd0JELENBNUNEOztHQUFNVCxNOztLQUFBQSxNO0FBOENTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNzkwOGU0ODlhMzJhYmQ1MzdjMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9zZWFyY2gtY29udGV4dFwiO1xuaW1wb3J0IHsgTWVudUNvbnRleHQgfSBmcm9tIFwiQC9jb250ZXh0L21lbnUtY29udGV4dFwiO1xuaW1wb3J0IFNlYXJjaFBvcHVwIGZyb20gXCJAL2NvbXBvbmVudHMvc2VhcmNoLXBvcHVwXCI7XG5pbXBvcnQgUG9wdXBNZW51IGZyb20gXCJAL2NvbXBvbmVudHMvcG9wdXAtbWVudVwiO1xuaW1wb3J0IHsgTGluayBhcyBTY3JvbGxMaW5rIH0gZnJvbSBcInJlYWN0LXNjcm9sbFwiO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBQYWdlVGl0bGUsIGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgeyBzZWFyY2hTdGF0dXMgfSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XG4gIGNvbnN0IHsgbWVudVN0YXR1cyB9ID0gdXNlQ29udGV4dChNZW51Q29udGV4dCk7XG4gIGNvbnN0IFtzY3JvbGxUb3AsIHNldFNjcm9sbFRvcF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsVG9wID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDcwKSB7XG4gICAgICBzZXRTY3JvbGxUb3AodHJ1ZSk7XG4gICAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8IDcwKSB7XG4gICAgICBzZXRTY3JvbGxUb3AoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbFRvcCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbFRvcCk7XG4gICAgfTtcbiAgfSwgW3Njcm9sbFRvcF0pO1xuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5cbiAgICAgICAgICB7UGFnZVRpdGxlfVxuICAgICAgICA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICB7dHJ1ZSA9PT0gc2VhcmNoU3RhdHVzID8gPFNlYXJjaFBvcHVwIC8+IDogbnVsbH1cbiAgICAgIHt0cnVlID09PSBtZW51U3RhdHVzID8gPFBvcHVwTWVudSAvPiA6IG51bGx9XG5cbiAgICAgIHtzY3JvbGxUb3AgPT09IHRydWUgPyAoXG4gICAgICAgIDxTY3JvbGxMaW5rXG4gICAgICAgICAgdG89XCJ3cmFwcGVyXCJcbiAgICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgICAgZHVyYXRpb249ezUwMH1cbiAgICAgICAgICBpZD1cImJhY2tUb1RvcFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2Nyb2xsLXRvLXRvcCBzaG93aXRcIlxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG91YmxlLXVwXCI+PC9pPlxuICAgICAgICA8L1Njcm9sbExpbms+XG4gICAgICApIDogbnVsbH1cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==