/* --- main.js --- */
console.info("Hi friend!");
console.info("If you want to view the code for this website, you can \
find the full source on my GitHub at:\n\
https://github.com/DrewHans/DrewHans.github.io");
console.info("I hope you liked my site. Thanks for visiting :)");

/* --- last-update text --- */
if($("#last-update").length) {
    document.getElementById("last-update").innerHTML =
        "&copy; Drew Hans, last update " + document.lastModified + "";
}

/* --- Return-To-Top button --- */
$(document).ready(function() {
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
