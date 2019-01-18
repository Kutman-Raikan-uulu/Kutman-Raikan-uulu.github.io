const navLinks = document.querySelectorAll('nav a');
const articles = document.querySelectorAll('article');

let activeLink = navLinks[0]; // Home

navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function(event) {
    // Deactivate current page
    activeLink.className = "";
    const urlParts = activeLink.href.split('#');
    const afterHashtag = urlParts.pop();
    const oldArticle = document.getElementById(afterHashtag);
    oldArticle.className = "";

    // Set new page
    activeLink = this;

    // Activate new page
    activeLink.className = "active";
    document
      .getElementById(activeLink.href.split('#').pop())
      .className = "active";

    event.preventDefault();
  });
});