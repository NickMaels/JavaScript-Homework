//Задание 1
function hello1()
{
    return alert('Привет, Java Script!');
}

//Задание 2
let hello2_variable=function hello2()
{
    let name=prompt('Введите ваше имя:');
    if(name!=null && name!='') alert('Привет, '+name);
    else alert('Привет, гость');
}

//Задание 3 Функция help_3() служит для удобной работы c кнопками в html файле

let mul=(n,m) => n*m;

function help_3()
{
    let number=prompt('Введите первое число:');
    let number_2=prompt('Введите второе число:');

    return alert('Произведение: '+mul(number,number_2));
}

//Задание 4 Функция help_4() служит для удобной работы c кнопками в html файле

function repeat(str='',n=2)
{
let result='';
for(let i=0;i<n;i++)
{
result+=str;
}
return result;
}

function help_4()
{
    let str=prompt('Введи строку для повторения:');
    let n=prompt('Введи колличество раз:');
    if(n==null || n=='')n=2;
    return alert(repeat(str,n));
}

//Задание 5

function rgb()
{
    let first=prompt('Введите первый числовой аргумент:');
    if(first==null || first==undefined || first=="")first=0;

    let second=prompt('Введите второй числовой аргумент:');
    if(second==null || second==undefined || second=="")second=0;

    let thrid=prompt('Введите третий числовой аргумент:');
    if(thrid==null || thrid==undefined || thrid=="")thrid=0;


    return alert(rgb_string='rgb('+first+','+second+','+thrid+')');
}

//Задание 6

function avg(...args)
{
let sum = 0;
for (let arg of args) sum += arg;
return sum/args.length;
}
//alert(avg(1,2,3,4,5));
function task6()
{
    return alert('Для проверки этого задания прошу просмотреть файл script.js');
}
//Задание 7

function m(a,b)
{
    a=prompt('Введите первое число:');
    b=prompt('Введите второе число:');
    return alert('Произдведение: '+mul(a,b));
}

//Задание 8 help_8() служит для удобной работы c кнопками в html файле

let operation = new Function('m,n', 'return mul(m,n)')

function help_8()
{
    let number=prompt('Введите первое число:');
    let number_2=prompt('Введите второе число:');

    return alert('Произведение: '+operation(number,number_2));
}
//Задание 9 help_9() служит для удобной работы c кнопками в html файле

function addN(n)
{
    function addN2(m)
    {
        return alert('Сумма: '+ (+n+m));
    }
    return addN2(n);
}

function help_9()
{
 let number=prompt('Введите число:');
 return addN(Number(number));
}

//Задание 10 help_10() служит для удобной работы c кнопками в html файле

function words(number, one, two, five) 
{
    let n=Math.abs(number);
    n%=100;
    if (n>=5 && n<=20)return five;
    n%=10;
    if (n===1)return one;
    if (n>=2 && n<=4)return two;
    return five;
}
function help_10()
{
    let number=prompt('Введите количество товаров:');
    if(number=='' || number==null)number=0;
    return alert(number+' '+ words(number, 'товар', 'товара', 'товаров'));
}

