webpackHotUpdate_N_E("pages/index",{

/***/ "./components/header-one.js":
/*!**********************************!*\
  !*** ./components/header-one.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/data */ "./data/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _context_search_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/search-context */ "./context/search-context.js");
/* harmony import */ var _context_menu_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/menu-context */ "./context/menu-context.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\mallo\\OneDrive\\Desktop\\1-react\\digital agency\\components\\header-one.js",
    _this = undefined,
    _s = $RefreshSig$();








var HeaderOne = function HeaderOne() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      sticky = _useState[0],
      setSticky = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_search_context__WEBPACK_IMPORTED_MODULE_4__["SearchContext"]),
      searchStatus = _useContext.searchStatus,
      updateSearchStatus = _useContext.updateSearchStatus;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_context_menu_context__WEBPACK_IMPORTED_MODULE_5__["MenuContext"]),
      menuStatus = _useContext2.menuStatus,
      updateMenuStatus = _useContext2.updateMenuStatus;

  var handleSearchClick = function handleSearchClick(e) {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };

  var handleMenuClick = function handleMenuClick(e) {
    e.preventDefault();
    updateMenuStatus(!menuStatus);
  };

  var handleScroll = function handleScroll() {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    window.addEventListener("scroll", handleScroll);
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: "header_01 ".concat(true === sticky ? "fixedHeader animated flipInX" : null),
    id: "header",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      fluid: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        className: "justify-content-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          className: "col-6",
          lg: 2,
          md: 3,
          sm: 3,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "logo",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: _data__WEBPACK_IMPORTED_MODULE_2__["LogoImage"].light,
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          lg: 8,
          sm: 8,
          md: 7,
          className: "d-none d-lg-block ",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
            className: "mainmenu text-center",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: _data__WEBPACK_IMPORTED_MODULE_2__["NavLinks"].map(function (links, index) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                  className: "".concat(undefined !== links.subItems ? "menu-item-has-children" : ""),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
                    href: links.url,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: links.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 68,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 67,
                    columnNumber: 23
                  }, _this)
                }, index, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 21
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
          lg: 2,
          md: 2,
          sm: 4,
          className: "col-6",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "navigator text-right",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "search searchToggler",
              href: "#",
              onClick: handleSearchClick,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "mei-magnifying-glass"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: "#",
              className: "menu mobilemenu d-none d-md-none d-lg-none",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "mei-menu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              id: "open-overlay-nav",
              className: "menu hamburger",
              onClick: handleMenuClick,
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                className: "mei-menu"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, _this);
};

_s(HeaderOne, "pTbg/O4IyE7mEyt8k7lyy3t2wFU=");

_c = HeaderOne;
/* harmony default export */ __webpack_exports__["default"] = (HeaderOne);

var _c;

