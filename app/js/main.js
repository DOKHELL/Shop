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
window.onclick = function (event) {
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

function cartfancy() {
	$("#search-fancy").on('click', function () {
		$.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
	});
}
function initHolderBg2() {
	"use strict";
	$('.bg-image').each(function () {
		var imgHolder = $(this),
			img = imgHolder.find('img'),
			imgSrc = img.attr('src');
		if (!!imgHolder.length && !!img.length && !!imgSrc) {
			imgHolder.css({
				backgroundImage: 'url(' + imgSrc + ')',
				backgroundSize: 'cover',
				backgroundPosition: '50% 50%',
				backgroundRepeat: 'no-repeat',
				height: '400px'
			});
			img.remove();
		}
	});
};


$(function () {
	$(".galery-slide").slick({
		autoplay: false,
		dots: true,
		infinite: false,
		prevArrow: '<button type="button" onclick="method1()" id="slick-btn1 slick-prev"></button>',
		nextArrow: '<button type="button" onclick="method1()" id="slick-btn2 slick-next"></button>',
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).data('thumb');
			return '<a><img src="'+thumb+'"></a>';
		},
	});
	  var trueHeight,
		  trueWidth,
		  img;
	  $('.product-info .slick-slide').hover(function(e){
	   
		img = $(this).find('img');
		trueHeight = img.height();
		trueWidth = img.width();
		var imgHeight = img.prop('naturalHeight');
		var imgWidth = img.prop('naturalWidth');
	   
		img.height(imgHeight);
		img.width(imgWidth);
		
		$(this).mousemove(function(e) {
	
		   var cursor_position = {
		  x: e.clientX - $(this).offset().left + $(window).scrollLeft(), // Положение курсора слева
		  y: e.clientY - $(this).offset().top + $(window).scrollTop() // Положение курсора сверху
		   },
		imagebox__img = img,
		image_position = {
		  left: ((cursor_position.x / $(this).innerWidth()) * imagebox__img.width() - cursor_position.x) * -1, // Вычисляем позицию картинки слева
		  top: ((cursor_position.y / $(this).innerHeight()) * imagebox__img.height() - cursor_position.y) * -1 // Вычисляем позицию картинки сверху
		}
		imagebox__img.css({
		  position: 'absolute', 
		  top: image_position.top, 
		  left: image_position.left
		});
	
		  
		  });
	  }, function(){
		
		 img.css({'position': 'relative', 'top': 0,'left': 0});
		 img.height(trueHeight);
		 img.width(trueWidth);
		
	  });
	});


	function sliderDots() {
		$('.galery-slide .slick-dots').slick({
			arrows: true,
			slidesToShow: 3,
			slidesToSlide: 1,
			infinite: false,
			dots: false,
			prevArrow: '<button type="button" onclick="method2();" id="slick-btn3 slick-prev"></button>',
			nextArrow: '<button type="button" onclick="method2();" id="slick-btn4 slick-next"></button>',
		});
	};











//Widget
//del
function pageWidget(pages) {
	var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
	widgetWrap.prependTo("body");
	for (var i = 0; i < pages.length; i++) {
		$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
	}
	var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:absolute;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
	widgetStilization.prependTo(".widget_wrap");
}

//Runs
$(document).ready(function () {
	slider();
	initHolderBg();
	sliderProduct();
	matchheight();
	initHolderBg2();
	cartfancy();
	sliderDots();
	$("#slick-btn1,#slick-btn2").click(function(){
		method1();
		return false;
	 });
	pageWidget(['index', 'ico', 'product-page']); ///////////delll
});
