"use strict";

$(function () {
  $("#feedback_form").on("submit", function (e) {
    e.preventDefault();
    sendMessage($(this));
  });
  $("input, textarea").on("focus", function () {
    if ($(this).parents(".form_row").hasClass("has_err")) {
      if ($(this).attr("name") !== "email") {
        $(this).parents(".form_row").removeClass("has_err");
        $(this).next("div").text("");
      }
    }
  });
  $("input[name='email']").on('keyup', function () {
    if (!validateEmail($(this).val())) {
      $(this).parents(".form_row").addClass("has_err");
      $(this).next("div").text("Invalid email adress");
    } else {
      $(this).parents(".form_row").removeClass("has_err");
      $(this).next("div").text("");
    }
  });
});

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function sendMessage($form) {
  var BOT_TOKEN = '1868758005:AAFgwAos7OsqEj3SOED9FgCKKspGO5USmGQ';
  var CHAT_ID = '-1001207500168';
  var nameee = namee.value;
  var emaill = email.value;
  var phonee = phone.value;
  var messagee = message.value;
  var text = 'Name:' + nameee + '\ Email:' + emaill + '\ Phone:' + phonee + '\ Message:' + messagee;
  var valid = true;
  $("form").find('*[data-required]').each(function () {
    if ($(this).val() === '') {
      valid = false;
      $(this).parents(".form_row").addClass("has_err");
      $(this).next("div").text("Field is requaired");
    } else {
      if ($(this).attr("name") === "email") {
        if (!validateEmail($(this).val())) {
          valid = false;
          $(this).parents(".form_row").addClass("has_err");
          $(this).next("div").text("Invalid email adress");
        }
      }
    }
  });

  if (valid) {
    axios.get('https://api.telegram.org/bot' + BOT_TOKEN + '/sendMessage?chat_id=' + CHAT_ID + '&text=' + text).then(function (resp) {
      console.log(resp.data.ok);

      if (resp.data.ok === true) {
        topPanel.success('Ваши данные отправленны', true);
        $("#feedback_form").trigger('reset');
      } else {
        topPanel.warning('error', true);
      }
    })["catch"](function (err) {
      alert(err);
    });
  }
}

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