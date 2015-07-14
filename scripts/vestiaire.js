jQuery(function($){

    'use strict';

    var VESTIAIRE = window.VESTIAIRE || {};

    /* Initialize the slider
    ---------------------------------------------------------------------------------------------------- */

    VESTIAIRE.caroussel = function(){

        var slider     = $(".slider");

        slider.owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            responsiveClass: true,
            responsive: {
                0:  { items: 1 },
                900:{ items: 4 },
            },
        })

        $(document).on('click', '.slider-navigation-btn-next', function(){
            slider.trigger('next.owl.carousel');
        })

        $(document).on('click', '.slider-navigation-btn-prev', function(){
            slider.trigger('prev.owl.carousel');
        })


    }

    /* Hit'n Run
    ---------------------------------------------------------------------------------------------------- */

    $(function() {
        VESTIAIRE.caroussel();
    });

})