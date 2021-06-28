"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var car = {
  title: "Nissan",
  model: "Note",
  color: "Red",
  "Average speed": 130,
  Max_speed: 280,
  year: 2021,
  doors: 5,
  123: "Lorem"
};
var car2 = {
  title: "Audi",
  model: "Note",
  color: "Blue",
  "Average speed": 150,
  Max_speed: 280,
  year: 2021,
  doors: 2,
  123: "Lorem",
  getSpeed: function getSpeed() {
    return this["Average speed"];
  },
  setSpeed: function setSpeed(speed) {
    this["Average speed"] = speed;
  }
};

function carInfo(auto) {
  var rez = '<ul>';

  for (var key in auto) {
    console.log(key, auto[key], _typeof(auto[key]));

    if (typeof auto[key] !== "function") {
      rez += "<li><b>".concat(key, ":</b>").concat(auto[key], "</li>");
    }
  }

  rez += '</ul>';
  document.getElementById("car_info").innerHTML = rez;
}

carInfo(car);
car2.setSpeed(300);
console.log(car2.getSpeed());

function getSkorost() {
  var s_fld = document.getElementById("speed").value;
  var s = s_fld !== "" ? parseInt(s_fld) : 0;
  car2.setSpeed(s);
  s_fld = "";
  topPanel.success("Speed updated"); // alert(car2.getSpeed());
}

var topPanel = {
  info: function info() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.showPanel(text, 'info', autoclose);
  },
  success: function success() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.showPanel(text, 'success', autoclose);
  },
  danger: function danger() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.showPanel(text, 'danger', autoclose);
  },
  warning: function warning() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.showPanel(text, 'warning', autoclose);
  },
  showPanel: function showPanel(text, type, autoclose) {
    var btn = autoclose ? '' : "<button onclick=\"topPanel.closePanel()\">&times;</button>";
    var h = "<div id=\"top_panel\" class=\"panel_info\">\n        <p>".concat(text, "</p>").concat(btn, "</div>");

    if (document.getElementById("top_panel") !== null) {
      this.closePanel();
    }

    document.getElementsByTagName("body")[0].insertAdjacentHTML('afterbegin', h);

    if (autoclose) {
      var _this = this;

      setTimeout(function () {
        _this.closePanel();
      }, 3000);
    }
  },
  closePanel: function closePanel() {
    document.getElementById("top_panel").remove();
  }
}; // topPanel.success("fefef ef efefwf", false);

function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myArr = [];

function fillArr() {
  var qty = 10,
      min = 1,
      max = 100;

  for (var i = 0; i < qty; i++) {
    myArr.push(getRand(min, max));
  }

  console.log(myArr);
  printArr(myArr);
}

function printArr(arr) {
  var r = arr.join(', '); // for(let i = 0; i < arr.length;i++){
  //     r += arr[i]+' ';
  // }

  document.getElementById("my_array").innerText = r;
}

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    var countArray = countup(n - 1);
    countArray.unshift(n);
    return countArray;
  }
}

countup(5);