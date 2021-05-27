let login=prompt('Введите логин:');

if(login=='Админ')
{
    let password=prompt('Введи Пароль:')
    if(password == null || password  == undefined){
        alert('Вход отменен')
    } else if(password == "Чёрный Властелин" || password == "Черный Властелин" ){
       alert("Добро пожаловать!");
    }else{
        alert("Пароль неверен");
    }    
}
else
{
    if(login==null || login==undefined)alert('Вход отменен')
    else
    {
        alert('Я вас не знаю');
    }
}


