jQuery(document).ready(function () {

    // Navigation
    //------------------------------------------------------
    $('.js-open-nav').click(function () {
        if ($('.js-nav').hasClass('nav--small')) {
            $('.js-logo').removeClass('logo--imago');
            $('.js-nav').removeClass('nav--small');
        } else {
            $('.js-nav').addClass('nav--small');
            $('.js-logo').addClass('logo--imago');
        }

        $(this).toggleClass('nav__button--active');

    });

    // Card
    //------------------------------------------------------
    $('.js-card-action').click(function () {
        const card = $(this).closest('.js-card');
        const description = card.find('.js-card-description');
        const isExpanded = card.hasClass('js-card-expand');

        $('.js-card').removeClass('js-card-expand');
        $('.js-card-description').slideUp();

        if (!isExpanded) {
            card.addClass('js-card-expand');
            description.slideDown();
        }
    });

    // Dropdown
    //------------------------------------------------------

    $('.js-open-dropdown').click(function (event) {
        event.stopPropagation();
        const dropdown = $(this).next('.js-dropdown');
        dropdown.toggle();
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('.card__item--action').length) {
            $('.js-dropdown').hide();
        }
    });

    $('.js-dropdown').click(function (event) {
        event.stopPropagation();
    });

    // Remplace [IMG] for svg
    //------------------------------------------------------
    $(document).ready(function () {
        $('img[src$=".svg"]').each(function () {
            var imgSource = $(this);
            var imgURL = imgSource.attr('src');
            $.get(imgURL, function (data) {
                var svgSource = $(data).find('svg');
                if (imgSource.attr('id')) {
                    svgSource.attr('id', imgSource.attr('id'));
                }
                svgSource.removeAttr('xmlns:a');
                imgSource.replaceWith(svgSource);
            }, 'xml');
        });
    });
});

// js-card