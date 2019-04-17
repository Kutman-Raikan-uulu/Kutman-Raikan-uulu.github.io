const navLinks = document.querySelectorAll("nav a");
const articles = document.querySelectorAll("content-article");

let activeLink = navLinks[0]; // Home

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
    activeLink.className = "";
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
$(function() {
  $("#form").validate({
    // используем id формы (можно использовать и имя класса)
    rules: {
      // описываем правила проверки полей формы

      name: {
        // указываем имя поля, для которого вводятся правила

        required: true, // в поле должно быть введено значение

        minlength: 3 // устанавливаем минимальную длину значения поля
      },

      company: {
        required: true
      },

      phone: {
        required: true,

        number: true, // значение поля должно быть десятичным целым числом

        minlength: 6
      },

      email: {
        required: true,

        email: true // значение поля должно иметь правильный формат адреса email
      },

      message: {
        required: true
      }
    },

    messages: {
      // устанавливаем сообщения для пользователя

      name: {
        required: "Данное поле должно быть заполнено!",

        minlength: "Минимальная длина: 3"
      },

      company: {
        required: "Данное поле должно быть заполнено!"
      },

      phone: {
        required: "Данное поле должно быть заполнено!",

        number: "Неправильный формат номера телефона",

        minlength: "Минимальная длина: 6"
      },

      email: "Неправильный формат адреса e-mail",

      message: {
        required: "Данное поле должно быть заполнено!"
      }
    },

    success: function(label) {
      // Устанавливаем класс OK для сообщения об ошибке выключаем его через 2 секунды

      label
        .html("OK")
        .removeClass("error")
        .addClass("ok");

      setTimeout(function() {
        label.fadeOut(500);
      }, 2000);
    }
  });
});
let sendBtn = document.querySelector(".sendBtn");
sendBtn.addEventListener("click", sendLetter);
function sendLetter() {
  const user = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    letter: document.querySelector("#textarea").value
  };

  if (user.name.length > 5 && user.email.length > 5 && user.letter.length > 5) {
    axios
      .post(
        "https://my-personal-9e097.firebaseio.com/contacts.json",
        // name: "Islam",
        // email: "islamsydykov",
        // letter: "lakjd;fkjas"

        user
      )
      .then(response => {
        alert("Success");
      })
      .catch(error => {
        alert("error");
      });
  } else {
    alert("Fill all the data, please");
  }
}
