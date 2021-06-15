console.log('file 1');
$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,

    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

 /*  function sliderHandler(price) {
    calculate
    if (price === undefined) {
      price = srvPrices;
    }

   var persents = (price.totalS1 * 12000) + (price.totalS2 * 1070) + (price.totalS3 * 40000) + (price.totalS4 * 21000);
   var profit = persents * 0.3;
    document.getElementById("s1").innerHTML = persents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей';
    document.getElementById("s2").innerHTML = profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей';
 } */

 var srvPrices = {}
 var c1 = document.getElementById("s3-check1");
 var c2 = document.getElementById("s3-check2");


 function sliderHandler(price) {
  //calculate
 // if (price === undefined) {
 //  price = srvPrices;
 // } 

  // var persents = (price.totalS1 * 12000) + (price.totalS2 * 1070) + (price.totalS3 * 40000) + (price.totalS4 * 21000);
  // var profit = persents * 0.3;
  // document.getElementById("s1").innerHTML = persents.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей';
  // document.getElementById("s2").innerHTML = profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' ' + 'рублей'; //
}

var srvPrices = {}
var c1 = document.getElementById("s3-check1");
var c2 = document.getElementById("s3-check2");


$(".range1").ionRangeSlider({
 from: 3,
 grid: false,
 values: [5,7,10,13,15],
 onChange: function (data) {
   srvPrices.totalS1 = data.from_value;
   sliderHandler(srvPrices)
 },
 onStart: function(data) {
   srvPrices.totalS1 = data.from_value;
   sliderHandler(srvPrices)
 }
});  
$(".range2").ionRangeSlider({
  from: 2,
  grid: false,
  values: [30,50,70,90,110],
  onChange: function (data) {
  srvPrices.totalS2 = data.from_value;
  sliderHandler(srvPrices)
  },
  onStart: function(data) {
  srvPrices.totalS2 = data.from_value;
  sliderHandler(srvPrices)
  }
});
$(".range3").ionRangeSlider({
  from: 5,
  grid: false,
  values: [10,14,18,22,26],
  onChange: function (data) {
  srvPrices.totalS3 = data.from_value;
  sliderHandler(srvPrices)
  },
  onStart: function(data) {
  srvPrices.totalS3 = data.from_value;
  sliderHandler(srvPrices)
  }
});
$(".range4").ionRangeSlider({
  from: 10,
  grid: false,
  values: [2,4,6,8,10],
  onChange: function (data) {
  srvPrices.totalS4 = data.from_value;
  sliderHandler(srvPrices)
  },
  onStart: function(data) {
  srvPrices.totalS4 = data.from_value;
  sliderHandler(srvPrices)
  }
});
$(".range5").ionRangeSlider({
  from: 10,
  grid: false,
  values: [2,4,6,8,10],
  onChange: function (data) {
  srvPrices.totalS4 = data.from_value;
  sliderHandler(srvPrices)
  },
  onStart: function(data) {
  srvPrices.totalS4 = data.from_value;
  sliderHandler(srvPrices)
  }
});
$(".range6").ionRangeSlider({
  from: 10,
  grid: false,
  values: [2,4,6,8,10],
  onChange: function (data) {
  srvPrices.totalS4 = data.from_value;
  sliderHandler(srvPrices)
  },
  onStart: function(data) {
  srvPrices.totalS4 = data.from_value;
  sliderHandler(srvPrices)
  }
});

$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header__nav-mobile').toggleClass('open');
        $('body').toggleClass('fixed-page');
	});
});