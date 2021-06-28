"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PrintMachine =
/*#__PURE__*/
function () {
  function PrintMachine(options) {
    _classCallCheck(this, PrintMachine);

    this.size = options.size;
    this.color = options.color;
    this.family = options.family;
  }

  _createClass(PrintMachine, [{
    key: "print",
    value: function print(text) {
      var style = "font-size:".concat(this.size, "px;color:").concat(this.color, ";font-family:").concat(this.family, ";");
      document.write("<p style=\"".concat(style, "\">").concat(text, "</p>"));
    }
  }]);

  return PrintMachine;
}();