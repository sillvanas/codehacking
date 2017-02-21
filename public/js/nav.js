$(document).ready(function() {

    // For the Second level Dropdown menu, highlight the parent
    $( ".dropdown-menu" )
        .mouseenter(function() {
            $(this).parent('li').addClass('active');
        })
        .mouseleave(function() {
            $(this).parent('li').removeClass('active');
        });



});

$(document).ready(function() {
    $("#nav ul li").has("> .sub-nav").click(function(e) {
        e.stopPropagation();
        $(this).find("> .sub-nav").stop().slideToggle();
    });
});

$(document).ready(function () {
    $(".navbar-nav li a").click(function(event) {
        $(".navbar-collapse").collapse('hide');
    });
});