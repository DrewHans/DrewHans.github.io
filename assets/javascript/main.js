/* --- main.js --- */
$(document).ready(function() {

  /* --- last-update text --- */
  if($("#last-update").length) {
      document.getElementById("last-update").innerHTML =
          "&copy; Drew Hans, last update " + document.lastModified + "";
  }

  /* --- Return-To-Top button --- */
  // when page is scrolled
  $(window).scroll(function() {
    // if page is scrolled 300px or more from top
    if ($(this).scrollTop() >= 300) {
      // fade in the arrow
      $("#return-to-top").fadeIn(200);
    } else {
      // else fade out the arrow
      $("#return-to-top").fadeOut(200);
    }
  });

  // when return-to-top is clicked
  $("#return-to-top").click(function() {
    // scroll to top of body
    $("body,html").animate(
      {
        scrollTop: 0
      },
      500 // animation speed in milliseconds
    );
  });

});
