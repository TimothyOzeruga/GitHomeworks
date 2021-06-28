"use strict";

/* 1 */
var myAutoo = {
  производитель: "Audi",
  модель: "A5",
  "год выпуска": "2015",
  "средняя скорость": 160
};

function printAutoo() {
  var h = '<ul>';

  for (var k in myAutoo) {
    h += "<li><b>".concat(k, ": </b>").concat(myAutoo[k], "</li>");
  }

  h += '</ul>';
  document.getElementById("rez").innerHTML = h;
}

printAutoo();

function DistanceSpeed(distance) {
  var hours = distance / myAutoo["средняя скорость"];

  for (var i = 1; i <= hours; i++) {
    if (i % 4 == 0) {
      hours++;
    }
  }

  var rezz = "".concat(distance, "km \u0432\u044B \u043F\u0440\u043E\u0435\u0434\u0435\u0442\u0435 \u0437\u0430 ").concat(hours.toFixed(1), " \u0447\u0430\u0441\u043E\u0432");
  return rezz;
}

function printDistanceSpeed() {
  debugger;
  var k = parseInt(document.getElementById("number").value);
  var rez = DistanceSpeed(k);
  document.getElementById("rezzz").innerText = rez;
}
/* 2 */


var fraction = {
  numerator1: 6,
  denominator1: 10,
  numerator2: 4,
  denominator2: 8
};

function printFraction() {
  var h = '<ul>';

  for (var k in fraction) {
    h += "<li><b>".concat(k, ": </b>").concat(fraction[k], "</li>");
  }

  h += '</ul>';
  document.getElementById("rez3").innerHTML = h;
}

printFraction();
/* * */

function multiFraction() {
  var numerator = fraction.numerator1 * fraction.numerator2;
  var denominator = fraction.denominator1 * fraction.denominator2;
  var rez = '';
  var n = numerator,
      d = denominator;

  for (var i = 2; i <= numerator; i++) {
    rez = "".concat(n, "/").concat(d);

    if (numerator % i === 0 && denominator % i === 0) {
      n = numerator / i, d = denominator / i;
      rez = "".concat(n, "/").concat(d);
    }
  }

  document.getElementById("multiFraction_rez").innerHTML = rez;
}
/* / */


function divisionFraction() {
  var numerator = fraction.numerator1 * fraction.denominator2;
  var denominator = fraction.denominator1 * fraction.numerator2;
  var rez = '';
  var n = numerator,
      d = denominator;

  for (var i = 2; i <= numerator; i++) {
    rez = "".concat(n, "/").concat(d);

    if (numerator % i === 0 && denominator % i === 0) {
      n = numerator / i, d = denominator / i;
      rez = "".concat(n, "/").concat(d);
    }
  }

  document.getElementById("divisionFraction_rez").innerHTML = rez;
}
/* + */


function additionFraction() {
  var d1 = fraction.denominator1,
      d2 = fraction.denominator2,
      n1 = fraction.numerator1,
      n2 = fraction.numerator2;
  var rez = '';

  for (var i = 1; i <= d1 * d2; i++) {
    if (i % d1 === 0 && i % d2 === 0) {
      var denominatorr = i;
      var a = denominatorr / d1;
      var b = denominatorr / d2;
      var numeratorr1 = a * n1;
      var numeratorr2 = b * n2;
      var numeratorr = numeratorr1 + numeratorr2;
      var n = numeratorr,
          d = denominatorr;

      for (var _i = 2; _i <= numeratorr; _i++) {
        rez = "".concat(n, "/").concat(d);

        if (numeratorr % _i === 0 && denominatorr % _i === 0) {
          n = numeratorr / _i, d = denominatorr / _i;
          rez = "".concat(n, "/").concat(d);
        }
      }
    }
  }

  document.getElementById("additionFraction_rez").innerHTML = rez;
}
/* - */


