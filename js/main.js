const swiperManufacture = new Swiper('.swiper-manufacture', {

  slidesPerView: 1.2,
  spaceBetween: 12,

  navigation: {
    nextEl: '.swiper-button-next.manufacture',
    prevEl: '.swiper-button-prev.manufacture',
  },

  breakpoints: {
   
    769: {
      slidesPerView: 'auto',
      spaceBetween: 60,
    }
  }

});
const swiperThanks = new Swiper('.swiper-thanks', {

  slidesPerView: 1.15,
  spaceBetween: 12,

  navigation: {
    nextEl: '.swiper-button-next.thanks',
    prevEl: '.swiper-button-prev.thanks',
  },
  breakpoints: {
   
    769: {
      slidesPerView: 'auto',
      spaceBetween: 50,
    }
  }

});
const swiperFeedback = new Swiper('.swiper-feedback', {

  slidesPerView: 1.1,
  spaceBetween: 12,

  navigation: {
    nextEl: '.swiper-button-next.feedback',
    prevEl: '.swiper-button-prev.feedback',
  },
  breakpoints: {
   
    769: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }

});
const swiperBlog = new Swiper('.swiper-blog', {

  slidesPerView: 1.1,
  spaceBetween: 12,

  navigation: {
    nextEl: '.swiper-button-next.blog',
    prevEl: '.swiper-button-prev.blog',
  },
  breakpoints: {
   
    769: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }

});
const swiperWelcome = new Swiper('.swiper-welcome.none', {

  slidesPerView: 4.1,
  spaceBetween: 0,

  speed:8000,
  autoplay: {
      delay: 1,
      disableOnInteraction: false,
  }
 

});



const swiperWelcomeMobile = new Swiper('.swiper-welcome.mobile', {
  slidesPerView: 'auto',

  
  speed:8000,
  autoplay: {
      delay: 1,
      disableOnInteraction: false,
  }

});
const swiperCategoriesMobile = new Swiper('.swiper-categories', {

  slidesPerView: 2.5,

 });
const swiperWorkersMobile = new Swiper('.swiper-workers', {
  spaceBetween: 12,
  slidesPerView: 1.2,
  pagination: {
    el: ".swiper-pagination.workers",
    clickable: true,
  },
 });
 var swiperCasesMobile = new Swiper(".swiper-cases", {
  spaceBetween: 4,
  slidesPerView: 1.05,
  navigation: {
    nextEl: ".swiper-button-next.cases",
    prevEl: ".swiper-button-prev.cases",
  },
});
 var swiperColorsMobile = new Swiper(".swiper-colors", {
  slidesPerView: 'auto',
 
});
 var swiperMod = new Swiper(".swiper-mod", {
  spaceBetween:12,
  slidesPerView: 1.2,
  navigation: {
    nextEl: ".swiper-button-next.mod",
    prevEl: ".swiper-button-prev.mod",
  },
  pagination: {
    el: ".swiper-pagination.mod",
    clickable: true,
  },

  breakpoints: {
   
    769: {
      spaceBetween: 40,
      slidesPerView: 4,
    }
  }
 
});
var swiperColors2Mobile = new Swiper(".swiper-colors2", {
  spaceBetween: 24,
  slidesPerView: 'auto',
 
});


const headerFixed = document.querySelector(".header.fixed");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 50) headerFixed.classList.add("active");
//   else headerFixed.classList.remove("active");

// });

document.querySelector('.video video')?.addEventListener('click', ()=>{
  document.querySelector('.video__btn').classList.toggle('unactive')
})

const feedbackVideos = document.querySelectorAll('.swiper-feedback .swiper-slide__video');
const feedbackPlays = document.querySelectorAll('.swiper-slide-icon')

for(let i = 0; i < feedbackVideos.length; i++ ){
  feedbackVideos[i].addEventListener('fullscreenchange', ()=>{
    feedbackVideos[i].classList.toggle('uncover')
  })
  feedbackVideos[i].addEventListener('click', ()=>{
  feedbackPlays[i].classList.toggle('unactive')
  })
}



function blockScroll(){
  scrollY = window.pageYOffset;
  document.body.style.top = `-${window.pageYOffset}px`;
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';
}
function unblockScroll(){
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);
}

