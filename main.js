jQuery(document).ready(function($){


    // // banner slider---
    $('.banner').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 300,
            settings: {
              infinite: true,
              arrows: false
            }
          },
        ],
        prevArrow: `<button type="button" class="slick-prev"><i class='bx bxs-chevron-left bx-flip-vertical'></i></button>`,
        nextArrow: `<button type="button" class="slick-next"><i class='bx bxs-chevron-left bx-flip-horizontal'></i></button>`
    });


    //cleaning section slider---
    
$('.cleaning .cleaning-block .card-holder').slick({
    dots: true,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    draggable: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
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
      },
      
    ]
  });


    // quote block slider---
    $('.quote-block').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: `<button type="button" class="slick-prev"><i class='bx bxs-chevron-left bx-flip-vertical'></i></button>`,
        nextArrow: `<button type="button" class="slick-next"><i class='bx bxs-chevron-left bx-flip-horizontal'></i></button>`
    });


    // selected project slider---
    $('.selected-project-card-holder').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',
        responsive: [
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
 


    // // $('.selected-project-card-holder').slick({
    // // 	infinite: true,
    // // 	slidesToShow: 3,
    // // 	slidesToScroll: 3,
    // // 	arrows: false
    // });

    let range = document.querySelector(".range");
    let basicService = document.querySelector(".service-card-holder .card p");

    range.addEventListener( "input", () => {
       let rangeValue = range.value;
       basicService.innerText = rangeValue
    });


    let text = document.querySelector(".simple-plan .feet-select .text");


})