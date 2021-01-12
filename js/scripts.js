$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-bg");

  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-bg");
  });
});