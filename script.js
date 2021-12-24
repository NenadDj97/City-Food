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
