/* --- darkmode.js --- */
const supports_local_storage = "localStorage" in window;
const dark_mode_setting = "apply-dark-mode";

/* --- on page load --- */
if (supports_local_storage) {
  const apply_dark_mode = localStorage.getItem(dark_mode_setting);
  if (apply_dark_mode === "true") {
    $("#darkmode-stylesheet").prop("disabled", false);
  }
} else {
  $("#dark-mode-toggle").hide();
}

$(document).ready(function() {

  /* --- on darkmode button press --- */
  $("#dark-mode-toggle").click(function() {
    if (supports_local_storage) {
      const apply_dark_mode = localStorage.getItem(dark_mode_setting);

      if (apply_dark_mode === "false" || apply_dark_mode === null) {
        // turn dark mode on
        $("#darkmode-stylesheet").prop("disabled", false);
        localStorage.setItem(dark_mode_setting, "true");
      } else {
        // turn dark mode off
        $("#darkmode-stylesheet").prop("disabled", true);
        localStorage.setItem(dark_mode_setting, "false");
      }

    }
  });

});
