const toggleSwitches = document.querySelectorAll('input[type="checkbox"]');
const toScoringQuestionsBtn = document.getElementById("to-scroing-question");
const checkToggleBtn = document.getElementById("check-toggle");

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

toScoringQuestionsBtn.addEventListener("click", function () {
  const blockers = document.getElementsByClassName("blockers")[0];
  blockers.style.display = "none";
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