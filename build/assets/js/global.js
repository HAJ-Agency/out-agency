/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./src/assets/js/global.js ***!
  \*********************************/
(function ($) {
  $(function () {
    // Convert inline min-height: Xvh to min-height: Xpx for iOS compatibility
    $('[style*="min-height"]').each(function () {
      var styleAttr = this.getAttribute('style');
      // Replace all min-height: Xvh with min-height: Xpx (handles multiple cases)
      var newStyle = styleAttr.replace(/min-height\s*:\s*(\d+(\.\d+)?)vh/gi, function (match, num) {
        return 'min-height:calc(' + window.innerHeight * 0.01 * num + 'px - var(--header-height))';
      });
      if (styleAttr !== newStyle) {
        this.setAttribute('style', newStyle);
      }
    });
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=global.js.map