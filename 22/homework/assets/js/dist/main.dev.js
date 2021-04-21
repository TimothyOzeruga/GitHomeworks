"use strict";

function yourName() {
  var yourName = prompt("enter your name");
  alert("Hello, ".concat(yourName));
}

function Age() {
  var birthdayDate = parseInt(prompt("enter your birthday date")),
      rez = 2021 - birthdayDate;
  alert("your age - ".concat(rez));
}

function perimetr() {
  var length = parseFloat(prompt("enter length")),
      perimeter = 4 * length;
  alert("perimetr = ".concat(perimeter));
}

function circleArea() {
  var length = parseFloat(prompt("enter radius")),
      area = Math.PI * Math.pow(length, 2);
  alert("Area of circle = ".concat(area));
}

function trip() {
  var distance = parseFloat(prompt("enter km")),
      time = parseInt(prompt("enter time")),
      rez = distance / time;
  alert("to arrive on time you have to move at that speed => ".concat(rez, " km"));
}

function converter() {
  var k = 0.83;
  var dollar = parseFloat(prompt("enter dollars")),
      rez = k * dollar;
  alert("Euro = ".concat(rez));
}

function flashDrive() {
  var number = parseInt(prompt("enter storage of flash drive")),
      file = 820;
  gigabyte = number * 1024;
  rez = (gigabyte - gigabyte % file) / file;
  alert("You can save ".concat(rez, " files on the flash drive"));
}

function chocolate() {
  var money = parseFloat(prompt("enter amount of money")),
      price = parseFloat(prompt("enter price of chocolate"));
  chocolatte = (money - money % price) / price;
  rest = money % price;
  alert("You can buy ".concat(chocolatte, " chocolates; rest of money => ").concat(rest));
}

function backToFront() {
  var number = parseInt(prompt("enter three-digit number")),
      firstNumber = parseInt(number % 10) * 100,
      secondNumber = parseInt(parseInt(number % 100) / 10) * 10;
  thirdNumber = parseInt(number / 100);
  rez = firstNumber + secondNumber + thirdNumber;
  alert("".concat(number, " => ").concat(rez));
}

function bank() {
  var amount = parseFloat(prompt("enter amount of $"));
  month = amount * 0.05 / 12;
  rez = 2 * month;
  alert("Amount of percent for 2 month = ".concat(rez, "$"));
}