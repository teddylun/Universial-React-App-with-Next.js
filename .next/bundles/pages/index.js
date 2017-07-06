
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(544);


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(545);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/teddy/Documents/udemy/repos/hello-next/pages/index.js?entry";
// this is the Link API


var Index = function Index() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement(_link2.default, { href: "/about", __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("a", { style: { fontSize: 20 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, "About Page")), _react2.default.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Hello Next.js"));
};

exports.default = Index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/teddy/Documents/udemy/repos/hello-next/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/teddy/Documents/udemy/repos/hello-next/pages/index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

},[543]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2RiNjVlYjkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gdGhpcyBpcyB0aGUgTGluayBBUElcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgSW5kZXggPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgPGEgc3R5bGU9e3sgZm9udFNpemU6IDIwIH19PkFib3V0IFBhZ2U8L2E+XG4gICAgICB7Lyo8YnV0dG9uPkdvIHRvIEFib3V0IFBhZ2U8L2J1dHRvbj4qL31cbiAgICAgIHsvKjxkaXY+R28gdG8gQWJvdXQgUGFnZTwvZGl2PiovfVxuICAgIDwvTGluaz5cbiAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        