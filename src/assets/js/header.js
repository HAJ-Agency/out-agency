(function ($) {
   $(function () {
      var headerHeight = $('header').outerHeight();
      $(':root').css('--header-height', headerHeight + 'px');

      $('.wp-block-button.is-style-menu-btn').each(function () {
         $(this).on('click', function () {
            $(this).toggleClass('open');
            $('nav.header-navigation').toggleClass('open');
            if (!$('nav.header-navigation').hasClass('open')) {
               setTimeout(function () {
                  $('nav.header-navigation').css('visibility', 'hidden');
               }, 200);
            } else {
               $('nav.header-navigation').css('visibility', 'visible');
            }
         });
      });
      // on click outside of nav.header-navigation, close the menu
      $(document).on('click', function (e) {
         if (
            !$(e.target).closest(
               'nav.header-navigation .wp-block-navigation__container, .wp-block-button.is-style-menu-btn ',
            ).length &&
            $(e.target) !==
               $('nav.header-navigation .wp-block-navigation__container')
         ) {
            $('.wp-block-button.is-style-menu-btn').removeClass('open');
            $('nav.header-navigation').removeClass('open');
            setTimeout(function () {
               $('nav.header-navigation').css('visibility', 'hidden');
            }, 200);
         }
      });
   });
})(jQuery);
