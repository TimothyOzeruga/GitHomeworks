"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Cat =
/*#__PURE__*/
function (_Animal) {
  _inherits(Cat, _Animal);

  function Cat(options) {
    var _this;

    _classCallCheck(this, Cat);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Cat).call(this, options));
    _this.weigth = options.weigth;
    return _this;
  }

  _createClass(Cat, [{
    key: "fullInfo",
    value: function fullInfo(el) {
      var r = "<ul>\n        <li>Name: ".concat(this.name, "</li>\n        <li>").concat(this.color, "</li>\n        <li>").concat(this.age, "</li>\n        <li>").concat(this.name, "</li>\n        </ul>");
      el.innerText = r;
    }
  }, {
    key: "nameInfo",
    get: function get() {
      return "Cat name: " + this.name;
    }
  }, {
    key: "ageInfo",
    get: function get() {
      return this.age * 5;
    }
  }]);

  return Cat;
}(Animal);