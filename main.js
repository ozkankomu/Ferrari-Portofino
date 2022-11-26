

let slider_btn_l = document.getElementById('slider_btn_l');
let slider_btn_r = document.getElementById('slider_btn_r');
let design_img_sl = document.getElementById('design_img_sl');

slider_btn_r.addEventListener('click', function () {

    design_img_sl.src = 'images/Mask group (3).png';
    slider_btn_r.style.opacity = 1;
    slider_btn_l.style.opacity = 0.5;

})


slider_btn_l.addEventListener('click', function () {

    design_img_sl.src = 'images/Mask group (4).png';
    slider_btn_l.style.opacity = 1;
    slider_btn_r.style.opacity = 0.5;
})



let hamburger = document.getElementById('hamburger');
let nav_menu = document.getElementById('nav-menu');
let burger_svg = document.getElementById('burger_svg');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    nav_menu.classList.toggle('active');
})

document.querySelectorAll('.menuItem').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav_menu.classList.remove('active');
}));
