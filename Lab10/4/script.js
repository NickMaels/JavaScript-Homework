let massive=prompt('Введи массив через пробел');

let arr=massive.trim().split(' ');

function add_li()
{
    for(let i=0;i<arr.length;i++)
    {
        let li=document.createElement('li')
        li.innerText=arr[i];
        list.appendChild(li);
    }
}