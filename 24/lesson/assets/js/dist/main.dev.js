"use strict";

function go() {
  var number = parseInt(prompt("enter number")),
      rez = addZero(number);
  alert(rez);
} // function addZero(n){
//     if (n>=0 && n<=9){
//         n = "0" + n;
//     } else {
//         n=n;
//     }
//     return n;
// }


function addZero(n) {
  return n < 10 ? "0" + n : n;
  ;
}
/* Lesson */


function text() {
  var t = document.getElementById("my_text").value; // document.getElementById("text_rez").innerText = 'Hello '+t+'!';

  document.getElementById("text_rez").innerHTML = "<p>\n        Welcome! <br>\n        Hello, <b>".concat(t, "</b>\n    </p>");
}
/* 1 */


function diez() {
  var n = parseInt(document.getElementById("diez_number").value);

  if (n != 0 && !isNaN(n) && n > 0) {
    var rez = '';
    var i = 0;

    while (i < n) {
      i++; // rez = rez + '#';

      rez += '#';
    }

    document.getElementById("diez_rez").innerText = rez;
  } else {
    alert("enter diez number");
  }
}
/*  2 */


function reverse() {
  debugger;
  var n = parseInt(document.getElementById("reverse_number").value);

  if (n != 0 && !isNaN(n) && n > 0) {
    var rez = '';

    while (n > 0) {
      rez += n + ", ";
      n--;
    }

    document.getElementById("reverse_rez").innerText = rez;
  } else {
    alert("enter number");
  }
}
/* 3 */


function pow() {
  var n = parseInt(document.getElementById("pow_number").value); //2

  var s = parseInt(document.getElementById("pow_stepen").value); //3  

  var valid = true;
  var errMsg = ''; // if(!isNaN(n)){
  //     errMsg += "enter number!";
  //     valid = false;  
  // } 
  // if(!isNaN(s)){
  //     errMsg += " enter stepen!";
  //     valid = false;  
  // } 

  if (valid) {
    // 2 * 2 * 2 
    var rez = n;
    var i = 1;

    while (i < s) {
      rez = rez * n;
      i++;
    }

    if (s < 0) {
      rez = 1 / rez;
    }

    document.getElementById("pow_rez").innerText = rez; //8
  } else {
    document.getElementById("pow_rez").innerHTML = "<span class=\"text-danger\">".concat(errMsg, "</span>");
  }
}
/* 4 */