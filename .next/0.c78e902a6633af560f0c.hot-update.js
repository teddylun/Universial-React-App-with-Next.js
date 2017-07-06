webpackHotUpdate(0,{

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof2 = __webpack_require__(106);

var _typeof3 = _interopRequireDefault(_typeof2);

var _stringify = __webpack_require__(546);

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _url = __webpack_require__(288);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(94);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _router = __webpack_require__(70);

var _router2 = _interopRequireDefault(_router);

var _utils = __webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function (_Component) {
  (0, _inherits3.default)(Link, _Component);

  function Link(props) {
    var _ref;

    (0, _classCallCheck3.default)(this, Link);

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Link.__proto__ || (0, _getPrototypeOf2.default)(Link)).call.apply(_ref, [this, props].concat(rest)));

    _this.linkClicked = _this.linkClicked.bind(_this);
    _this.formatUrls(props);
    return _this;
  }

  (0, _createClass3.default)(Link, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.formatUrls(nextProps);
    }
  }, {
    key: 'linkClicked',
    value: function linkClicked(e) {
      var _this2 = this;

      if (e.currentTarget.nodeName === 'A' && (e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var shallow = this.props.shallow;
      var href = this.href,
          as = this.as;


      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;

      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;

      e.preventDefault();

      //  avoid scroll for urls with anchor refs
      var scroll = this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      }

      // replace state instead of push if prop is present
      var replace = this.props.replace;

      var changeMethod = replace ? 'replace' : 'push';

      // straight up redirect
      _router2.default[changeMethod](href, as, { shallow: shallow }).then(function (success) {
        if (!success) return;
        if (scroll) window.scrollTo(0, 0);
      }).catch(function (err) {
        if (_this2.props.onError) _this2.props.onError(err);
      });
    }
  }, {
    key: 'prefetch',
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return;

      // Prefetch the JSON page if asked (only in the client)
      var pathname = window.location.pathname;

      var href = (0, _url.resolve)(pathname, this.href);
      _router2.default.prefetch(href);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify2.default)(this.props.href) !== (0, _stringify2.default)(prevProps.href)) {
        this.prefetch();
      }
    }

    // We accept both 'href' and 'as' as objects which we can pass to `url.format`.
    // We'll handle it here.

  }, {
    key: 'formatUrls',
    value: function formatUrls(props) {
      this.href = props.href && (0, _typeof3.default)(props.href) === 'object' ? (0, _url.format)(props.href) : props.href;
      this.as = props.as && (0, _typeof3.default)(props.as) === 'object' ? (0, _url.format)(props.as) : props.as;
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var href = this.href,
          as = this.as;
      // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

      if (typeof children === 'string') {
        children = _react2.default.createElement(
          'a',
          null,
          children
        );
      }

      // This will return the first child, if multiple are provided it will throw an error
      var child = _react.Children.only(children);
      var props = {
        onClick: this.linkClicked

        // If child is an <a> tag and doesn't have a href attribute we specify it so that repetition is not needed by the user
      };if (child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      }

      // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.
      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = (0, _router._rewriteUrlForNextExport)(props.href);
      }

      return _react2.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component); /* global __NEXT_DATA__ */

Link.propTypes = {
  prefetch: _propTypes2.default.bool,
  children: _propTypes2.default.oneOfType([_propTypes2.default.element, function (props, propName) {
    var value = props[propName];

    if (typeof value === 'string') {
      warnLink('Warning: You\'re using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>');
    }

    return null;
  }]).isRequired,
  shallow: _propTypes2.default.bool
};
exports.default = Link;


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

var warnLink = (0, _utils.execOnce)(_utils.warn);

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(547), __esModule: true };

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

