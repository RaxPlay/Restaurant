//Variables
let menuBtn = document.querySelector(".menu-component");
let contactBtn = document.querySelector(".contact-component");
let aboutBtn = document.querySelector(".about-component");

//Functions
function goHome(){
    window.scrollTo({
        top: 0,

        behavior: "smooth"
    });
};
menuBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 917,

        behavior: "smooth"
    });
});
contactBtn.addEventListener('click', function(){
    window.scrollTo({
        top:  1500,

        behavior: "smooth"
    });
});
aboutBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 1900,

        behavior: "smooth"
    });
});