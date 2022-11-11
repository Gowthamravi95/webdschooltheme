$('.grid').imagesLoaded(function () {
    // init Isotope
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: 1,
        }
    });


});