document.addEventListener("DOMContentLoaded", () => {
  var validateClick = 0; // Изначально значение переменной равно 0

  function getValidateClick() {
    if (validateClick == 0) {
      validateClick = 0;
      console.log("validateClick равен 0");
    } else {
      validateClick = 1;
      console.log("validateClick = " + validateClick);
    }
  }
// проверка была ли нажата кнопка загрузки, или кнопка закрытия превью
  document.querySelector(".primary").addEventListener("click", function () {
    validateClick = 1;
    const clickRemove = document.querySelectorAll(".preview-remove");
    clickRemove.forEach((clickRemove) => {
      clickRemove.addEventListener("click", () => {
        validateClick = 0;
        console.log("validateClick = " + validateClick);
      });
    });
    getValidateClick(); // Вызываем функцию для проверки значения переменной
  });

  var validateReply = document.getElementById("submitButton");

  // Обработчик события клика по кнопке комментировать
  validateReply.addEventListener("click", function (event) {

    var textarea = document.getElementById("message").value;

      // Получаем все элементы с указанным классом
      var overalMessages = document.getElementsByClassName('text-field__messages');
      
      // Проходимся по каждому элементу
      for (var i = 0; i < overalMessages.length; i++) {
        var hideMessage = overalMessages[i];
      
        // Добавляем свойство display: none
        hideMessage.style.display = 'none';
      }
    // Проверить условия валидации
    if (validateClick === 1 && textarea !== "") {
      const messageSubmit = document.querySelector(
        ".text-field__submit--success");
      messageSubmit.style.display = "block";
      console.log("Ответ отправлен");

    } else if (textarea === "" && validateClick === 0) {
      const errorMain = document.querySelector(".text-field__main--error");
      errorMain.style.display = "block";
      console.log("Добавьте сообщение и загрузите изображение");

    } else if (textarea === "") {
      const errorAnswer = document.querySelector(".text-field__answer--error");
      errorAnswer.style.display = "block";
      console.log("Добавьте сообщение");

    } else if (validateClick === 0) {
      const errorImg = document.querySelector(".text-field__img--error");
      errorImg.style.display = "block";
      console.log("Загрузите изображение");
    }

  });
  console.log(validateClick);
});


