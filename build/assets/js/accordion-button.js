/******/ (() => { // webpackBootstrap
/*!*******************************************!*\
  !*** ./src/assets/js/accordion-button.js ***!
  \*******************************************/
(function ($) {
  $(function () {
    const $accordion = $(".accordion");
    $accordion.accordion({
      collapsible: true,
      header: ".fixed-button",
      active: false
    });
    $(document).on("click", ".fixed-button", function (e) {
      e.preventDefault();
      $(this).toggleClass("is-open");
    });
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=accordion-button.js.map