$RefreshReg$(_c, "HeaderOne");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXItb25lLmpzIl0sIm5hbWVzIjpbIkhlYWRlck9uZSIsInVzZVN0YXRlIiwic3RpY2t5Iiwic2V0U3RpY2t5IiwidXNlQ29udGV4dCIsIlNlYXJjaENvbnRleHQiLCJzZWFyY2hTdGF0dXMiLCJ1cGRhdGVTZWFyY2hTdGF0dXMiLCJNZW51Q29udGV4dCIsIm1lbnVTdGF0dXMiLCJ1cGRhdGVNZW51U3RhdHVzIiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJoYW5kbGVNZW51Q2xpY2siLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJzY3JvbGxZIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJMb2dvSW1hZ2UiLCJsaWdodCIsIk5hdkxpbmtzIiwibWFwIiwibGlua3MiLCJpbmRleCIsInVuZGVmaW5lZCIsInN1Ykl0ZW1zIiwidXJsIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFDTUMsc0RBQVEsQ0FBQyxLQUFELENBRGQ7QUFBQSxNQUNmQyxNQURlO0FBQUEsTUFDUEMsU0FETzs7QUFBQSxvQkFFdUJDLHdEQUFVLENBQUNDLHFFQUFELENBRmpDO0FBQUEsTUFFZEMsWUFGYyxlQUVkQSxZQUZjO0FBQUEsTUFFQUMsa0JBRkEsZUFFQUEsa0JBRkE7O0FBQUEscUJBR21CSCx3REFBVSxDQUFDSSxpRUFBRCxDQUg3QjtBQUFBLE1BR2RDLFVBSGMsZ0JBR2RBLFVBSGM7QUFBQSxNQUdGQyxnQkFIRSxnQkFHRkEsZ0JBSEU7O0FBSXRCLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsQ0FBRCxFQUFPO0FBQy9CQSxL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T0FBcEM7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsc0JBQWY7QUFBQSxvQ0FDRTtBQUNFLHVCQUFTLEVBQUMsc0JBRFo7QUFFRSxrQkFBSSxFQUFDLEdBRlA7QUFHRSxxQkFBTyxFQUFFZixpQkFIWDtBQUFBLHFDQUtFO0FBQUcseUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBUUU7QUFDRSxrQkFBSSxFQUFDLEdBRFA7QUFFRSx1QkFBUyxFQUFDLDRDQUZaO0FBQUEscUNBSUU7QUFBRyx5QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUkYsZUFjRTtBQUNFLGdCQUFFLEVBQUMsa0JBREw7QUFFRSx1QkFBUyxFQUFDLGdCQUZaO0FBR0UscUJBQU8sRUFBRUcsZUFIWDtBQUlFLGtCQUFJLEVBQUMsR0FKUDtBQUFBLHFDQU1FO0FBQUcseUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnRkQsQ0E1R0Q7O0dBQU1kLFM7O0tBQUFBLFM7QUE4R1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQzY2U5MGU5MmQ1ZmEzYmQwNmVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2dvSW1hZ2UsIE5hdkxpbmtzIH0gZnJvbSBcIkAvZGF0YVwiO1xyXG5pbXBvcnQgeyBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiO1xyXG5pbXBvcnQgeyBTZWFyY2hDb250ZXh0IH0gZnJvbSBcIkAvY29udGV4dC9zZWFyY2gtY29udGV4dFwiO1xyXG5pbXBvcnQgeyBNZW51Q29udGV4dCB9IGZyb20gXCJAL2NvbnRleHQvbWVudS1jb250ZXh0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IEhlYWRlck9uZSA9ICgpID0+IHtcclxuICBjb25zdCBbc3RpY2t5LCBzZXRTdGlja3ldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHsgc2VhcmNoU3RhdHVzLCB1cGRhdGVTZWFyY2hTdGF0dXMgfSA9IHVzZUNvbnRleHQoU2VhcmNoQ29udGV4dCk7XHJcbiAgY29uc3QgeyBtZW51U3RhdHVzLCB1cGRhdGVNZW51U3RhdHVzIH0gPSB1c2VDb250ZXh0KE1lbnVDb250ZXh0KTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2hDbGljayA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB1cGRhdGVTZWFyY2hTdGF0dXMoIXNlYXJjaFN0YXR1cyk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdXBkYXRlTWVudVN0YXR1cyghbWVudVN0YXR1cyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNzApIHtcclxuICAgICAgc2V0U3RpY2t5KHRydWUpO1xyXG4gICAgfSBlbHNlIGlmICh3aW5kb3cuc2Nyb2xsWSA8IDcwKSB7XHJcbiAgICAgIHNldFN0aWNreShmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9LCBbc3RpY2t5XSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyXHJcbiAgICAgIGNsYXNzTmFtZT17YGhlYWRlcl8wMSAke1xyXG4gICAgICAgIHRydWUgPT09IHN0aWNreSA/IFwiZml4ZWRIZWFkZXIgYW5pbWF0ZWQgZmxpcEluWFwiIDogbnVsbFxyXG4gICAgICB9YH1cclxuICAgICAgaWQ9XCJoZWFkZXJcIlxyXG4gICAgPlxyXG4gICAgICA8Q29udGFpbmVyIGZsdWlkPlxyXG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiY29sLTZcIiBsZz17Mn0gbWQ9ezN9IHNtPXszfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17TG9nb0ltYWdlLmxpZ2h0fSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgIDxDb2wgbGc9ezh9IHNtPXs4fSBtZD17N30gY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2sgXCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWFpbm1lbnUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7TmF2TGlua3MubWFwKChsaW5rcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQgIT09IGxpbmtzLnN1Ykl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1lbnUtaXRlbS1oYXMtY2hpbGRyZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGlua3MudXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2xpbmtzLm5hbWV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIHVuZGVmaW5lZCAhPT0gbGlua3Muc3ViSXRlbXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWItbWVudVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsaW5rcy5zdWJJdGVtcy5tYXAoKHN1YkxpbmtzLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtzdWJMaW5rcy51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntzdWJMaW5rcy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPENvbCBsZz17Mn0gbWQ9ezJ9IHNtPXs0fSBjbGFzc05hbWU9XCJjb2wtNlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdmlnYXRvciB0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaCBzZWFyY2hUb2dnbGVyXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaENsaWNrfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cIm1laS1tYWduaWZ5aW5nLWdsYXNzXCI+PC9pPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudSBtb2JpbGVtZW51IGQtbm9uZSBkLW1kLW5vbmUgZC1sZy1ub25lXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtZWktbWVudVwiPjwvaT5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGlkPVwib3Blbi1vdmVybGF5LW5hdlwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51IGhhbWJ1cmdlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9XHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwibWVpLW1lbnVcIj48L2k+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDwvUm93PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJPbmU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=