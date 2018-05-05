/******MobileMenu.js*******/

class MobileMenu {
    constructor() {
        this.siteHeader = document.querySelector('.site-header'); 
         this.menuIcon = document.querySelector('.site-header__menu-icon');
         this.menuContent = document.querySelector('.site-header__menu-content');
         this.events();     
    }
    
    events() {
        this.menuIcon.addEventListener('click', (e) => {
            this.menuContent.classList.toggle('site-header__menu-content--is-visible');
            this.siteHeader.classList.toggle('site-header--is-expanded');
            this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
        });
    }
}

var mobileMenu = new MobileMenu();




/******** RevealOnScroll.js********/

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll('.feature-item, .testimonial');
        this.hideInitially();
        this.showElements();
    }
    
    hideInitially() {
       this.itemsToReveal.forEach((el) => {
           el.classList.add('reveal-item');
       }); 
    }
    
    showElements() {
       window.addEventListener('scroll', () => {
           this.itemsToReveal.forEach((el) => {
               if (el.getBoundingClientRect().bottom <= (window.innerHeight)) {
                   el.classList.add('reveal-item--is-visible')
               }
           }); 
       })     
    }
}

var revealOnScroll = new RevealOnScroll();





/******* StickyHeader.js************/







/************** Modal.js ***********/





/*******  BACK TO TOP BTN  ***********/

let bttBtn = document.querySelector('.back-to-top');
let html = document.documentElement;
let body = document.body;

let heights = [html.scrollHeight, html.getBoundingClientRect().height];

let maxHeight = Math.max(...heights);


window.addEventListener('scroll', () => {
    if (html.scrollTop >= (maxHeight / 3)) {
       bttBtn.classList.add('back-to-top--active'); 
    } else {
       bttBtn.classList.remove('back-to-top--active');  
    }
});

bttBtn.addEventListener('click', (e) => {
    e.preventDefault();
    html.scrollTop = 0;
});


