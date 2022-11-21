$(window).on('load', function () {
    // Initialize Isotope
    $('#isotope-container').isotope({
        // options here...
    });

    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        // Get filter value
        var filterValue = $(this).attr('data-filter');

        // Filter portfolio Items
        $('#isotope-container').isotope({
            // options here...
            filter: filterValue
        });

        // active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});