let tg = window.Telegram.WebApp;
tg.expand(); //расширяем на все окно  

// tg.MainButton.text = "Отправить"; //текст кнопки

// if (!tg.MainButton.isVisible){ 
// 	  tg.MainButton.show() //показываем 
// }

// tg.MainButton.onClick(callback) {
//   tg.MainButton.text("Данные отправлены");
//   // tg.close();
// }

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
  // let id = tg.initData.user.id;
  // alert(tg.initDataUnsafe.user.username);
  // tg.sendData("Данные заполнены"); 
  alert(tg.initDataUnsafe);
  tg.close();
});

// Telegram.WebApp.onEvent('mainButtonClicked', function(){
// 	tg.sendData("some string that we need to send"); 
// 	//при клике на основную кнопку отправляем данные в строковом виде
// });

// let usercard = document.getElementById("usercard"); //получаем блок usercard 

// let profName = document.createElement('p'); //создаем параграф
// profName.innerText = `${tg.initDataUnsafe.user.first_name}
// ${tg.initDataUnsafe.user.last_name}
// ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
// //выдем имя, "фамилию", через тире username и код языка
// usercard.appendChild(profName); //добавляем 

// let userid = document.createElement('p'); //создаем еще параграф 
// userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
// usercard.appendChild(userid); //добавляем