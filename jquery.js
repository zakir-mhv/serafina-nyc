$(document).ready(function () {
  // Navbar stuff
  
  // On desktop devices
  // Adding or Removing active class to navbar items
  $('nav li a').click(function(){
    $('nav li a').removeClass("active");
    $(this).addClass("active");
  });

  $('#btnMenu').click(function(){
    $('nav li a').removeClass("active");
    $('#linkMenu').addClass("active");
  });

  // On mobile devices
  // Open or Close navigation menu
  $("#nav-menu-icon").click(function () {
    $("nav").toggleClass("nav-toggle");
  });

  // Close navigation menu when one of the pages' sections is clicked
  $("nav ul li a").click(function () {
    $("nav").removeClass("nav-toggle");
  });
});
