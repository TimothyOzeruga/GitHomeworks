"use strict";

var topPanel = {
  info: function info() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.showPanel(text, "info", autoclose);
  },
  success: function success() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    this.showPanel(text, "success", autoclose);
  },
  danger: function danger() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.showPanel(text, "danger", autoclose);
  },
  warning: function warning() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Some text here";
    var autoclose = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.showPanel(text, "warning", autoclose);
  },
  showPanel: function showPanel(text, type, autoclose) {
    var btn = autoclose ? "" : '<button onclick="topPanel.closePanel()>&times;</button>';
    var h = "<div id=\"top_panel\" class=\"panel_".concat(type, "\">\n          <p>").concat(text, "</p>").concat(btn, "<div></div>");

    if (document.getElementById("top_panel") !== null) {
      this.closePanel();
    }

    document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", h);

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
};
/*
{
    title:'',
    price:0.00,
    qty:0,
    buy:false
}
*/

var CART = [{
  title: 'milk',
  price: 21.23,
  qty: 2,
  buy: false
}, {
  title: 'beer',
  price: 35.28,
  qty: 3,
  buy: false
}];
var cartAction = {
  add: function add($prod) {
    $prod.buy = false;
    var isset_prod = CART.find(function (el) {
      if (el.title == $prod.title) {
        return el;
      }
    });

    if (isset_prod !== undefined) {
      var new_qty = $prod.qty + isset_prod.qty;
      var prod_ind = CART.findIndex(function (el) {
        return el.title === $prod.title;
      });
      CART[prod_ind].qty = new_qty;
      CART[prod_ind].buy = false;
    } else {
      CART.push($prod);
    }
  },
  buyed: function buyed(k) {
    if (CART[k].buy) {
      CART[k].buy = false;
    } else {
      CART[k].buy = true;
    }

    printCart();
  },
  remove: function remove(k) {
    if (!CART[k].buy) {
      if (confirm("Realy delete product?")) {
        // delete(CART[k]);
        CART.splice(k, 1);
        printCart();
      }
    } else {
      topPanel.warning('Product already buyed', true);
    }
  },
  maxTotal: function maxTotal() {
    var max_total = CART[0].price * CART[0].qty;

    for (var i = 1; i < CART.length; i++) {
      if (CART[i].price * CART[i].qty > max_total) {
        max_total = CART[i].price * CART[i].qty;
        max_key = i;
      }
    }

    return {
      title: CART[max_key].title,
      total: max_total
    };
  }
};

function addToCart() {
  var title = document.getElementById("prod_name").value;
  var price = parseFloat(document.getElementById("prod_price").value);
  var qty = parseInt(document.getElementById("prod_qty").value);
  var valid = true,
      errMsg = [];

  if (title === "") {
    valid = false;
    errMsg.push("Enter product name.");
  }

  if (isNaN(price) || price <= 0) {
    valid = false;
    errMsg.push("Enter product price.");
  }

  if (qty <= 0) {
    valid = false;
    errMsg.push("Enter product qty.");
  }

  if (valid) {
    cartAction.add({
      title: title,
      price: price,
      qty: qty
    });
    document.getElementById("prod_name").value = '';
    document.getElementById("prod_price").value = '';
    document.getElementById("prod_qty").value = '1';
    document.getElementById("prod_name").focus();
    printCart();
  } else {
    topPanel.warning(errMsg.join(' '), true);
  }
}

function maxTotalProduct() {
  var prod = cartAction.maxTotal();
  var rez = "\n    <p><b>".concat(prod.title, "</b> - ").concat(prod.total.toFixed(2), "</p>\n    ");
  document.getElementById("max_prod").innerHTML = rez;
}

