$(function(){
    $(".hamburger, #menu_shadow").click(function(){
        $('.hamburger').toggleClass("is-active");
        $("body").toggleClass("open");
    });

    $(".mobile_menu a").click(function(){
        $('.hamburger').removeClass("is-active");
        $("body").removeClass("open");
    });

    $(".mobile_menu a, .menu_list a").click(function(e){
        e.preventDefault();
        let top = $($(this).attr("href")).offset().top;
        $("html, body").animate({scrollTop:top}, 600);
    });

    $(document).ready(function(){
 
    $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
    $('.scrollup').fadeIn();
    } else {
    $('.scrollup').fadeOut();
    }
    });
    
    $('.scrollup').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
    });
    
    });
    
});