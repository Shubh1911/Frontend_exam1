(function ($, Drupal) {
  Drupal.behaviors.mySlickSlider = {
    attach: function (context, settings) {
      // Initialize Slick Slider on the wrapper element.
      $(".view-id-banner.view-display-id-page_1 .view-content").slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow:
          '<span class="Slick-Prev arrow"><i class="fa-solid fa-chevron-left"></i></span>',
        nextArrow:
          '<span class="Slick-Next arrow"><i class="fa-solid fa-chevron-right"></i></span>',
      }),
			$('.match_details--name:contains("India"), .match_details--name:contains("IND")').each(function() {
				$(this).closest('.banner_div').find('.hash_tag').css('display', 'block');
			});
    },
  };
})(jQuery, Drupal);
