"use strict";
window.addEventListener('DOMContentLoaded', function (e) {
    const hamburger = document.querySelector('.hamburger');
    if(hamburger) {
        hamburger.addEventListener('click', function (e) {
            const closestHambFather = e.target.closest('.header__nav');
            closestHambFather.classList.toggle('active');
        })

    }
})