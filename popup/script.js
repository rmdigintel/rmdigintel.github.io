// const toggleSwitch = document.getElementById("toggle-switch");
// toggleSwitch.addEventListener("change", function() {
//   if (this.checked) {
//     console.log("Toggle switch is on");
//   } else {
//     console.log("Toggle switch is off");
//   }
// });

const toggleSwitches = document.querySelectorAll('input[type="checkbox"]');
const checkToggleBtn = document.getElementById("check-toggle");

// toggleSwitches.forEach(function(toggleSwitch) {
//   toggleSwitch.addEventListener("change", function() {
//     if (this.checked) {
//       console.log(`Toggle switch ${this.id} is on`);
//     } else {
//       console.log(`Toggle switch ${this.id} is off`);
//     }
//   });
// });

// checkToggleBtn.addEventListener("click", function () {
//     toggleSwitches.forEach(function (toggleSwitch) {
//         if (toggleSwitch.checked) {
//             console.log(`Toggle switch ${toggleSwitch.id} is on`);
//         } else {
//             console.log(`Toggle switch ${toggleSwitch.id} is off`);
//         }
//     });
// });

let tg = window.Telegram.WebApp;
tg.expand(); //расширяем на все окно  

checkToggleBtn.addEventListener('click', function () { //вешаем событие на нажатие html-кнопки
    toggleSwitches.forEach(function (toggleSwitch) {
        if (toggleSwitch.checked) {
            console.log(`Toggle switch ${toggleSwitch.id} is on`);
        } else {
            console.log(`Toggle switch ${toggleSwitch.id} is off`);
        }
    });
    // let url = "https://api.telegram.org/<token>/sendMessage";
    // let options = {
    //     // dataType: "json",
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     },
    //     body: JSON.stringify({
    //         "chat_id": tg.initDataUnsafe.user.id,
    //         "text": "Данные заполнены",
    //         "reply_markup": ""
    //     })
    // };
    // let promise = fetch(url, options);
    tg.close();
});