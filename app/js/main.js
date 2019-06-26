function slider() {
	$('.slider__wrap').slick({
		arrows: true,
		dots: true,
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	});
};

function sliderProduct() {
	$('.product-slide').slick({
		arrows: true,
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
	});
};

function initHolderBg() {
	"use strict";
	$('.slider__wrap .slider-item .slider-item__img').each(function () {
		var imgHolder = $(this),
			img = imgHolder.find('img'),
			imgSrc = img.attr('src');
		if (!!imgHolder.length && !!img.length && !!imgSrc) {
			imgHolder.css({
				backgroundImage: 'url(' + imgSrc + ')',
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
				backgroundRepeat: 'no-repeat',
				height: '100%'
			});
			img.remove();
		}
	});
};
function dropdowns() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
  
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function matchheight() {
	$(".matchheight-h").matchHeight();
	$(".matchheight-w").matchHeight();
  }
//Runs
$(document).ready(function () {
	slider();
	initHolderBg();
	sliderProduct();
	matchheight();
});
