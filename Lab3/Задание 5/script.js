

let random_number;
random_number=Math.floor(Math.random() * 100);

let enter_number;
while(enter_number!=random_number)
{
     enter_number=prompt('Введите число:');

     if(enter_number>random_number)alert('Много');
     else{
         if(enter_number<random_number)alert('Мало');
         else alert('Угадал! Ваше число:'+random_number);
     }
}

