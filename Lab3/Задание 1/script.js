
let day=+prompt('Введите день рождения:');

let month=+prompt('Введите номер месяца рождения:');

let zodiac=" ";

if((month==3 && day>=21)||(month==4 && day<=20))zodiac="Овен";
else{
    if((month==4 && day>=21)||(month==5 && day<=21))zodiac="Телец";
    else{
        if((month==5 && day>=22)||(month==6 && day<=21))zodiac="Близнецы";
        else{
            if((month==6 && day>=22)||(month==7 && day<=22))zodiac="Рак";
            else{
                if((month==7 && day>=23)||(month==8 && day<=21))zodiac="Лев";
                else{
                    if((month==8 && day>=22)||(month==9 && day<=23))zodiac="Дева";
                    else{
                        if((month==9 && day>=24)||(month==10 && day<=23))zodiac="Весы";
                        else{
                            if((month==10 && day>=24)||(month==11 && day<=22))zodiac="Скорпион";
                            else{
                                if((month==11 && day>=23)||(month==12 && day<=22))zodiac="Стрелец";
                                else{
                                    if((month==12 && day>=23)||(month==1 && day<=20))zodiac="Козерог";
                                    else{
                                        if((month==1 && day>=21)||(month==2 && day<=19))zodiac="Водолей";
                                        else{
                                            if((month==2 && day>=20)||(month==3 && day<=20))zodiac="Рыбы";
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

alert('Ваш знак зодиака: '+zodiac);