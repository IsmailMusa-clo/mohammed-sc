$('.center').fadeOut(3000);
$(document).ready(function () {
    // --------------------------------------------
    $(".bar").click(function (e) {
        e.preventDefault()
        $(".nav-bars-icons").slideToggle(1000);
    });
    // --------------------------------------------
    $(window).on('scroll', function () {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 70) {
                $('nav').css('position', 'fixed');
                $(".nav-bars-icons").css('position', 'fixed');
            } else {
                $('nav').css('position', 'relative');
            }
        });
    });
    // --------------------------------------------

    $('nav .content ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    })
    $('.nav-bars-icons ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(".nav-bars-icons").slideToggle(1000);
    })
    // --------------------------------------------
});
