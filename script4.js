let searchForm = document.querySelector('.search-form');

document.getElementById('search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    menu.classList.remove('active');
    login.classList.remove('active');
    shoppingCart.classList.remove('active'); 
}
let shoppingCart = document.querySelector('.shopping-cart');

document.getElementById('cart-btn').onclick = ()=>{
    shoppingCart.classList.toggle('active');
    menu.classList.remove('active');
    login.classList.remove('active');
    searchForm.classList.remove('active'); 
}

let login = document.querySelector('.login-form');

document.getElementById('login-btn').onclick = ()=>{
    login.classList.toggle('active');
    menu.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active'); 
}

let menu = document.querySelector('.navbar');

document.getElementById('menu-btn').onclick = ()=>{
    menu.classList.toggle('active');
    login.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active'); 
}

window.onscroll =() =>{
    menu.classList.remove('active');
    login.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active'); 
}

var swiper = new Swiper(".productslider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        diasbleOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        diasbleOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
