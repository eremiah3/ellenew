"use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const inputPrice = document.getElementById("input-amount");
const txRef = document.getElementById("tx_ref");

const navElems = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElems.length; i++) {
  navElems[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

function getPrice(price) {
  return price;
}

document.addEventListener(`click`, (e) => {
  const origin = e.target.closest(`button`);

  if (origin && origin.id != "start-payment-button") {
    inputPrice.value = origin.id.substring(0, origin.id.search("#"));
    txRef.value = origin.id;
    console.clear();
    console.log("You clicked: ", inputPrice.value, " txRef ", txRef.value);
  }
});

/**
 * header & go top btn active on page scroll
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});