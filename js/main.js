$('.owl-carousel').owlCarousel({
    loop:true, //efeito de loop
    margin:10, //distancia de um filme e outro
    nav:false, //botão de navegação
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})