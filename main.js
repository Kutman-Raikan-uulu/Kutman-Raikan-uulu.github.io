//----------------------------User-information----------------------------
let username = "";
let userSurname = "";
let userAddress = "";
let userEmail = "";
let userText = "";
// //------------------------------------------------------------------------
let menuUl = document.querySelector("#show-menu");
let menuBox = document.querySelector(".menu-box");
let inputFocus = document.querySelectorAll("input");
let label = document.querySelectorAll("label");
let email = document.querySelector(".email");
let containerAllPages = document.querySelector(".container");
let submitButton = document.querySelector("#submit");
let downButton = document.querySelector("#down");
let upButton = document.querySelector("#up");
let boll = false;
let body = document.querySelector("body");
let linkInFooter = document.querySelector("footer a");
let lineSkill = document.querySelectorAll("div.line");
let skillsValue = document.querySelectorAll(".line div");
let textarea = document.querySelector("form textarea");
let linkMailto = document.querySelector("form a");

email.addEventListener("change", function() {
  email.className = "mail";
});

for (let i = 0; i < inputFocus.length; i++) {
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

const anchors = document.querySelectorAll('a[href^="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href");

    if (anchor.getAttribute("href") === "#") {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}

const navLinks = document.querySelectorAll("nav a");
let activeLink = navLinks[0];

navLinks.forEach(function(navLink) {
  navLink.addEventListener("click", function(event) {
    // Deactivate current page

    navLink.className = "active";

    activeLink.className = "";
    // Set new page
    activeLink = this;

    // Activate new page
    activeLink.className = "active";

    event.preventDefault();
  });
});
/* этот код помечает картинки, для удобства разработки */
let i = 1;
for (let li of carousel.querySelectorAll("li")) {
  li.style.position = "relative";
  li.insertAdjacentHTML(
    "beforeend",
    `<span style="position:absolute;left:0;top:0">${i}</span>`
  );
  i++;
}

/* конфигурация */
let width = 500; // ширина картинки
let count = 1; // видимое количество изображений

let list = carousel.querySelector("ul");
let listElems = carousel.querySelectorAll("li");

let position = 0; // положение ленты прокрутки

carousel.querySelector(".prev").onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0);
  list.style.marginLeft = position + "px";
};

carousel.querySelector(".next").onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + "px";
};
$(".js-input").keyup(function() {
  if ($(this).val()) {
    $(this).addClass("not-empty");
  } else {
    $(this).removeClass("not-empty");
  }
});
