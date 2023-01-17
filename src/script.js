let tg = window.Telegram.WebApp;
tg.expand(); //расширяем на все окно  

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
  // tg.sendData("Данные заполнены"); 
  // alert(`Данные для пользователя ${tg.initDataUnsafe.user.username} заполнены`);
  tg.sendData("Данные заполнены"); 
  tg.close();
});