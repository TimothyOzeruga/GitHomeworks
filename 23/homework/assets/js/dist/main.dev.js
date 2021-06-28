"use strict";

function age() {
  var a = parseInt(prompt("Enter your age"));

  if (a > 0 && a <= 12) {
    alert("child");
  } else if (a > 12 && a <= 18) {
    alert("teenager");
  } else if (a > 18 && a <= 60) {
    alert("adult");
  } else if (a > 60) {
    alert("pensioner");
  } else {
    alert("incorrect value");
  }
}

function keyBoard() {
  var numberr = parseInt(prompt("enter number from 1 to 9"));
  var number = '';

  switch (numberr) {
    case 1:
      number = '!';
      break;

    case 2:
      number = '@';
      break;

    case 3:
      number = '#';
      break;

    case 4:
      number = '$';
      break;

    case 5:
      number = '%';
      break;

    case 6:
      number = '^';
      break;

    case 7:
      number = '&';
      break;

    case 8:
      number = '*';
      break;

    case 9:
      number = '(';
      break;

    default:
      number = 'Enter valid number';
      break;
  }

  alert(number);
}

function threeDigitalNumber() {
  var number = parseInt(prompt('enter a three-digit number')),
      number1 = parseInt(number / 100),
      number2 = parseInt(number / 10) % 10,
      number3 = number % 10;

  if (number1 == number2 || number2 == number3 || number1 == number3) {
    alert('Match numbers found');
  } else {
    alert('No matches found');
  }
}

function leapYear() {
  var year = parseInt(prompt('enter year'));

  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    alert('leap year');
  } else {
    alert("not a leap year");
  }
}

function palindrome() {
  var number = parseInt(prompt('enter a five-digit number')),
      a = parseInt(number / 10000),
      b = parseInt(number % 10000 / 1000),
      c = parseInt(number % 1000 / 100),
      d = parseInt(number % 100 / 10),
      e = parseInt(number % 10);

  if (a == e && b == d) {
    alert('palindrome');
  } else {
    alert('not a palindrome');
  }
}

function convert() {
  var dollars = parseFloat(prompt('enter dollars')),
      currency = prompt('enter EUR, UAH or AZN');

  if (currency == "EUR") {
    rez = dollars * 0.83;
    alert("EUR => ".concat(rez));
  } else if (currency == "UAH") {
    rez = dollars * 28;
    alert("UAH => ".concat(rez));
  } else if (currency == "AZN") {
    rez = dollars * 1.70;
    alert("AZN => ".concat(rez));
  } else {
    alert("invalid currency");
  }
}

function purchase() {
  var amount = parseFloat(prompt('enter a purchase amount'));

  if (amount >= 200 && amount < 300) {
    rez = amount - amount * 0.03;
    alert(rez);
  } else if (amount >= 300 && amount < 500) {
    rez = amount - amount * 0.05;
    alert(rez);
  } else if (amount >= 500) {
    rez = amount - amount * 0.07;
    alert(rez);
  } else {
    alert("enter number >= 200");
  }
}

function circleSquare() {
  var circumference = parseFloat(prompt('enter a circumference')),
      perimeterSquare = parseFloat(prompt('enter perimeter of a square')),
      d = circumference / Math.PI;
  a = perimeterSquare / 4;

  if (a > d) {
    alert("a circle can fit into a square");
  } else {
    alert("a circle can't fit into a square");
  }
}

function questions() {
  var question1 = parseInt(prompt('2+2 = \r 1) 3 \r 2) 4 \r 3) 5')),
      question2 = parseInt(prompt('3+3 = \r 1) 6 \r 2) 8 \r 3) 9')),
      question3 = parseInt(prompt('7+2 = \r 1) 8 \r 2) 9 \r 3) 10'));
  a = 0;

  if (question1 == 2 && question2 == 1 && question3 == 2) {
    rez = a + 6;
    alert("Your result => ".concat(rez));
  } else if (question1 == 2 && question2 == 1 && question3 != 2) {
    rez = a + 4;
    alert("Your result => ".concat(rez));
  } else if (question1 != 2 && question2 == 1 && question3 == 2) {
    rez = a + 4;
    alert("Your result => ".concat(rez));
  } else if (question1 == 2 && question2 != 1 && question3 != 2) {
    rez = a + 2;
    alert("Your result => ".concat(rez));
  } else if (question1 != 2 && question2 == 1 && question3 != 2) {
    rez = a + 2;
    alert("Your result => ".concat(rez));
  } else if (question1 != 2 && question2 != 1 && question3 == 2) {
    rez = a + 2;
    alert("Your result => ".concat(rez));
  } else {
    rez = a;
    alert("Your result => ".concat(rez));
  }
}

function checkNumber() {
  var a = parseInt(prompt("Enter number"));

  if (a > 0) {
    alert("+");
  } else if (a < 0) {
    alert("-");
  } else if (a == 0) {
    alert("zero");
  } else {
    alert("not a number");
    checkNumber();
  }
}

function checkAge() {
  var a = parseFloat(prompt("Enter your age"));

  if (a > 0 && a <= 120) {
    alert("valid");
  } else {
    alert("invalid number");
  }
}

function abs() {
  var a = parseFloat(prompt("Enter number"));

  if (function (a) {
    return 0;
  }) {
    alert(a);
  } else if (a <= 0) {
    a = a * -1;
    alert(a);
  } else {
    alert('invalid number');
  }
}

function time() {
  var t = prompt("Enter time, format hh:mm:ss"),
      arrT = t.split(":"),
      h = parseInt(arrT[0]),
      m = parseInt(arrT[1]),
      s = parseInt(arrT[2]);

  if (isNaN(h) || isNaN(m) || isNaN(s)) {
    alert('Enter valid time');
  } else if (h >= 0 && h < 24 || m >= 0 && m < 60 || s >= 60 && s < 60) {
    alert("time valid");
  } else {
    alert('invalid time');
  }
}

function monthName() {
  var mNumber = parseInt(prompt("enter month"));
  var monthName = '';

  switch (mNumber) {
    case 1:
      monthName = 'January';
      break;

    case 2:
      monthName = 'Febrary';
      break;

    case 3:
      monthName = 'March';
      break;

    default:
      monthName = 'Enter valid month Number';
      break;
  }

  alert(monthName);
}

function maxNumber() {
  var a = parseInt(prompt("enter number 1")),
      b = parseInt(prompt("enter number 2"));
  var rez = a > b ? a : b; // if(a>b){
  //     rez = a;
  // }else{
  //     rez = b;
  // }

  alert(rez);
}

function Kratnoe5() {
  var a = parseInt(prompt("enter number 1"));
  var rez = a % 5 == 0 ? 'кратно' : 'не кратно';
  alert(rez);
}