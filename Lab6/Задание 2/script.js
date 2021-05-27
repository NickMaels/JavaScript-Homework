let main_str=prompt('Введи слово для проверки на палиндром', 'ROTOR');

Palindrom(main_str);

function Palindrom(str)
{
    let len=str.length;

    for(let i=0;i<len;i++)
    {
        if(str[i]!=str[str.length-i-1])
        return alert('Не палиндром');
    }
    return alert('Палиндром');
}
