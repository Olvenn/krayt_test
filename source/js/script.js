BANNER_DATA = [
  {
    url: "url('../img/gallery/slider-1 1x.png') bottom 0 right 36px no-repeat",
    title: "На бриллианты",
    subtitle: "Суперскидка до 60%",
  },
  {
    url: "url('../img/gallery/slider-2 1x.png') bottom 0 right 36px no-repeat",
    title: "На золото",
    subtitle: "Суперскидка до 40%",
  },
  {
    url: "url('../img/gallery/slider-3 1x.png') bottom 0 right 36px no-repeat",
    title: "На серебро",
    subtitle: "Суперскидка до 50%",
  },
]
const banner = document.querySelector('.banner__wrap');
const btnPrev = document.querySelector('.banner__btn--prev');
const btnNext = document.querySelector('.banner__btn--next');
const bannerTitle = document.querySelector('.banner__title');
const bannerSubtitle = document.querySelector('.banner__sale');
const bannerBtns = document.querySelectorAll('.banner__pagination-item');
const town = document.querySelector('.about__wrap');
const dropDownList = document.querySelector('.about__dropDownList');
const checkmark = document.querySelector('.about__checkmark');
const arrow = document.querySelector('.about__drop');
const saleCard = document.querySelectorAll('.sale__item');
const material = document.querySelectorAll('.material');

let slideIndex = 0;
let backgroundSize = 100;

const setNewSlideData = () => {
  banner.style.background = BANNER_DATA[slideIndex].url;
  bannerTitle.textContent = BANNER_DATA[slideIndex].title;
  bannerSubtitle.textContent = BANNER_DATA[slideIndex].subtitle;
}

const changeActiveBtn = () => {
  bannerBtns.forEach((value, index) => {
    value.classList.remove('banner__pagination-item--active');
    console.log(value, index);
  })
  bannerBtns[slideIndex].classList.add('banner__pagination-item--active');
}

function myAnimation() {
  backgroundSize += 7;
  banner.style.backgroundSize = backgroundSize + "px"

  if (backgroundSize < 540) {
    requestAnimationFrame(myAnimation);
  }
}

const nextSlideClick = () => {
  backgroundSize = 0;
  slideIndex += 1;
  if (slideIndex > BANNER_DATA.length - 1) {
    slideIndex = 0;
  }
  changeActiveBtn();
  setNewSlideData();
  myAnimation();
}

const prevSlideClick = () => {
  backgroundSize = 0;
  slideIndex -= 1;
  if (slideIndex < 0) {
    slideIndex = BANNER_DATA.length - 1;
  }
  changeActiveBtn();
  setNewSlideData();
  myAnimation();
}

bannerBtns.forEach((value, index) => {
  value.addEventListener('click', () => {
    slideIndex = index;
    backgroundSize = 0;
    changeActiveBtn();
    setNewSlideData();
    myAnimation();
  });
})

btnNext.addEventListener('click', nextSlideClick);
btnPrev.addEventListener('click', prevSlideClick);

const dropTownList = () => {
  if (dropDownList.classList.contains('about__animate')) {
    dropDownList.classList.remove('about__animate');
    arrow.style.display = "block";
    checkmark.style.display = "none";
  } else {
    dropDownList.classList.add('about__animate');
    arrow.style.display = "none";
    checkmark.style.display = "block";
  }
}

town.addEventListener('click', dropTownList);

saleCard.forEach((value, index) => {
  value.addEventListener('click', () => {
    const footer = value.querySelector('.sale__footer')
    footer.style.display = "block";
    console.log(footer);
  });
})

material.forEach((value, index) => {
  value.addEventListener('click', (evt) => {
    console.log(evt.target.classList.contains('material__title'));
    if (evt.target.classList.contains('material__title')) {
      const material = value.querySelector('.material__list');
      material.style.display = "block";
      console.log(value);
    }

  });
})


