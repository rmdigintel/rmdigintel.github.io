const toggleSwitches = document.querySelectorAll('input[type="checkbox"]');
const toScoringQuestionsBtn = document.getElementById("to-scoring-question");
const checkToggleBtn = document.getElementById("start-toggle");
const addOpenButton = document.getElementById("add-open-btn");

toggleSwitches.forEach(function (toggleSwitch) {
  toggleSwitch.addEventListener("change", function () {
    const closestRow = this.closest('.row'); // получаем родительский элемент - row 
    const closestInput = closestRow.getElementsByClassName("input")[0];
    if (this.checked) {
      if (closestInput) closestInput.style.display = 'block';
      console.log(`Toggle switch ${this.id} is on`);
    } else {
      if (closestInput) closestInput.style.display = 'none';
      console.log(`Toggle switch ${this.id} is off`);
    }
  });
});

function post(id) {
  console.log(id)
  // id = ""
  if (id) {
    let url = "https://api.telegram.org/<token>/sendMessage";
    let options = {
      // dataType: "json",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
        "chat_id": id,
        "text": "Данные заполнены",
        "reply_markup": ""
      })
    };
    let promise = fetch(url, options);
  }
}

addOpenButton.addEventListener("click", function () {
  const result = prompt("Введите вопрос-блокатор", ["вопрос"]);
  if (result && result !== "вопрос") {
    const elem = document.getElementById('row-example');
    console.log(elem)
    const clone = elem.cloneNode(true);
    clone.removeAttribute('id');
    clone.querySelector('h3').textContent = result;
    clone.querySelector('input').setAttribute("id", `${result}-toggle`);
    console.log(clone);
    // clone.querySelector(".parameter").setAttribute("id", `parameter-${result}`);
    // clone.querySelector(".input").setAttribute("id", `parameter-${result}-radio`);
    $('#open-rows').append(clone);
  }
});


// // удаляем ненужные элементы на странице скоринговых вопросов
// toScoringQuestionsBtn.addEventListener("click", function () {
//   const needToHide = toScoringQuestionsBtn.innerText === "Далее" ? "blockers" : "scoring-questions";
//   const needToShow = toScoringQuestionsBtn.innerText === "Далее" ? "scoring-questions" : "blockers";
//   toScoringQuestionsBtn.innerText = toScoringQuestionsBtn.innerText === "Далее" ? "Назад" : "Далее";
//   const hide = document.getElementsByClassName(needToHide);
//   Array.prototype.forEach.call(hide, elem => {
//     elem.style.display = "none";
//   })
//   const show = document.getElementsByClassName(needToShow);
//   Array.prototype.forEach.call(show, elem => {
//     elem.style.display = "block";
//   })
// });

// // checkToggleBtn.addEventListener('click', function () { //вешаем событие на нажатие html-кнопки
// //     toggleSwitches.forEach(function (toggleSwitch) {
// //         if (toggleSwitch.checked) {
// //             console.log(`Toggle switch ${toggleSwitch.id} is on`);
// //         } else {
// //             console.log(`Toggle switch ${toggleSwitch.id} is off`);
// //         }
// //     });
// //     alert(JSON.stringify(tg.initDataUnsafe));
// //     // let url = "https://api.telegram.org/<token>/sendMessage";
// //     // let options = {
// //     //     // dataType: "json",
// //     //     method: 'POST',
// //     //     headers: {
// //     //         'Content-Type': 'application/json;charset=utf-8'
// //     //     },
// //     //     body: JSON.stringify({
// //     //         "chat_id": tg.initDataUnsafe.user.id,
// //     //         "text": "Данные заполнены",
// //     //         "reply_markup": ""
// //     //     })
// //     // };
// //     // let promise = fetch(url, options);
// //     tg.sendData("Данные заполнены"); 

// //     tg.close();
// // });


let tg = window.Telegram.WebApp;
tg.expand(); //расширяем на все окно  

checkToggleBtn.addEventListener('click', function () { //вешаем событие на нажатие html-кнопки
  // post(tg.initDataUnsafe.user.id);
  tg.sendData("Данные заполнены");
  tg.close();
});