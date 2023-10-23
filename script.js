let slider = null;
function sliderInit() {
  if (!slider) {
    slider = new Swiper('.swiper', {
      direction: 'horizontal',
      slidesPerView: 1,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
    });
  }
}

function sliderDestroy() {
  if (slider) {
    slider.destroy();
    slider = null;
  }
}

window.addEventListener("resize", function() {
if (window.matchMedia("(max-width: 767px)").matches) {
  sliderInit();
} else{
  sliderDestroy();
}

});

const slides = document.querySelectorAll(".swiper-slide");
const btn = document.querySelector(".arrow");
const mediaQuery = window.matchMedia("(min-width: 1149px)");

const container = document.querySelector(".swiper-wrapper");

function openSlides() {
    btn.classList.contains("active") ?  container.style.height = "auto" : container.style.height = "200px";
}

btn.addEventListener("click", function() {
    btn.classList.toggle("active");
    openSlides();
    console.log(btn);
});