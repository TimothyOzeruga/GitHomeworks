"use strict";

/* 1 */
function summ() {
  var a = parseInt(document.getElementById("first_number").value);
  var b = parseInt(document.getElementById("last_number").value);
  var rez = 0;

  if (a <= b) {
    // let rez = a;
    // while( a < b){
    //     a++;
    //     rez += a;
    // }
    while (a <= b) {
      rez += a;
      a++;
    }
  } else {
    alert("first number > second number");
  }

  document.getElementById("summ_rez").innerText = rez;
}
/* 2 */


function divider1(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  if (b > a) {
    var temp = a;
    a = b;
    b = temp;
  }

  while (true) {
    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;
  }
}

function divider() {
  var a = parseInt(document.getElementById("number1").value);
  var b = parseInt(document.getElementById("number2").value);
  var rez = divider1(a, b);
  document.getElementById("divider_rez").innerText = rez;
}
/* 3 */


function dividerr() {
  var a = parseInt(document.getElementById("numberr").value);
  rez = '';

  for (i = 1; i <= a; i++) {
    if (a % i == 0) {
      rez += i + ', ';
    }
  }

  document.getElementById("dividerr_rez").innerText = rez;
}
/* 4 */


function getDigitAmount(c) {
  return c.length;
}

function digitsNumber() {
  var a = document.getElementById("big_number").value;
  var rez = "\u0412 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u043E\u043C \u0447\u0438\u0441\u043B\u0435 ".concat(getDigitAmount(a), " \u0446\u0438\u0444\u0440");
  document.getElementById("big_number_rez").innerText = rez;
}
/* 5 */


function countNumber() {
  minusNumber = 0;
  plusNumber = 0;
  zero = 0;
  oddNumber = 0;
  evenNumber = 0;

  for (i = 0; i < 10; i++) {
    var a = +prompt('Enter number 10 numbers');

    if (a > 0) {
      plusNumber++;
    } else if (a < 0) {
      minusNumber++;
    } else if (a === null) {
      break;
    } else {
      zero++;
    }

    if (a % 2 == 0) {
      evenNumber++;
    } else if (a % 2 != 0) {
      oddNumber++;
    }
  }

  alert("plus numbers: ".concat(plusNumber, " \n negative numbers: ").concat(minusNumber, " \n zero: ").concat(zero, "\n    \n odd numbers: ").concat(oddNumber, "\n even numbers: ").concat(evenNumber));
}
/* 6 */


function culc() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "+";
  a = parseInt(a);
  b = parseInt(b);

  switch (action) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;

    case '/':
      return a / b;

    default:
      return false;
  }
}

function myCulc() {
  var a = +prompt('Введите первое число');
  var b = +prompt('Введите второе число');
  var act = prompt('Выберете знак - + / *');
  var rez = culc(a, b, act);

  if (!rez && rez !== 0) {
    rez = 'Incorrect action';
  }

  if (act) {
    alert(rez);

    if (confirm('Хотите ли вы решить еще один пример?')) {
      myCulc();
    }
  }
}
/* 7 */


function shiftNumber() {
  var str = document.getElementById("n1").value;
  var k = document.getElementById("n2").value;
  var rez = str.slice(k) + str.slice(0, k);
  document.getElementById("shiftNumber_rez").innerText = rez;
}
/* 8 */


function currentDay() {
  var myDate = new Date();
  var days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  var currentDate = days[myDate.getDay()];
  var i = 0;

  while (confirm("".concat(currentDate, ". \u0425\u043E\u0442\u0438\u0442\u0435 \u0443\u0432\u0438\u0434\u0435\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0434\u0435\u043D\u044C?"))) {
    currentDate = days[(myDate.getDay() + ++i) % 7];
  }
}
/* 9 */


function multyTable() {
  var html = '';

  for (var _i = 0; _i <= 10; _i++) {
    html += "\n      <div class=\"item\"\">\n          <ul>";

    for (var j = 1; j <= 10; j++) {
      html += "<li>".concat(_i, "*").concat(j, " = ").concat(_i * j, "</li>");
    }

    html += "</ul>\n       </div>";
  }

  document.getElementById("mt_wrap").innerHTML = html;
}
/* 10 */


function guessNumber() {
  alert("Загадайте число от 0 до 100");
  var from = 0;
  var to = 100;
  var middle = (to - from) / 2 + from;
  var quest = '';

  while (quest !== "=") {
    quest = prompt("\u0412\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E \u0431\u043E\u043B\u044C\u0448\u0435, \u043C\u0435\u043D\u044C\u0448\u0435 \u0438\u043B\u0438 \u0440\u0430\u0432\u043D\u043E ".concat(middle, "?\n        \u0412\u0432\u0435\u0434\u0438\u0442\u0435 <, >, ="));

    if (quest === ">") {
      from = Math.floor((to + from) / 2);
      middle = Math.floor((to - from) / 2 + from);
    } else if (quest === "<") {
      to = Math.floor((to + from) / 2);
      middle = Math.floor((to - from) / 2 + from);
    } else if (quest === "=") {
      alert("Congratilation, you won!!!");
    } else if (quest === null) {
      break;
    } else {
      alert("enter right symbols");
    }
  }
}