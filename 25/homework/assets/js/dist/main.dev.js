"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* 1 */
function checkNumber() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
}

function twoNumber() {
  var a = parseInt(document.getElementById("first_number").value);
  var b = parseInt(document.getElementById("second_number").value);
  var rez = checkNumber(a, b);
  document.getElementById('twoNumber_rez').innerText = rez;
}
/* 2 */


function factorial() {
  var a = parseInt(document.getElementById("n").value);
  var rez = 1;
  var i = 1;

  while (i <= a) {
    rez *= i;
    i++;
  }

  document.getElementById('factorial_rez').innerText = rez;
}
/* 3 */


function threeNumber() {
  var a = parseInt(document.getElementById("fir_number").value);
  var b = parseInt(document.getElementById("sec_number").value);
  var c = parseInt(document.getElementById("thi_number").value);
  var rez = a * 100 + b * 10 + c;
  document.getElementById('threeNumber_rez').innerText = rez;
}
/* 4 */
// function rectangleArea(a,b){
//     return(a*b);
// }


function rectangle() {
  var a = parseInt(document.getElementById("rectangle_number").value);
  var b = parseInt(document.getElementById("rectangle_number2").value); // let a = document.getElementById("rectangle_number").value;
  // let b = document.getElementById("rectangle_number2").value;

  var rez = 0;

  if (_typeof(a) === undefined) {
    rez += b * b;
  } else if (_typeof(b) === undefined) {
    rez += a * a;
  } else {
    rez += a * b;
  }

  document.getElementById('rectangle_rez').innerText = rez;
}
/* 5 */


function isPerfect(a) {
  var count = 0;
  var rez = '';

  for (i = 0; i < a; i++) {
    if (a % i === 0) {
      count += i;
    }
  }

  if (count === a && a !== 0) {
    return rez += 'It is a perfect number';
  } else {
    return rez += 'It is not a perfect number';
  }
}

function perfectNumber() {
  var a = parseInt(document.getElementById("perfect_number").value);
  var rez = isPerfect(a);
  document.getElementById('perfect_number_rez').innerText = rez;
}
/* 6 */


function isPerfectt(a) {
  var count = 0;
  var rez = '';

  for (i = 0; i < a; i++) {
    if (a % i === 0) {
      count += i;
    }
  }

  return count === a && a !== 0;
}

function searchPerfect() {
  var a = parseInt(document.getElementById("min_number").value);
  var b = parseInt(document.getElementById("max_number").value);
  var rez = '';

  for (i = a; i < b; i++) {
    if (isPerfectt(i)) {
      rez += i + ', ';
    }
  }

  document.getElementById('searchPerfect_rez').innerText = rez;
}
/* 7 */


function addZero(n) {
  return n < 10 ? '0' + n : n;
}

function timee() {
  var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  h = addZero(h);
  m = addZero(m);
  s = addZero(s);
  return h + ':' + m + ':' + s;
}

function time() {
  debugger;
  var h = document.getElementById("hours").value;
  var m = document.getElementById("minutes").value;
  var s = document.getElementById("seconds").value;
  var rez;

  if (m === '' && s === '') {
    m += '0';
    s += '0';
  } else if (m !== '' && s === '') {
    s += '0';
  } else if (m === '' && s !== '') {
    m += '0';
  }

  rez = timee(h, m, s);
  document.getElementById('time_rez').innerText = rez;
}
/* 8 */


function toSecondss(h, m, s) {
  return h * 3600 + m * 60 + s;
}

function toSeconds() {
  var h = parseInt(document.getElementById("hourss").value);
  var m = parseInt(document.getElementById("minutess").value);
  var s = parseInt(document.getElementById("secondss").value);
  var rez = toSecondss(h, m, s);
  document.getElementById('toSeconds_rez').innerText = rez;
}
/* 9 */


function secondsToTimee(difference) {
  var hours = parseInt(difference / 3600);
  difference %= 3600;
  var minutes = parseInt(difference / 60);
  var seconds = difference % 60;
  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);
  return hours + ":" + minutes + ":" + seconds;
}

function secondsToTime() {
  var s = parseInt(document.getElementById("sec").value);
  var rez = secondsToTimee(s);
  document.getElementById('secondsToTime_rez').innerText = rez;
}
/* 10 */


function timeСomparison() {
  debugger;
  var h1 = parseInt(document.getElementById("1hours").value);
  var m1 = parseInt(document.getElementById("1minutes").value);
  var s1 = parseInt(document.getElementById("1seconds").value);
  var h2 = parseInt(document.getElementById("2hours").value);
  var m2 = parseInt(document.getElementById("2minutes").value);
  var s2 = parseInt(document.getElementById("2seconds").value);
  var seconds1 = toSecondss(h1, m1, s1);
  var seconds2 = toSecondss(h2, m2, s2);
  var difference = seconds1 - seconds2;
  var rez = secondsToTimee(difference);
  document.getElementById('timeСomparison_rez').innerText = rez;
}