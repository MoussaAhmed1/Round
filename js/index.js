const stickyElement = document.querySelector('.sticky-element'); // Replace with your element's selector

// Function to handle scroll
const handleScroll = () => {
  if (window.scrollY > 80) {
    stickyElement.classList.add('is-sticky'); // Add the "sticky" class
  } else {
    stickyElement.classList.remove('is-sticky'); // Remove the "sticky" class
  }
};

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);

// destination swiper
const swiper = new Swiper(".first-swiper", {
  slidesPerView: 5,
  loop: true,
  centerSlide: "true",
  fade: "true",
  speed: 800,
  grabCursor: "true",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

// tourist trips swiper
const swiper2 = new Swiper(".second-swiper", {
  slidesPerView: 4,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    950: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});
