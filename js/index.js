$(document).ready(function(){
  $(".main-slider").owlCarousel({
    loop:true,
    responseClass: true,
    nav:false,
    responsive:{
        0:{
            items:1,
            loop:false,
            dots:false,
            nav:true
        },
        760: {
            nav:false, 
            items:1
        },
      
        1200: {
            nav: true,
            items:1
        }
    }
  });

  $(".second-slider__style").owlCarousel({
    loop:true,
    nav:true,
    margin:10,
    responsive:{
      0:{
        items: 1  
      },
      760:{
        items: 2
      },
      1200:{
        nav: true,
        items: 3
      }
    }
  })

});


$('.click').click(function () {
  $('.navigation-xs').removeClass("hide");
});

$('.navigation-xs__close').click(function () {
  $('.navigation-xs').addClass("hide");
}); 



