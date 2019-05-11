$(document).ready(function () {
    $(function () {
        $.scrollify({
        section: ".block",
        scrollbars: false,
        scrollSpeed: 700,
        easing: "swing",

        before: function(index) {
            if (index !== 0) {
                $(".top-section").slideUp(600);
                $(".teaser").addClass("scroll-down");
                $(".top-logo").addClass("hide");

            } else {
                $(".top-section").slideDown(600);
                $(".teaser").removeClass("scroll-down");
                $(".top-logo").removeClass("hide");
                $('.top-logo').show();

            }
        }
        });
    });

    $('#nav-overlay').fadeOut(0);
    
    $('.navbar-toggler').click(function () {
        $('#nav-overlay').fadeToggle(400, function () {
            $(this).children("div").fadeToggle("slow");
        });
    });
    
    
    $('#cross').click(function () {
        $('#nav-overlay').fadeToggle(400, function () {
            $(this).children("div").fadeToggle("slow");
        });
    });
    
    
    $(function () {
        var y = 0;
        setInterval(function () {
            y -= 0.05;
            $('.bg-common').css('background-position', `0 ${y}vh`);
        }, 20);
    })


});  