const burgerOpen = document.querySelectorAll('.header__burger');
const burgerClose = document.querySelector('.header__menu-close');
const burgerMenu = document.querySelector('.header__menu')

for(let i of burgerOpen){
  i.addEventListener("click", () => {
    burgerMenu.classList.add('active')
    blockScroll()
  });
}

burgerClose.addEventListener("click", () => {
  burgerMenu.classList.remove('active')
  unblockScroll()
});

const welcomeImgs = document.querySelectorAll('.welcome__item-img')
const mediaMatch = window.matchMedia("(max-width: 768px)");


const mobileHeadLinks = document.querySelectorAll('.header__menu.mobile .header__link');

for(let i of mobileHeadLinks){
  i.addEventListener('click', ()=>{
    burgerMenu.classList.remove('active')
    unblockScroll()
  })
}


document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      // const topOffset = document.querySelector('.scrollto').offsetHeight;
      // const topOffset = 0; // если не нужен отступ сверху 
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      // const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: elementPosition,
          behavior: 'smooth'
      });
  });
});


const popup = document.getElementById('overlay');
const popupClose = document.querySelector('.popup__form-img');
const popupBtnsArr = document.querySelectorAll('.popup__btn');
const popupSelect = document.querySelectorAll('.popup__select-list input');

for(let i = 0; i < popupSelect.length; i++) popupSelect[i].addEventListener('click', ()=>{
  for(let j of popupSelect) j.checked = false;
  popupSelect[i].checked = true;
})

const popupRequest =   document.getElementById('overlay-request');

const shadow = document.getElementById('shadow')

shadow.addEventListener('click', ()=>{
  shadow.classList.remove('active')
  popup.classList.remove('active');
  popupRequest.classList.remove('active')
  unblockScroll();
})


const requestBtn = document.querySelectorAll('.color__form button')

for(let i of requestBtn) i.addEventListener('click', ()=>{
  popupRequest.classList.add('active');
  shadow.classList.add('active')
  blockScroll()
})


for(let i of popupBtnsArr){
  i.addEventListener('click', ()=>{
    popup.classList.add('active');
    shadow.classList.add('active')
    blockScroll();
  })
}

popupClose.addEventListener('click', ()=>{
  popup.classList.remove('active');
  shadow.classList.remove('active')
  unblockScroll();
})





const categoriesIndexTabs = document.querySelectorAll('.index .categories .categories__tab-btn');
const categoriesTitle = document.querySelectorAll('.categories__descr-title .categories__descr-text');
const categoriesLinks = document.querySelectorAll('.categories__btn-link')
const categoriesText = document.querySelectorAll('.categories__descr')

const colorsIndexTabs = document.querySelectorAll('.index .colors .categories__tab-btn');
const colorsTabsText = document.querySelectorAll('.index .colors .categories__tab-btn .categories__tab-content');
const switchTabs = document.querySelectorAll('.color__switches-btn');
const colorsIndexSwitch = document.querySelectorAll(' .color__item');
const colorsIndexBtn = document.querySelector(' .color__item-btn');


const colorsClothesModTabs = document.querySelectorAll('.clothes-item .colors.mod .categories__tab-btn');
const colorsClothesTabs = document.querySelectorAll('.clothes-item .colors.mat .categories__tab-btn');
const colorsClothesText = document.querySelectorAll('.clothes-item .colors.mat .categories__tab-btn .categories__tab-content');

const colorsLists = document.querySelectorAll('.color__list')
const colorsTitle = document.querySelector('.colors__title')
const colorsColorsTitle = document.querySelectorAll('.colors__title')
const colorText = document.querySelector('.color__descr-text')
const colorListText = document.querySelectorAll('.color__descr-item')


for(let i of switchTabs){
  i?.addEventListener('click', ()=>{
    for(let i of switchTabs) i.classList.remove('active');
    i.classList.add('active')
  })
}

for(let i of colorsIndexSwitch){
  i?.addEventListener('click', ()=>{
    for(let i of colorsIndexSwitch) i.classList.remove('active');
    colorsIndexBtn.classList.remove('active')
    i.classList.add('active')
  })
}

