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

let ave;

if(Number(first)!=Number(min) && Number(first)!=Number(max))ave=Number(first);
else
{
    if(Number(second)!=Number(min) && Number(second)!=Number(max))ave=Number(second);
    else
    {
        if(Number(third)!=Number(min) && Number(third)!=Number(max))ave=Number(third);
    }
}

sum=+first + +second + +third;

alert('Сумма:'+sum+" "+'Произведение:'+first*second*third)
alert('Минимум:'+min+" "+'Максимум:'+max);
alert('Числа в порядке возрастания:'+min+','+ave+','+max);