function subtractionFraction() {
  var d1 = fraction.denominator1,
      d2 = fraction.denominator2,
      n1 = fraction.numerator1,
      n2 = fraction.numerator2;
  var rez = '';

  for (var i = 1; i <= d1 * d2; i++) {
    if (i % d1 === 0 && i % d2 === 0) {
      var denominatorr = i;
      var a = denominatorr / d1;
      var b = denominatorr / d2;
      var numeratorr1 = a * n1;
      var numeratorr2 = b * n2;
      var numeratorr = numeratorr1 - numeratorr2;
      var n = numeratorr,
          d = denominatorr;

      for (var _i2 = 2; _i2 <= numeratorr; _i2++) {
        rez = "".concat(n, "/").concat(d);

        if (numeratorr % _i2 === 0 && denominatorr % _i2 === 0) {
          n = numeratorr / _i2, d = denominatorr / _i2;
          rez = "".concat(n, "/").concat(d);
        }
      }
    }
  }

  document.getElementById("subtractionFraction_rez").innerHTML = rez;
}
/* 3 */


var time = {
  hours: 13,
  minutes: 34,
  seconds: 22
};

function printTime() {
  var h = '<ul>';

  for (var k in time) {
    h += "<li><b>".concat(k, ": </b>").concat(time[k], "</li>");
  }

  h += '</ul>';
  var rez = hoursMinSec(time.hours, time.minutes, time.seconds);
  document.getElementById("rez4").innerHTML = h;
  document.getElementById("rez5").innerHTML = rez;
}

printTime();

function addZero(n) {
  return n < 10 ? '0' + n : n;
}

function hoursMinSec() {
  var h = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  h = addZero(h);
  m = addZero(m);
  s = addZero(s);
  return h + ':' + m + ':' + s;
}
/* seconds */
// function addSeconds(a){
//     let h = 0;
//     let m = 0;
//     let s = 0;
//     let newS = a+s;
//     let rez = '';
//     if(newS<60){
//         return rez = hoursMinSec(h,m,newS)
//     } else {
//         m += parseInt(newS/60);
//         s = newS%60;
//         if(m>=60){
//             h += parseInt(m/60);
//             m = m%60;
//         }
//         return rez = hoursMinSec(h,m,s);
//     }
// }


function addSeconds(a) {
  debugger;
  var h = time.hours;
  var m = time.minutes;
  var s = time.seconds;
  var newS = a + s;
  var rez = '';

  if (newS < 60) {
    return rez = hoursMinSec(h, m, newS);
  } else {
    m += parseInt(newS / 60);
    s = newS % 60;

    if (m >= 60) {
      h += parseInt(m / 60);
      m = m % 60;
    }

    return rez = hoursMinSec(h, m, s);
  }
}

function printAddSeconds() {
  var s = parseInt(document.getElementById("seconds").value);
  var rez = addSeconds(s);
  document.getElementById("rez6").innerHTML = rez;
}
/* minutes */


function addMinutes(a) {
  var h = time.hours;
  var m = time.minutes;
  var s = time.seconds;
  var newM = a + m;
  var rez = '';

  if (newM <= 60) {
    return rez = hoursMinSec(h, newM, s);
  } else {
    h += parseInt(newM / 60);
    m = newM % 60;
    return rez = hoursMinSec(h, m, s);
  }
}

function printAddMinutes() {
  var s = parseInt(document.getElementById("minutes").value);
  var rez = addMinutes(s);
  document.getElementById("rez7").innerHTML = rez;
}
/* hours */


function addHours(a) {
  var h = time.hours;
  var m = time.minutes;
  var s = time.seconds;
  var newH = a + h;
  var rez = '';
  return rez = hoursMinSec(newH, m, s);
}

function printAddHours() {
  var s = parseInt(document.getElementById("hours").value);
  var rez = addHours(s);
  document.getElementById("rez8").innerHTML = rez;
}