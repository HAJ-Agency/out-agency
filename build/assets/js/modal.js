/******/ (() => { // webpackBootstrap
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
(function ($) {
  $(function () {
    const $modal = $(".modal");
    $modal.dialog({
      autoOpen: false,
      dialogClass: "no-close",
      modal: true,
      show: true,
      closeText: "",
      clickOutside: true,
      close: function () {
        $("body").removeClass("no-scroll");
      }
    });
    $(document).on("click", ".modal-button", function (e) {
      e.preventDefault();
      $("body").addClass("no-scroll");
      const $widget = $modal.dialog("widget");
      const isOpen = $widget.is(":visible");
      if (isOpen) {
        return;
      }
      let modalContent = '<div class="modal-overlay">';
      modalContent += '<div class="modal-textbox">';
      modalContent += '<div class="align-inside-textbox"><button class="modal-close"></button>';
      modalContent += "<h3>" + $(this).text().trim() + "</h3></div>";
      modalContent += "<p>" + $(this).next().text().trim() + "</p>";
      modalContent += "</div></div>";
      $modal.empty().append(modalContent).dialog("open");
    });
    $(document).on("click", ".modal-close", function () {
      $modal.dialog("close");
    });
    $(document).on("click", ".modal-button-black", function (e) {
      e.preventDefault();
      $("body").addClass("no-scroll");
      const $widget = $modal.dialog("widget");
      const isOpen = $widget.is(":visible");
      if (isOpen) {
        return;
      }
      let modalContent = '<div class="modal-overlay">';
      modalContent += '<div class="modal-textbox-black">';
      modalContent += '<div class="align-inside-textbox"><button class="modal-close-black"></button>';
      modalContent += "<h3>" + $(this).text().trim() + "</h3></div>";
      modalContent += "<p>" + $(this).next().text().trim() + "</p>";
      modalContent += "</div></div>";
      $modal.empty().append(modalContent).dialog("open");
    });
    $(document).on("click", ".modal-close-black", function () {
      $modal.dialog("close");
    });
    $(document).on("click", ".modal-overlay", function (event) {
      if ($(event.target).is(".modal-overlay")) {
        $modal.dialog("close");
      }
    });
  });
})(jQuery);
/******/ })()
;
//# sourceMappingURL=modal.js.map