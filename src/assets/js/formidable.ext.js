(function ($) {
   $(function () {
      if ($(".frm_forms").length) {
         $(".frm_forms").each(function () {
            // Find the label with the text Jag accepterar villkoren
            let label = $(this).find("label:contains('villkoren')");
            if (label.length === 0) {
               return; // No label found, exit early
            }
            let labelParent = label.parent();
            let labelHtml = label.html();
            // the label contains an input field, we need to remove the input field from the label
            let inputField = label.find("input");
            labelHtml = labelHtml.replace(inputField[0].outerHTML, "");
            // wrap the text in a <a> tag with the link to /integritetspolicy but ignore the part that is value="Jag accepterar villkoren
            labelHtml = labelHtml.replace(
               "villkoren",
               '<a target="_blank" style="text-decoration:underline;" href="/integritetspolicy/">villkoren</a>'
            );
            labelParent.prepend(inputField);
            label.html(labelHtml);
         });
      }
   });
})(jQuery);
