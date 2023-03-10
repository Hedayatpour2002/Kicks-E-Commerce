const dragg = document.querySelectorAll("a , img");
for (let i = 0; i < dragg.length; i++) {
  dragg[i].draggable = false;
}

const navBtn = document.querySelector(".nav__btn");
const menu = document.querySelector(".menu");
let menuOpen = false;
navBtn.addEventListener("click", () => {
  if (menuOpen) {
    removeClass(navBtn, "nav__btn--avtive");
    removeClass(menu, "menu--open");
    menuOpen = false;
  } else {
    addClass(navBtn, "nav__btn--avtive");
    addClass(menu, "menu--open");
    menuOpen = true;
  }
});

function removeClass(element, className) {
  element.classList.remove(className);
}
function addClass(element, className) {
  element.classList.add(className);
}

const menuLinks = document.querySelectorAll(".menu__link");
for (let i = 0; i < menuLinks.length; i++) {
  const element = menuLinks[i];
  element.addEventListener("click", () => {
    document
      .querySelector(".menu__link--active")
      .classList.remove("menu__link--active");
    element.classList.add("menu__link--active");
  });
}

const headerHeat = document.querySelector(".hero__heart");
headerHeat.addEventListener("click", () => {
  headerHeat.classList.toggle("hero__heart--fill");
});

const checkbox = document.querySelector(".switch__checkbox");
const bestWomen = document.querySelector(".best__women");
const bestMen = document.querySelector(".best__men");
let checkboxFlag = true;
checkbox.addEventListener("click", () => {
  if (checkbox.checked) {
    removeClass(bestMen, "best__men--show");
    addClass(bestWomen, "best__women--show");
  } else {
    addClass(bestMen, "best__men--show");
    removeClass(bestWomen, "best__women--show");
  }
});
