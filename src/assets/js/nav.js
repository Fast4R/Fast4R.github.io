$(function() {
    
    const NAV_MAX_HEIGHT = 100;

    const nav = $("#nav");
    const navItem = $(".nav__item");
    //const navLink = $(".nav__link");

    let scrollPos = $(window).scrollTop();

    $(window).on('scroll load resize', function(){
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos);
    });

    function checkScroll(scrollPos){
        if(scrollPos > NAV_MAX_HEIGHT){
            nav.addClass("show__nav");
            $(navItem).each(function(){
               $(this).addClass('nav__scroll');

            //    let id = $(this).attr('id');
            //     $(this).html(`<a href="#" class="nav__link" id="home">
            //     <img src="/assets/images/navIcon/${id}.svg" alt="" width="50" 
            //     height="50"></a>`);
            });
        } else{
            nav.removeClass("show__nav");
        }
    }

    $("[data-scroll]").on('click', function(event){
        event.preventDefault();

        let navScrollId = $(this).data('scroll');
        let navOffsetTop = $(navScrollId).offset().top;
        
        $("html, body").animate({
            scrollTop: navOffsetTop - 250
        }, 700);
    });
});