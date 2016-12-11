/*
 Very minimalist javascript in use
 */

jQuery(function($){

    // Setting up the menu button
    $("#menu-button").click(function(event){
        var menu = $("#header-nav");
        var buttonIcon = $("#menu-button i");

        if (menu.hasClass("open")) {     // menu is open
            menu.removeClass("open");
            menu.slideUp("slow");
            buttonIcon.removeClass("close"); // close icon
        } else {
            menu.addClass("open");
            menu.slideDown("slow");
            buttonIcon.addClass("close");
        }
    });
});
