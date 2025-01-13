jQuery(document).ready(function($){


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
        dotsClass: 'slick-dots'
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