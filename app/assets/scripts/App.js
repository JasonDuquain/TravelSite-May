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
class StickyHeader {
    constructor() {
        this.siteHeader = document.querySelector('.site-header');
        this.headerTriggerElement = document.querySelector('.large-hero__title');
        this.darkenHeader();
        this.pageSections = document.querySelectorAll('.page-section');
        this.navSections = document.querySelectorAll('.primary-nav a');
        this.createPageSectHighlight();  
    }
    
    darkenHeader() {
        window.addEventListener('scroll', (e) => {
            if (this.headerTriggerElement.getBoundingClientRect().top <= 0) {
                this.siteHeader.classList.add('site-header--dark')
            } else {
                this.siteHeader.classList.remove('site-header--dark')
            }
                
        });
    }
    
    createPageSectHighlight() {
        window.addEventListener('scroll', (e) => {
            this.pageSections.forEach((el, idx) => {
               if (this.navSections[idx].getAttribute('id') === el.getAttribute('data-matching-link').slice(1)) { 
                   if  (el.getBoundingClientRect().top <= 0 && el.getBoundingClientRect().bottom >= 0) {
                      this.navSections[idx].classList.add('is-current-link');   
                   } else {
                       this.navSections[idx].classList.remove('is-current-link'); 
                   }
               } 
            });
        });
    }
}



var stickyHeader = new StickyHeader();




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


