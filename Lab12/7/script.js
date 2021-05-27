let button=document.getElementsByTagName('button');

for(let i=0;i<button.length;i++)
{
    button[i].addEventListener('click',dellDiv)
}

function dellDiv()
{
    this.parentElement.remove();
}

