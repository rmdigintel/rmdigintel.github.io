const toggleSwitches = document.querySelectorAll('input[type="checkbox"]');
const toScoringQuestionsBtn = document.getElementById("to-scoring-question");
const checkToggleBtn = document.getElementById("check-toggle");
const addBlockerButton = document.getElementById("add-blocker-btn");

toggleSwitches.forEach(function(toggleSwitch) {
  toggleSwitch.addEventListener("change", function() {
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



// const addButton = document.getElementById('add-button');
//     const radioGroup = document.getElementById('radio-group');

//     addButton.addEventListener('click', function() {
//       const newRadio = document.createElement('input');
//       newRadio.type = 'radio';
//       newRadio.name = 'option';
//       newRadio.value = 'option' + (radioGroup.children.length + 1);

//       const newLabel = document.createElement('label');
//       newLabel.appendChild(newRadio);
//       newLabel.appendChild(document.createTextNode(' Option ' + (radioGroup.children.length + 1)));

//       radioGroup.appendChild(newLabel);
//     });

addBlockerButton.addEventListener("click", function () {
  // const result = prompt("Введите вопрос-блокатор", ["Возраст"]);
  const elem = document.getElementById('row-example');
  const clone = elem.cloneNode(true);
  clone.style.display = "block";
  $('#blockers-rows').append(clone);
});


// удаляем ненужные элементы на странице скоринговых вопросов
toScoringQuestionsBtn.addEventListener("click", function () {
  const needToHide = toScoringQuestionsBtn.innerText === "Далее" ? "blockers" : "scoring-questions";
  const needToShow = toScoringQuestionsBtn.innerText === "Далее" ? "scoring-questions" : "blockers";
  toScoringQuestionsBtn.innerText = toScoringQuestionsBtn.innerText === "Далее" ? "Назад" : "Далее";
  const hide = document.getElementsByClassName(needToHide);
  Array.prototype.forEach.call(hide, elem => {
      elem.style.display = "none";
    })
  const show = document.getElementsByClassName(needToShow);
  Array.prototype.forEach.call(show, elem => {
    elem.style.display = "block";
  })
  // const blockers = document.getElementsByClassName("blockers");
  // const scoringQuestions = document.getElementsByClassName("scoring-questions");
  // Array.prototype.forEach.call(blockers, blocker => {
  //   blocker.style.display = "none";
  // })
  
  // Array.prototype.forEach.call(scoringQuestions, scoringQuestion => {
  //   scoringQuestion.style.display = "block";
  // })
});



// // checkToggleBtn.addEventListener("click", function () {
// //     toggleSwitches.forEach(function (toggleSwitch) {
// //         if (toggleSwitch.checked) {
// //             console.log(`Toggle switch ${toggleSwitch.id} is on`);
// //         } else {
// //             console.log(`Toggle switch ${toggleSwitch.id} is off`);
// //         }
// //     });
// // });

// let tg = window.Telegram.WebApp;
// tg.expand(); //расширяем на все окно  

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

checkToggleBtn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
  tg.sendData("Данные заполнены"); 
  tg.close();
});