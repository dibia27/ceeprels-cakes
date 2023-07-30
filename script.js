// const menuBar = document.getElementById("menu-bar");
// const dropdownMenu = document.querySelector(".dropdown-menu");

// menuBar.addEventListener("click", () => {
//   dropdownMenu.classList.toggle("active");
// });

let navbar = document.querySelector(".navbar");
document.querySelector("#menu-bar").onclick=() =>{
  navbar.classList.toggle("active");
}


const searchIcon = document.getElementById("search");
const searchBox = document.querySelector(".search");

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
});



  var swiper = new Swiper(".productsect", {
    // slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay: {
      delay:9500,
      disableOnInteraction:false,
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  }); //Product Row

  var swiper = new Swiper(".reviewsect", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  }); //Review Row
  