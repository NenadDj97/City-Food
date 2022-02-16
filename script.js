$(document).ready(function() {
    $('.content').scroll(function(event) {
        let scroll = $(this).scrollTop();
        let opacity = 0 + (scroll / 1000);
        $('#back').css('opacity', opacity);
    });
});

$("#back").click(function() {
    $('.content').animate({
        scrollTop: $("#logo").offset().top
    }, 2000);
});

$("#menu-btn").click(function() {
    $('.content').animate({
        scrollTop: $("#menu-top").offset().top
    }, 1300);
});