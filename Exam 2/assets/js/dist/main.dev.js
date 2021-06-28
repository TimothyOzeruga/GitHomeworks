"use strict";

$(function () {
  $("form").submit(function () {
    $(this).find("input[type=text], input[type=email], select, textarea").val("");
  });
  $(".slick").slick({
    arrows: false,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });
  $(".cards").slick({
    arrows: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
  map_link.addEventListener("click", function () {
    map = L.map('map').setView([40.686133067204395, -73.90155955979023], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([40.686133067204395, -73.90155955979023]).addTo(map).bindPopup().openPopup();
    map_link.remove();
    map_pic.remove();
  });
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });
    $('.scrollup').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 600);
      return false;
    });
  });
  var sections = $('section'),
      nav = $('nav'),
      nav_height = nav.outerHeight();
  $(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();
    sections.each(function () {
      var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
        $(this).addClass('active');
        nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
      }
    });
  });
  nav.find('a').on('click', function () {
    var $el = $(this),
        id = $el.attr('href');
    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height
    }, 500);
    return false;
  });
});
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });
  $(".hamburger, #menu_shadow").click(function () {
    $('.hamburger').toggleClass("is-active");
    $("body").toggleClass("open");
  });
  $(".mobile_menu a").click(function () {
    $('.hamburger').removeClass("is-active");
    $("body").removeClass("open");
  });
  $(".mobile_menu a, .menu_list a, .slider_item a").click(function (e) {
    e.preventDefault();
    var top = $($(this).attr("href")).offset().top;
    $("html, body").animate({
      scrollTop: top
    }, 600);
  });
  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    selector: '.item'
  });
});