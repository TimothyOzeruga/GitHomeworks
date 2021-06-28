"use strict";

function nextDate() {
  var date = '31/12/2020';
}

function addZero(n) {
  return n < 10 ? '0' + n : n;
}

function isLeapYear(year) {
  if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else {
    return false;
  }
}

function checkYear() {
  var y = parseInt(document.getElementById("year_number").value);
  var rez = 'Year is not leap';

  if (isLeapYear(y)) {
    rez = 'Year is leap';
  }

  document.getElementById('year_rez').innerText = rez;
}

function mySumm(a, b) {
  return a + b;
}

function culc() {
  var number1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var number2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "+";
  number1 = parseInt(number1);
  number2 = parseInt(number2);

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
  var a = document.getElementById("f_number").value;
  var b = document.getElementById("s_number").value;
  var act = document.getElementById("action").value;
  var rez = culc(a, act, b);

  if (!rez && rez !== 0) {
    rez = 'Incorrect action';
  }

  document.getElementById("culc_rez").innerText = rez;
}