$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $(".header").addClass("fixed");
            $(".logo_img").addClass("small_logo");
        }else{
            $(".header").removeClass("fixed");
            $(".logo_img").removeClass("small_logo");
        }
    });

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

    $(".works_slider").slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
    

        
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

    
    // $.getJSON('assets/js/ourTeam.json', function(data) {
    //     let li = '';
    //     for (let i of data) {
    //         li += `<li class="soc_item">`;
    //         li += `<img src="${i.photo}" alt="photo">`;
    //         li += `<div class="name">${i.person_name}</div>`;
    //         li += `<div class="position">${i.position}</div>`
    //         li += '<ul class="soc_list">';
    //         for(let j of i.soc_list){
    //             li += ` <li class="soc_item"><a href="${j.soc_link}" target="_blank" rel="noopener"><i class="${j.icon}"></i></a></li>`
    //         }
    //         li += '</ul>';
    //         li += `</li>`;
    //     }
    //     $('.team_slider').html(li);

    //     $(".team_slider").slick({
    //         arrows: true,
    //         dots: true,
    //         infinite: true,
    //         slidesToShow: 3,
    //         slidesToScroll: 1,
    //         // autoplay: true,
    //         // autoplaySpeed: 3000,
    //     });
    // });

    // function getTeamInfo() {
    //     $.ajax({
    //         url: "assets/js/ourTeam.json",
    //         success: function(data) {
    //             let li = '';
    //             for (let i of data) {
    //                 li += `<li class="soc_item">`;
    //                 li += `<img src="${i.photo}" alt="photo">`;
    //                 li += `<div class="name">${i.person_name}</div>`;
    //                 li += `<div class="position">${i.position}</div>`
    //                 li += '<ul class="soc_list">';
    //                 for(let j of i.soc_list){
    //                     li += ` <li class="soc_item"><a href="${j.soc_link}" target="_blank" rel="noopener"><i class="${j.icon}"></i></a></li>`
    //                 }
    //                 li += '</ul>';
    //                 li += `</li>`;
    //             }
    //             $('.team_slider').html(li);
        
    //             $(".team_slider").slick({
    //                 arrows: true,
    //                 dots: true,
    //                 infinite: true,
    //                 slidesToShow: 3,
    //                 slidesToScroll: 1,
    //                 // autoplay: true,
    //                 // autoplaySpeed: 3000,
    //             });
    //         }
    //     })
    // }
    // getTeamInfo();

    function getTeamInfo() {
        axios 
            .get('assets/js/ourTeam.json')
            .then((resp)=>{
                let li = '';
                resp.data.forEach(i => {
                    li += `<li class="person_info">`;
                    li += `<div class="upper_div"></div>`
                    // li += `<img src="${i.photo}" alt="photo">`;
                    li += `<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAEALAAAAAABAAEAAAICTAEAOw==" alt="photo" class="lazy" data-lazy="${i.photo}">`;
                    li += `<div class="person_name">${i.person_name}</div>`;
                    li += `<div class="person_position">${i.position}</div>`
                    li += '<ul class="soc_list">';
                    i.soc_list.forEach(j => {
                        li += ` <li class="soc_item"><a href="${j.soc_link}" target="_blank" rel="noopener"><i class="${j.icon}"></i></a></li>`
                    });
                    li += '</ul>';
                    li += `</li>`;
                });
                $('.team_slider').html(li);
        
                $(".team_slider").slick({
                    arrows: true,
                    dots: false,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    responsive: [
                        {
                          breakpoint: 950,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                          }
                        },
                        {
                            breakpoint: 520,
                            settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1,
                              infinite: true,
                            }
                          }
                    ]
                });
            })
    }
    getTeamInfo();
    

    


    /* form validation */

    $(function(){
        $("#contact_form").on("submit", function(e){
            e.preventDefault();
            sendMessage($(this));
        });
        $("input, textarea").on("focus", function(){
            if($(this).parents(".form_row").hasClass("has_err")){
                if($(this).attr("name")!=="email"){
                    $(this).parents(".form_row").removeClass("has_err");
                    $(this).next("div").text("");
                }
            }
        });
        $("input[name='email']").on('keyup', function(){
            if(!validateEmail($(this).val())){
                $(this).parents(".form_row").addClass("has_err");
                $(this).next("div").text("Invalid email adress");
            }else{
                $(this).parents(".form_row").removeClass("has_err");
                $(this).next("div").text("");
            }
        })
    });
    
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    
    function sendMessage($form){
        let valid = true;
        $form.find('*[data-required]').each(function(){
            if($(this).val()===''){
                valid = false;
                $(this).parents(".form_row").addClass("has_err");
                $(this).next("div").text("Field is requaired");
            }else{
                if($(this).attr("name")==="email"){
                    if(!validateEmail($(this).val())){
                        valid = false;
                        $(this).parents(".form_row").addClass("has_err");
                        $(this).next("div").text("Invalid email adress");
                    }
                }
            }
        });
        if(valid){
            axios
            .get('')
            .then((resp)=>{
                if(resp.data.status==="success"){
                    $("#contact_form").trigger('reset');
                    $("form").submit(function(){
                        $(this).find("input[type=text], input[type=email], select, textarea").val("");
                    });
                }else{
                    $("form").submit(function(){
                        $(this).find("input[type=text], input[type=email], select, textarea").val("");
                    });
                }
            })
            .catch((err)=>{
            });
        }
    }

    // $(function() {
    //     window.addEventListener("scroll", function(event){
      
    //       let top = this.pageYOffset;
      
    //       let layers = $(".section_home");
    //       let speed, yPos;
    //       layers.each(function() {
    //         speed = $(this).attr('data-speed');
    //         yPos = -(top * speed / 100);
    //         $(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
    //       });
    //     });
    //   });
});