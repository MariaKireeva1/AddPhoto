$(document).ready(function(){
    $('.works__slider').slick({
        dots:true,
        slidesToShow: 3,
        infinite: true, 
        centerMode: true, 
        arrows: true,
    });
});

$(document).ready(function(){
    $('.location__slider').slick({
        slidesToShow: 3,
        infinite: true, 
        centerMode: true, 
        arrows: true,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
            }
          },
        ]
    });
});

$(document).ready(function(){
    $('.reviews__slider').slick({
        slidesToShow: 3,
        infinite: true, 
        centerMode: true, 
        arrows: true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 1,
              }
            },
        ]
    });
});

