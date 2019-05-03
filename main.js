const navLinks = document.querySelectorAll("nav a");
const articles = document.querySelectorAll("content-article");

let activeLink = navLinks[0]; // Home
let textarea = document.querySelector("form textarea");
let linkMailto = document.querySelector("form a");
let inputFocus = document.querySelectorAll("input");
let label = document.querySelectorAll("label");
let email = document.querySelector(".email");
let submitButton = document.querySelector("#submit");
let downButton = document.querySelector("#down");
let upButton = document.querySelector("#up");

navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function(event) {
    // Deactivate current page

    const urlParts = activeLink.href.split("#");
    const afterHashtag = urlParts.pop();
    const oldArticle = document.getElementById(afterHashtag);
    oldArticle.className = "active";

    activeLink.className = "";
    // Set new page
    activeLink = this;

    // Activate new page
    activeLink.className = "active";
    document.getElementById(activeLink.href.split("#").pop()).className =
      "content-active";

    event.preventDefault();
  });
});

$(document).ready(function() {
  $(".menu-icon, nav ul").on("click", function() {
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
$(".home-bg").on("click", "a", e =>
  $("#it").attr("class", $(e.target).attr("id"))
);

email.addEventListener("change", function() {
  email.className = "mail";
});

for (var i = 0; i < inputFocus.length; i++) {
  let parentInput = inputFocus[i].parentElement;

  inputFocus[i].addEventListener("input", function(event) {
    if (this.value.length > 0) {
      parentInput.classList.add("visible");
      parentInput.classList.remove("hidden");
    } else {
      parentInput.classList.add("hidden");
      parentInput.classList.remove("visible");
    }

    if (event.path[0].id == "name") {
      username = this.value;
    } else if (event.path[0].id == "surname") {
      userSurname = this.value;
    } else if (event.path[0].id == "address") {
      userAddress = this.value;
    } else if (event.path[0].id == "email") {
      userEmail = this.value;
    }
  });

  inputFocus[i].addEventListener("change", function() {
    if (this.value.length > 0) {
      parentInput.classList.add("good");
      parentInput.classList.remove("hidden");
      parentInput.classList.add("visible");
    } else {
      parentInput.classList.add("mistake");
      parentInput.classList.remove("good");
      parentInput.classList.add("visible");
    }
  });
}

textarea.addEventListener("input", function() {
  userText = this.value;
});

linkMailto.addEventListener("click", function() {
  linkMailto.href = "mailto:nurjigit.melis.uulu@gmail.com?subject=" + userText;
});
