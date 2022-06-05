$(document).ready(function () {

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
    var goToTop = function () {
        $('.js-gotop').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');
            return false;
        });

        $(window).scroll(function () {
            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }
        });
    };
    goToTop();

 
    var scroll_load = Math.floor($(window).scrollTop());
    if (scroll_load > 60) {
        $('.navbar').addClass('sticky_scroll').addClass('fixed-top');
    } else {
        if (window.location.pathname === '/') {
            $('.navbar').removeClass('sticky_scroll');
        } else {
            $('.navbar').removeClass('sticky_scroll').removeClass('fixed-top');
        }
    }
    $(window).scroll(function () {
        // console.log('scroll', scroll)
        var scroll = Math.floor($(window).scrollTop());
        if (scroll > 60) {
            $('.navbar').addClass('sticky_scroll').addClass('fixed-top');
        } else {
            $('.navbar').removeClass('sticky_scroll').removeClass('fixed-top');
            // if (window.location.pathname === '/') {
            //     $('.navbar').removeClass('sticky_scroll');
            // } else {
            //     // console.log(window.location.pathname);
            // }
        }
    });


});