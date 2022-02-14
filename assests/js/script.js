const header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 30){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
})

// show menu
const menuBtn = document.querySelector('#menuBtn'),
menu = document.querySelector('.header .nav');

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('fa-times');
    menu.classList.toggle('active');
})

// toggle active link