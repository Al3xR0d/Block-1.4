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

const btn = document.querySelector(".arrow");
const container = document.querySelector(".swiper");

btn.addEventListener("click", function() {
    btn.classList.toggle("active");
    container.classList.toggle("swiper--active");

});
