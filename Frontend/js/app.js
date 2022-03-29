$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');
let btn = document.querySelector('.hover');
let btn2 = document.querySelector('.hover-2');
let btna = document.querySelector('.a-btn');
let btna2 = document.querySelector('.btn-2');
let login = document.querySelector('.login');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
  mobileNav.classList.remove('open');  
});


btn.addEventListener("mouseover",()=>{
     btna.style.color ="#3DCFD3"
    //  location.href ="http://localhost:5000/login"
})
btn2.addEventListener("mouseover",()=>{
  btna2.style.color ="#3DCFD3"
    //  location.href ="http://localhost:5000/login"
})
btn.addEventListener("mouseleave",()=>{
  btna.style.color="#161616"
})
btn2.addEventListener("mouseleave",()=>{
  btna2.style.color="#161616"
})
login.addEventListener("click",()=>{
  location.href ="http://localhost:5000/login"
})
btn.addEventListener("click",()=>{
  location.href ="http://localhost:5000/login"
})
btn2.addEventListener("click",()=>{
  location.href ="http://localhost:5000/signup"
})
});