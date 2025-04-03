$(document).ready(function () {
    
    // check the screen width 
    if ($(window).width() >= 769) {
        //for desktop: Bind click to the menu icon
        $('.menu-icon').document('click', function () {
            $('.navbar ul').toogle(); //toogle the display of the menu
        })
    }
});