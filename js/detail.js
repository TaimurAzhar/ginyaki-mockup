$(document).ready(function () {

    $('#nav-overlay').fadeOut(0);
    $details = $('.details');

    $('.navbar-toggler').click(function () {
        $('#nav-overlay').fadeToggle(400, function () {
            $(this).children("div").slideToggle(400);
        });
    });
    $('#cross').click(function () {
        $('#nav-overlay').fadeToggle(400, function () {
            $(this).children("div").slideToggle(400);
        });
    });




/*     $details.waypoint(function (direction) {
            console.log("Trigger");
            if(direction === "down") {
                $('.ingredient-2').addClass('move-2');
                $('.ingredient-1').addClass('move-1');
                $('.ingredient-3').addClass('move-3');    
            }
            else {
                $('.ingredient-2').removeClass('move-2');
                $('.ingredient-1').removeClass('move-1');
                $('.ingredient-3').removeClass('move-3');     
            }


            
    }, { offset: '30%' });

    $details.waypoint(function (direction) {
        console.log("Trigger");
        if (direction === "down") {
            $('.ingredient-2').addClass('move-2');
            $('.ingredient-1').addClass('move-1');
            $('.ingredient-3').addClass('move-3');
        }
        else {
            $('.ingredient-2').removeClass('move-2');
            $('.ingredient-1').removeClass('move-1');
            $('.ingredient-3').removeClass('move-3');
        }



    }, { offset: '80%' });





    Waypoint.disableAll();
    setTimeout(() => {
        Waypoint.enableAll();
        console.log("enabled")
    }, 3800); */


});