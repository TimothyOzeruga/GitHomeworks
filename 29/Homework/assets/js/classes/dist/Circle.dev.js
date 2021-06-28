"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Circle =
/*#__PURE__*/
function () {
  function Circle(r) {
    _classCallCheck(this, Circle);

    this.r = r;
  }

  _createClass(Circle, [{
    key: "circleArea",
    value: function circleArea() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.r;
      var radius = Math.PI * Math.pow(r, 2);
      return radius;
    }
  }, {
    key: "circumference",
    value: function circumference() {
      var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.r;
      var circumferencee = 2 * Math.PI * r;
      return circumferencee;
    }
  }, {
    key: "radiusInfo",
    get: function get() {
      return this.r;
    },
    set: function set(newR) {
      this.r = newR;
    }
  }, {
    key: "diametrInfo",
    get: function get() {
      return this.r * 2;
    }
  }]);

  return Circle;
}();