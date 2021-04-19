"use strict";

$(function () {
  $('#phone').mask('+099 999 99 99');
});
$(function () {
  $(window).scroll(function () {
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });
});