function printCart() {
  var rez = '<ul>';
  var cart_total = 0;

  for (var i = 0; i < CART.length; i++) {
    var prod = CART[i];
    var is_buy = prod.buy ? '<span class="badge bg-success">&#10003;</span>' : '<span class="badge bg-danger">&times;</span>';
    var prod_total = prod.qty * prod.price;
    cart_total += prod_total;
    rez += "\n        <li class=\"mb-4\">\n           ".concat(is_buy, " <b>").concat(prod.title, "</b> ").concat(prod.qty, " x ").concat(prod.price.toFixed(2), " = ").concat(prod_total.toFixed(2), "<br>\n           <button type=\"button\" class=\"btn btn-info btn-sm mr-4\" onclick=\"cartAction.buyed(").concat(i, ")\">Buyed</button>\n           <button type=\"button\" class=\"btn btn-danger btn-sm\" onclick=\"cartAction.remove(").concat(i, ")\">Delete</button>\n        </li>");
  }

  rez += "<li><b>TOTAL: </b>".concat(cart_total.toFixed(2), "</li>");
  rez += "<li><b>Avg: </b>".concat((cart_total / CART.length).toFixed(2), "</li>");
  rez += '</ul>';
  document.getElementById("cart_list").innerHTML = rez;
}

printCart();
/* 3 */

document.write("<div><b>3.</b></div>");
var styles = [{
  name: "font-size",
  value: "35px"
}, {
  name: "color",
  value: "red"
}, {
  name: "font-family",
  value: "Arial"
}];

function styleText(arr, text) {
  document.write('<p style = "');

  for (var i in arr) {
    document.write(arr[i].name + ":" + arr[i].value + ";");
  }

  document.write('">' + text + "</p>");
}

;
styleText(styles, "dfekjkekfjekef");
/* 4 */

var CLASSES = [{
  name: "Math Class",
  seats: 18,
  faculty: "FAIT"
}, {
  name: "English Class",
  seats: 12,
  faculty: "EFAR"
}, {
  name: "Prog Class",
  seats: 16,
  faculty: "FAIT"
}, {
  name: "Music Class",
  seats: 14,
  faculty: "ORAT"
}];
document.write("<div><b>4. \u0421\u043F\u0438\u0441\u043E\u043A \u0432\u0441\u0435\u0445 \u0430\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0439</b></div>");

function printClasses(auditories) {
  if (auditories.length !== 0) {
    var h = '<ul>';
    auditories.forEach(function (auditory) {
      h += "<li>".concat(auditory.name, ", max seats: ").concat(auditory.seats, ", ").concat(auditory.faculty, "</li>");
    });
    h += '</ul>';
    document.write("<div>".concat(h, "</div>"));
  } else {
    document.write("<div>\u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B</div>");
  }
}

printClasses(CLASSES);
document.write("<br>");
document.write("<div><b>4.1 \u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438 \u0434\u043B\u044F \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0444\u0430\u043A\u0443\u043B\u044C\u0442\u0435\u0442\u0430</b></div>");

function SearchByFaculty(auditories, name) {
  var rez = auditories.filter(function (auditory) {
    return auditory.faculty === name;
  });
  return printClasses(rez);
}

SearchByFaculty(CLASSES, 'FAIT');
SearchByFaculty(CLASSES, 'DWDW');
document.write("<br>");
document.write("<div><b>4.2 \u0410\u0443\u0434\u0438\u0442\u043E\u0440\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0442 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0439 \u0433\u0440\u0443\u043F\u043F\u044B</b></div>");
var group = {
  name: "Math Class",
  students: 12,
  faculty: "FAIT"
};

function SearchByGroup(auditories, group) {
  var rez = auditories.filter(function (auditory) {
    return auditory.faculty === group.faculty && auditory.seats >= group.students;
  });
  return printClasses(rez);
}

SearchByGroup(CLASSES, group);
document.write("<br>");
document.write("<div><b>4.3 \u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u043C\u0435\u0441\u0442\u0430\u043C</b></div>");

function sortBySeats(auditories) {
  var rez = auditories.sort(function (a, b) {
    return b.seats - a.seats;
  });
  return printClasses(rez);
}

sortBySeats(CLASSES);
document.write("<br>");
document.write("<div><b>4.4 \u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u043A\u0430 \u043F\u043E \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u044E</b></div>");

function sortByName(auditories) {
  var rez = auditories.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });
  return printClasses(rez);
}

sortByName(CLASSES);