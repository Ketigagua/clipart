var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

// Show More Cats
const catItems = document.querySelectorAll(".cat-item");
const hiddenCategories = document.querySelector(".hidden-categories");
const showMoreBtn = document.querySelector(".show-categories");
const breakpoint = 1240;

function toggleCategories() {
  if (window.innerWidth < breakpoint && window.innerWidth >= 1205) {
    // Hide last 3
    for (let i = catItems.length - 1; i > catItems.length - 4; i--) {
      catItems[i].style.display = "none";
    }

    // Show "More"
    showMoreBtn.style.display = "block";
    showMoreBtn.addEventListener("click", () => {
      hiddenCategories.classList.toggle("hidden");
    });

    hiddenCategories.addEventListener("mouseleave", () => {
      hiddenCategories.classList.add("hidden");
    });
  } else {
    // Show all categories
    for (let i = 0; i < catItems.length; i++) {
      catItems[i].style.display = "inline-block";
    }

    // Hide "More"
    showMoreBtn.style.display = "none";
    showMoreBtn.removeEventListener("click", () => {
      hiddenCategories.classList.toggle("hidden");
    });

    hiddenCategories.removeEventListener("mouseleave", () => {
      hiddenCategories.classList.add("hidden");
    });
  }
}

window.addEventListener("load", toggleCategories);
window.addEventListener("resize", toggleCategories);

// hide Cats

const catContainer = document.querySelector(".cats");
const breake = 1204;

if (window.innerWidth <= breake) {
  catContainer.classList.add("hidden");
}

// Burger Menu
const menuBtn = document.querySelector(".menu-btn");
const catsContainer = document.querySelector(".cats");
const socialIcons = document.querySelector(".socials");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("show");
    catsContainer.classList.add("show");
    socialIcons.classList.add("hide");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    catsContainer.classList.remove("show");
    socialIcons.classList.remove("hide");
    menuOpen = false;
  }
});
