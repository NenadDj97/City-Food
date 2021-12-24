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

function resetHeight(){
    // reset the body height to that of the inner browser
    document.body.style.height = window.innerHeight + "px";
}
// reset the height whenever the window's resized
window.addEventListener("resize", resetHeight);
// called to initially set the height.
resetHeight();
