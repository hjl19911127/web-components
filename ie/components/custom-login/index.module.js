function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CustomLogin =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(CustomLogin, _HTMLElement);

  function CustomLogin() {
    var _this;

    _classCallCheck(this, CustomLogin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomLogin).call(this));

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    var styles = "\n            :host {\n                display: block;\n            }\n            \n            :host([hidden]) {\n                display: none;\n            }\n            \n            label {\n                display: inline-block;\n                width: 4em;\n            }\n            \n            .login-panel {\n                background-color: #70C1B3;\n                padding: 10px;\n            }\n            \n            .form-item {\n                margin-bottom: 5px;\n            }\n        ";
    shadowRoot.innerHTML = "\n            <style>".concat(styles, "</style>\n            <div class=\"login-panel\">\n                <div class=\"form-item\">\n                    <label>\u7528\u6237\u540D\uFF1A</label><input type=\"text\">\n                </div>\n                <div class=\"form-item\">\n                    <label>\u5BC6\u7801\uFF1A</label><input type=\"password\">\n                </div>\n            </div>\n        ");
    return _this;
  }

  _createClass(CustomLogin, [{
    key: "toggle",
    value: function toggle() {} // 当 custom element首次被插入文档DOM时

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {} // 当 custom element从文档DOM中删除时

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {} // 当 custom element被移动到新的文档时

  }, {
    key: "adoptedCallback",
    value: function adoptedCallback() {} // 当 custom element增加、删除、修改自身属性时

  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback() {}
  }, {
    key: "disabled",
    get: function get() {
      return this.hasAttribute('disabled');
    },
    set: function set(val) {
      // Reflect the value of `disabled` as an attribute.
      if (val) {
        this.setAttribute('disabled', '');
      } else {
        this.removeAttribute('disabled');
      }

      this.toggle();
    }
  }]);

  return CustomLogin;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('custom-login', CustomLogin);