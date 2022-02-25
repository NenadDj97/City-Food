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

const slidownBtn = document.getElementById('sldarw');

slidownBtn.addEventListener('click', ()=>{
    document.querySelectorAll('.content, .cat-slider, .sliderarrow, .slider-icons, .main').forEach(el => el.classList.toggle('slidown'));
});