colorsIndexBtn?.addEventListener('click', ()=>{
  for(let i of colorsIndexSwitch) i.classList.remove('active');
  colorsIndexBtn.classList.add('active')
 
})

for(let i = 0; i < categoriesIndexTabs.length; i++){
  categoriesIndexTabs[i]?.addEventListener('click', ()=>{
    for(let i of categoriesIndexTabs) i.classList.remove('active');
    categoriesIndexTabs[i].classList.add('active');
    for(let j of categoriesTitle) j.textContent = categoriesIndexTabs[i].textContent;
    
    if(categoriesIndexTabs[i].textContent == 'Худи') for(let i of categoriesLinks) i.href = 'clothes-merch-hoodie.html';
    if(categoriesIndexTabs[i].textContent == 'Джоггеры') for(let i of categoriesLinks) i.href = 'clothes-merch-joggers.html';
    if(categoriesIndexTabs[i].textContent == 'Футболки') for(let i of categoriesLinks) i.href = 'clothes-merch-tShirts.html';
    if(categoriesIndexTabs[i].textContent == 'Бомберы') for(let i of categoriesLinks) i.href = 'clothes-merch-bombers.html';
    if(categoriesIndexTabs[i].textContent == 'Жилетки') for(let i of categoriesLinks) i.href = 'clothes-merch-vests.html';
    if(categoriesIndexTabs[i].textContent == 'Рубашки') for(let i of categoriesLinks) i.href = 'clothes-merch-shirts.html';

    for(let i of categoriesText) i.classList.toggle('unvisible')

    

  })
  colorsIndexTabs[i]?.addEventListener('click', ()=>{
    for(let i of colorsIndexTabs) i.classList.remove('active')
    colorsIndexTabs[i].classList.add('active');
    
    for(let i of colorsLists) i.classList.toggle('unvisible');
   
    console.log(colorText.textContent)
    if(colorText.textContent == 'Футер 3-х нитка стандартной плотности с петельчатой изнанкой. За счет добавления нитей полиэстера имеет мягкую фактуру и низкий % усадки. Отличный базовый футер, который подойдет для одежды, требующей регулярной носки'){
      colorText.textContent = 'Футер 3-х нитка стандартной плотности с петельчатой изнанкой. За счет добавления нитей полиэстера имеет мягкую фактуру и низкий % усадки.'
      colorListText[1].textContent = 'состав: 85% хлопок, 15% полиэстер и еще состав: 85% хлопок, 15% полиэстер'
    }
    else{
      colorText.textContent = 'Футер 3-х нитка стандартной плотности с петельчатой изнанкой. За счет добавления нитей полиэстера имеет мягкую фактуру и низкий % усадки. Отличный базовый футер, который подойдет для одежды, требующей регулярной носки'
      colorListText[1].textContent = 'состав: 85% хлопок, 15% полиэстер'
    }

    colorsTitle.textContent = colorsTabsText[i].textContent
  })

}
for(let i = 0; i < colorsClothesModTabs.length; i++){
  colorsClothesModTabs[i]?.addEventListener('click', ()=>{
    for(let i of colorsClothesModTabs) i.classList.remove('active')
    colorsClothesModTabs[i].classList.add('active')
  })
  colorsClothesTabs[i]?.addEventListener('click', ()=>{
    for(let i of colorsClothesTabs) i.classList.remove('active')
    colorsClothesTabs[i].classList.add('active')
    colorsColorsTitle[1].textContent = colorsClothesText[i].textContent

 
  })

}



for(let i of  document.querySelectorAll('.phone-mask')){
  
  IMask(
   i,
    {
      mask: '+{7}(000)000-00-00'
    }
  )
}



const workersClick = document.querySelectorAll('.workers__item');

for(let i of workersClick) i.addEventListener('click', ()=> i.classList.toggle('clicked'))

const acc = document?.getElementsByClassName("accordion");

acc[0].classList.add('active');
if(window.matchMedia("(max-width: 768px)").matches){
  acc[0].nextElementSibling.style.maxHeight = acc[0].nextElementSibling.scrollHeight+20 + "px";
}
else{
  acc[0].nextElementSibling.style.maxHeight = acc[0].nextElementSibling.scrollHeight + "px";
}

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}