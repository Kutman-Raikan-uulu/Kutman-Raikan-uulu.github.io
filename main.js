const navLinks = document.querySelectorAll("nav a");
const articles = document.querySelectorAll("content-article");

let activeLink = navLinks[0]; // Home

navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function(event) {
    // Deactivate current page

    const urlParts = activeLink.href.split("#");
    const afterHashtag = urlParts.pop();
    const oldArticle = document.getElementById(afterHashtag);
    oldArticle.className = "";

    // Set new page
    activeLink = this;

    // Activate new page
    activeLink.className = "content-active";
    document.getElementById(activeLink.href.split("#").pop()).className =
      "content-active";

    event.preventDefault();
  });
});

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $("nav").addClass("black");
  } else {
    $("nav").removeClass;
  }
});
