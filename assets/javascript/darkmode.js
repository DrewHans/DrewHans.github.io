/* --- darkmode.js --- */
const dark_mode_stylesheet_link = $('<link rel="stylesheet" href="/assets/stylesheets/darkmode.css" />');
const supports_local_storage = "localStorage" in window;
const dark_mode_setting = "apply-dark-mode";

/* --- on page load --- */
if (supports_local_storage) {
  const apply_dark_mode = localStorage.getItem(dark_mode_setting);
  if (apply_dark_mode === true) {
    $("head").append(dark_mode_stylesheet_link);
  }
} else {
  $("#dark-mode-toggle").hide();
}

/* --- on darkmode button press --- */
$("#dark-mode-toggle").click(function() {
  if (supports_local_storage) {
    const apply_dark_mode = localStorage.getItem(dark_mode_setting);

    if (apply_dark_mode === false || apply_dark_mode === null) {
      // turn dark mode on
      $("head").append(dark_mode_stylesheet_link);
      localStorage.setItem(dark_mode_setting, true);
    } else {
      // turn dark mode off
      dark_mode_stylesheet_link.remove();
      localStorage.setItem(dark_mode_setting, false);
    }

  }
});