var core  = __webpack_require__(5)
  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jNzhlOTAyYTY2MzNhZjU2MGYwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9saWIvbGluay5qcz83YmE2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvanNvbi9zdHJpbmdpZnkuanM/OWFmMSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL2pzb24vc3RyaW5naWZ5LmpzP2FhNDIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZjIgPSByZXF1aXJlKCdiYWJlbC1ydW50aW1lL2hlbHBlcnMvdHlwZW9mJyk7XG5cbnZhciBfdHlwZW9mMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3R5cGVvZjIpO1xuXG52YXIgX3N0cmluZ2lmeSA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeScpO1xuXG52YXIgX3N0cmluZ2lmeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdHJpbmdpZnkpO1xuXG52YXIgX2dldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJyk7XG5cbnZhciBfZ2V0UHJvdG90eXBlT2YyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0UHJvdG90eXBlT2YpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjaycpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NsYXNzQ2FsbENoZWNrMik7XG5cbnZhciBfY3JlYXRlQ2xhc3MyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJyk7XG5cbnZhciBfY3JlYXRlQ2xhc3MzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlQ2xhc3MyKTtcblxudmFyIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMiA9IHJlcXVpcmUoJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJyk7XG5cbnZhciBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuMik7XG5cbnZhciBfaW5oZXJpdHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJyk7XG5cbnZhciBfaW5oZXJpdHMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW5oZXJpdHMyKTtcblxudmFyIF91cmwgPSByZXF1aXJlKCd1cmwnKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yb3V0ZXIgPSByZXF1aXJlKCcuL3JvdXRlcicpO1xuXG52YXIgX3JvdXRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXIpO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgTGluayA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMzLmRlZmF1bHQpKExpbmssIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIExpbmsocHJvcHMpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2szLmRlZmF1bHQpKHRoaXMsIExpbmspO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHJlc3QgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICByZXN0W19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMgPSAoMCwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4zLmRlZmF1bHQpKHRoaXMsIChfcmVmID0gTGluay5fX3Byb3RvX18gfHwgKDAsIF9nZXRQcm90b3R5cGVPZjIuZGVmYXVsdCkoTGluaykpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXMsIHByb3BzXS5jb25jYXQocmVzdCkpKTtcblxuICAgIF90aGlzLmxpbmtDbGlja2VkID0gX3RoaXMubGlua0NsaWNrZWQuYmluZChfdGhpcyk7XG4gICAgX3RoaXMuZm9ybWF0VXJscyhwcm9wcyk7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczMuZGVmYXVsdCkoTGluaywgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuZm9ybWF0VXJscyhuZXh0UHJvcHMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xpbmtDbGlja2VkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGlua0NsaWNrZWQoZSkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIGlmIChlLmN1cnJlbnRUYXJnZXQubm9kZU5hbWUgPT09ICdBJyAmJiAoZS5tZXRhS2V5IHx8IGUuY3RybEtleSB8fCBlLnNoaWZ0S2V5IHx8IGUubmF0aXZlRXZlbnQgJiYgZS5uYXRpdmVFdmVudC53aGljaCA9PT0gMikpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzaGFsbG93ID0gdGhpcy5wcm9wcy5zaGFsbG93O1xuICAgICAgdmFyIGhyZWYgPSB0aGlzLmhyZWYsXG4gICAgICAgICAgYXMgPSB0aGlzLmFzO1xuXG5cbiAgICAgIGlmICghaXNMb2NhbChocmVmKSkge1xuICAgICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBwYXRobmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcblxuICAgICAgaHJlZiA9ICgwLCBfdXJsLnJlc29sdmUpKHBhdGhuYW1lLCBocmVmKTtcbiAgICAgIGFzID0gYXMgPyAoMCwgX3VybC5yZXNvbHZlKShwYXRobmFtZSwgYXMpIDogaHJlZjtcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICAgIHZhciBzY3JvbGwgPSB0aGlzLnByb3BzLnNjcm9sbDtcblxuICAgICAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDA7XG4gICAgICB9XG5cbiAgICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgICAgdmFyIHJlcGxhY2UgPSB0aGlzLnByb3BzLnJlcGxhY2U7XG5cbiAgICAgIHZhciBjaGFuZ2VNZXRob2QgPSByZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnO1xuXG4gICAgICAvLyBzdHJhaWdodCB1cCByZWRpcmVjdFxuICAgICAgX3JvdXRlcjIuZGVmYXVsdFtjaGFuZ2VNZXRob2RdKGhyZWYsIGFzLCB7IHNoYWxsb3c6IHNoYWxsb3cgfSkudGhlbihmdW5jdGlvbiAoc3VjY2Vzcykge1xuICAgICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVybjtcbiAgICAgICAgaWYgKHNjcm9sbCkgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAoX3RoaXMyLnByb3BzLm9uRXJyb3IpIF90aGlzMi5wcm9wcy5vbkVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdwcmVmZXRjaCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByZWZldGNoKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLnByZWZldGNoKSByZXR1cm47XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuICAgICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgICAgdmFyIHBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgICB2YXIgaHJlZiA9ICgwLCBfdXJsLnJlc29sdmUpKHBhdGhuYW1lLCB0aGlzLmhyZWYpO1xuICAgICAgX3JvdXRlcjIuZGVmYXVsdC5wcmVmZXRjaChocmVmKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdGhpcy5wcmVmZXRjaCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgIGlmICgoMCwgX3N0cmluZ2lmeTIuZGVmYXVsdCkodGhpcy5wcm9wcy5ocmVmKSAhPT0gKDAsIF9zdHJpbmdpZnkyLmRlZmF1bHQpKHByZXZQcm9wcy5ocmVmKSkge1xuICAgICAgICB0aGlzLnByZWZldGNoKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gV2UgYWNjZXB0IGJvdGggJ2hyZWYnIGFuZCAnYXMnIGFzIG9iamVjdHMgd2hpY2ggd2UgY2FuIHBhc3MgdG8gYHVybC5mb3JtYXRgLlxuICAgIC8vIFdlJ2xsIGhhbmRsZSBpdCBoZXJlLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdmb3JtYXRVcmxzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0VXJscyhwcm9wcykge1xuICAgICAgdGhpcy5ocmVmID0gcHJvcHMuaHJlZiAmJiAoMCwgX3R5cGVvZjMuZGVmYXVsdCkocHJvcHMuaHJlZikgPT09ICdvYmplY3QnID8gKDAsIF91cmwuZm9ybWF0KShwcm9wcy5ocmVmKSA6IHByb3BzLmhyZWY7XG4gICAgICB0aGlzLmFzID0gcHJvcHMuYXMgJiYgKDAsIF90eXBlb2YzLmRlZmF1bHQpKHByb3BzLmFzKSA9PT0gJ29iamVjdCcgPyAoMCwgX3VybC5mb3JtYXQpKHByb3BzLmFzKSA6IHByb3BzLmFzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICB2YXIgaHJlZiA9IHRoaXMuaHJlZixcbiAgICAgICAgICBhcyA9IHRoaXMuYXM7XG4gICAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuXG4gICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdhJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIGNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgICAgdmFyIGNoaWxkID0gX3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBvbkNsaWNrOiB0aGlzLmxpbmtDbGlja2VkXG5cbiAgICAgICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUgd2Ugc3BlY2lmeSBpdCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICAgICAgfTtpZiAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZjtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5LlxuICAgICAgaWYgKHByb3BzLmhyZWYgJiYgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICBwcm9wcy5ocmVmID0gKDAsIF9yb3V0ZXIuX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KShwcm9wcy5ocmVmKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIExpbms7XG59KF9yZWFjdC5Db21wb25lbnQpOyAvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuXG5MaW5rLnByb3BUeXBlcyA9IHtcbiAgcHJlZmV0Y2g6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0LmVsZW1lbnQsIGZ1bmN0aW9uIChwcm9wcywgcHJvcE5hbWUpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgd2FybkxpbmsoJ1dhcm5pbmc6IFlvdVxcJ3JlIHVzaW5nIGEgc3RyaW5nIGRpcmVjdGx5IGluc2lkZSA8TGluaz4uIFRoaXMgdXNhZ2UgaGFzIGJlZW4gZGVwcmVjYXRlZC4gUGxlYXNlIGFkZCBhbiA8YT4gdGFnIGFzIGNoaWxkIG9mIDxMaW5rPicpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XSkuaXNSZXF1aXJlZCxcbiAgc2hhbGxvdzogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXG59O1xuZXhwb3J0cy5kZWZhdWx0ID0gTGluaztcblxuXG5mdW5jdGlvbiBpc0xvY2FsKGhyZWYpIHtcbiAgdmFyIHVybCA9ICgwLCBfdXJsLnBhcnNlKShocmVmLCBmYWxzZSwgdHJ1ZSk7XG4gIHZhciBvcmlnaW4gPSAoMCwgX3VybC5wYXJzZSkoKDAsIF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSwgZmFsc2UsIHRydWUpO1xuICByZXR1cm4gIXVybC5ob3N0IHx8IHVybC5wcm90b2NvbCA9PT0gb3JpZ2luLnByb3RvY29sICYmIHVybC5ob3N0ID09PSBvcmlnaW4uaG9zdDtcbn1cblxudmFyIHdhcm5MaW5rID0gKDAsIF91dGlscy5leGVjT25jZSkoX3V0aWxzLndhcm4pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9saWIvbGluay5qc1xuLy8gbW9kdWxlIGlkID0gNTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBjb3JlICA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvX2NvcmUnKVxuICAsICRKU09OID0gY29yZS5KU09OIHx8IChjb3JlLkpTT04gPSB7c3RyaW5naWZ5OiBKU09OLnN0cmluZ2lmeX0pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHJldHVybiAkSlNPTi5zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3VtZW50cyk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9qc29uL3N0cmluZ2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pOQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==