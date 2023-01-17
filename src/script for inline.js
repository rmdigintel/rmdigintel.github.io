let tg = window.Telegram.WebApp;
tg.expand(); //расширяем на все окно  

btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки

  let url = "https://api.telegram.org/<token>/sendMessage";
  let options = {
      // dataType: "json",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({
          "chat_id": tg.initDataUnsafe.user.id,
          "text": "Данные заполнены",
          "reply_markup": ""
      })
  };
  let promise = fetch(url, options);
  tg.close();
});