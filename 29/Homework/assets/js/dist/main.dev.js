"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 1 */
var Circlee = new Circle(8);
console.log(Circlee);
console.log(Circlee.radiusInfo);
document.getElementById("radiusInfo").innerText = "\u0420\u0430\u0434\u0438\u0443\u0441 \u043E\u043A\u0443\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438 = ".concat(Circlee.radiusInfo);
console.log(Circlee.diametrInfo);
document.getElementById("diametrInfo").innerText = "\u0414\u0438\u0430\u043C\u0435\u0442\u0440 \u043E\u043A\u0443\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438 = ".concat(Circlee.diametrInfo);
console.log(Circlee.circleArea());
document.getElementById("circleArea").innerText = "\u041F\u043B\u043E\u0449\u0430\u0434\u044C \u043E\u043A\u0443\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438 = ".concat(Circlee.circleArea());
console.log(Circlee.circumference());
document.getElementById("circumference").innerText = "\u0414\u043B\u0438\u043D\u0430 \u043E\u043A\u0443\u0440\u0443\u0436\u043D\u043E\u0441\u0442\u0438 = ".concat(Circlee.circumference());
/* 2 */

var Marker =
/*#__PURE__*/
function () {
  function Marker(color, quantity) {
    _classCallCheck(this, Marker);

    this.color = color;
    this.quantity = quantity;
  }

  _createClass(Marker, [{
    key: "print",
    value: function print(line) {
      var t = document.getElementById("text");
      var ti = document.getElementById("text_info");

      for (var i = 0; i < line.length; i++) {
        if (this.quantity != 0) {
          if (line[i] == " ") {
            this.quantity += 0.5;
          }

          t.innerHTML += line[i];
          t.style.color = this.color;
          this.quantity -= 0.5;
        } else {
          ti.innerText += "Marker is over";
          break;
        }
      }
    }
  }]);

  return Marker;
}();

var FilledMarker =
/*#__PURE__*/
function (_Marker) {
  _inherits(FilledMarker, _Marker);

  function FilledMarker() {
    _classCallCheck(this, FilledMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(FilledMarker).apply(this, arguments));
  }

  _createClass(FilledMarker, [{
    key: "fill",
    value: function fill(p) {
      if (p > 100) {
        p = 100;
      } else {
        this.p += p;
      }
    }
  }]);

  return FilledMarker;
}(Marker);

var marker = new FilledMarker("#0f0", 20);
marker.print("List of Software Inc. workers with names, positions, departments, salaries. Best Regards Jeremy Clarkson - HR Manager of the HR Department Lorem ipsum rake a repoes");
/* 3 */

var Employee = function Employee(name, position, department, salary) {
  _classCallCheck(this, Employee);

  this.name = name;
  this.position = position;
  this.department = department;
  this.salary = salary;
};

var WorkersList = [new Employee("John Smith", "Manager", "Sales", 2500), new Employee("Bill Agent", "Frontend developer", "Developers", 4000), new Employee("Ivan Rudskoy", "Backend developer", "Developers", 4000), new Employee("Jeck Ward", "QA", "Testers", 3500)];

var EmpTable =
/*#__PURE__*/
function () {
  function EmpTable(arr) {
    _classCallCheck(this, EmpTable);

    this.arr = arr;
  }

  _createClass(EmpTable, [{
    key: "getHtml",
    value: function getHtml() {
      var table = document.getElementById("table");
      var heading_tr = document.createElement("tr");
      table.append(heading_tr);
      var th1 = document.createElement("th");
      th1.innerText = "Name";
      var th2 = document.createElement("th");
      th2.innerText = "Position";
      var th3 = document.createElement("th");
      th3.innerText = "Department";
      var th4 = document.createElement("th");
      th4.innerText = "Salary";
      heading_tr.append(th1);
      heading_tr.append(th2);
      heading_tr.append(th3);
      heading_tr.append(th4); // for(let i=0; i<=this.arr.length; i++){
      //     let main_tr = document.createElement("tr");
      //     table.append(main_tr)
      //     for(let j=0; j<=this.arr[i].length; j++){
      //         let td = document.createElement("td");
      //         td.textContent = this.arr[i][j];
      //         main_tr.append(td);
      //     }
      // }

      var arr_th = ["Name", "Position", "Department", "Salary"];

      for (var i in this.arr) {
        var main_tr = document.createElement("tr");
        table.append(main_tr);

        for (var j in this.arr[i]) {
          var td = document.createElement("td");
          td.textContent = this.arr[i][j];
          main_tr.append(td);
        }
      }
    }
  }]);

  return EmpTable;
}();

var Workers = new EmpTable(WorkersList);
Workers.getHtml();