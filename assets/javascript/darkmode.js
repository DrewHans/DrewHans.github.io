/* --- darkmode.js --- */
const supports_local_storage = "localStorage" in window;
const dark_mode_setting = "apply-dark-mode";

function disable_darkmode_stylesheet() {
  document.getElementById("darkmode-stylesheet").disabled = true;
}

function enable_darkmode_stylesheet() {
  document.getElementById("darkmode-stylesheet").disabled = false;
}

function toggle_darkmode() {
  const apply_dark_mode = localStorage.getItem(dark_mode_setting);
  if (apply_dark_mode === "false" || apply_dark_mode === null) {
    localStorage.setItem(dark_mode_setting, "true");
    enable_darkmode_stylesheet();
  } else {
    localStorage.setItem(dark_mode_setting, "false");
    disable_darkmode_stylesheet();
  }
}

/* --- on page load --- */
if (supports_local_storage) {
  const apply_dark_mode = localStorage.getItem(dark_mode_setting);
  if (apply_dark_mode === "true") {
    enable_darkmode_stylesheet();
  } else {
    disable_darkmode_stylesheet();
  }
} else {
  disable_darkmode_stylesheet();
  $("#dark-mode-toggle").hide();
}

$(document).ready(function() {
  /* --- on darkmode button press --- */
  $("#dark-mode-toggle").click(function() {
    if (supports_local_storage) {
      toggle_darkmode();
    }
  });
});
