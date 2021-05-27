let massive=prompt('Введи массив через пробел');

let arr=massive.trim().split(' ');

let div = document.createElement('div');

document.body.append(div);

for(let i=0;i<arr.length;i++)
{
    let p=document.createElement('p')
    p.innerHTML='<p>'+arr[i]+'</p>';
    div.appendChild(p);
}


  