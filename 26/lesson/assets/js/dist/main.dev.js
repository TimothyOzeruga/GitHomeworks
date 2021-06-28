"use strict";

var _cart;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function myFunc(a) {
  console.log(a);
  a += 5;

  if (a < 30) {
    return myFunc(a);
  } else {
    return a;
  }
}

var r = myFunc(5); // alert(r);

/* Objects */

var foo = new Object();
var a = "foo",
    b = "bar";
var cart = (_cart = {
  "Bread": 1,
  Milk: 2,
  "beer hike": 10
}, _defineProperty(_cart, a + '_' + b, "FUUUUUU!"), _defineProperty(_cart, a, "my string"), _defineProperty(_cart, "list", {
  a: 333,
  b: 222
}), _cart);
cart["butter"] = 1;
cart[b] = "my bar";
cart.Bread = null; // if(typeof cart.Milk !== "undefined"){
//     alert("Property exist");
// }else{
//     alert("No");
// }
// if(cart.hasOwnProperty("Milk")===false){
//     alert("Property exist")
// }

/* For In */

function printCart() {
  var h = '<ul>';

  for (var k in cart) {
    h += "<li><b>".concat(k, ": </b>").concat(cart[k], "</li>");
  }

  h += '</ul>';
  document.getElementById("rez").innerHTML = h;
}

printCart();

function addInCart(title, qty) {
  cart[title] = qty;
  printCart();
}

function removeFromCart(title) {
  delete cart[title];
  printCart();
}

var cartNew = {}; // for(let k in cart){
//     cartNew[k] = cart[k];
// }
// cartNew = Object.assign({}, cart)

cartNew = JSON.parse(JSON.stringify(cart));
cartNew.Milk = 1000;
cartNew.list.a = 444;
var loader = {
  hide: function hide() {
    document.getElementById("loader").style.display = "none";
  },
  show: function show() {
    document.getElementById("loader").style.display = "flex";
  }
};
loader.show();
var myCart = {
  "Bread": {
    "price": 12.5,
    "qty": 1
  },
  "Milk": {
    "price": 22.00,
    "qty": 2
  },
  get: function get(k) {
    return this[k].qty;
  },
  set: function set(k, new_qty) {
    this[k].qty = new_qty;
  }
};
console.log(myCart.get("Bread"));