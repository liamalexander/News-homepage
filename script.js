'use strict';

const navLogo = document.querySelector(".nav-logo");
const navContainer = document.querySelector(".nav-container");
const navList = document.querySelector(".nav-list");
const overlay = document.querySelector(".overlay");

const openMenu = function() {
  if (navContainer.classList.contains("open")) {
    navContainer.classList.remove("open");
    navLogo.src="./img/icon-menu.svg";
    overlay.style.display = "none";
    
  } else {
    navContainer.classList.add("open");
    navLogo.src="./img/icon-menu-close.svg";
    overlay.style.display = "block";
  }
};

navLogo.addEventListener("click", openMenu);