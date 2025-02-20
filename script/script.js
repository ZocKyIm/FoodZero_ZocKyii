$(document).ready(function () {
  $("a.scrollto").click (function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
    scrollTop: destination
  }, 1000);
  return false;
  });
});


$('.slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {

  $(".num").text(slick.slickCurrentSlide() + 1)
  $(".amnt").text(slick.slideCount)

});

// read_more
function read_more() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn-read");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Collapse";
    moreText.style.display = "flex";
  }
}


$(document).ready(function () {

  $('.our-works-slider').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    appendArrows: ".our-works-slider__navigation",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ]
  });


/*install counter*/
$('.our-works-slider').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
  let counter = slick.slickCurrentSlide() + 1 + " / " + slick.slideCount;
  $(".our-works-slider__counter").text(counter);
});

// myMap
function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.2),
      zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

// scrollup

$(function() {
  // при нажатии на кнопку scrollup
   $('.scrollup').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.scrollup').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.scrollup').fadeOut();
  }
});
});


