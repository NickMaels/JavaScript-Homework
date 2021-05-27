let first=prompt('Введите превое число:');

let second=prompt('Введите второе число:');

let third=prompt('Введите третье число:');



let min;
if(Number(first)<Number(second) && Number(first)<Number(third))min=Number(first);
else
{
    if(Number(second)<Number(first) && Number(second)<Number(third))min=Number(second);
    else
    {
        if(third<Number(second) && Number(third)<Number(first))min=Number(third);
    }
}

let max;

if(Number(first)>Number(second) && Number(first)>Number(third))max=Number(first);
else
{
    if(Number(second)>Number(first) && Number(second)>Number(third))max=Number(second);
    else
    {
        if(Number(third)>Number(second) && Number(third)>Number(first))max=Number(third);
    }
}

sum=+first + +second + +third;

let ave=sum/3;

alert('Сумма:'+sum+" "+'Произведение:'+first*second*third);
alert('Cреднее арифметическое:'+ave);
alert('Минимум:'+min+" "+'Максимум:'+max);

