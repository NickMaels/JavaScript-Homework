let p=document.getElementsByTagName('p');

for(let i=0;i<p.length;i++)
{
    p[i].addEventListener('click',square);
    console.log(p[i].textContent);
}
function square(event)
{
    let target = event.target;
    if (target.tagName != 'P') return;

    let elem=target.textContent;
    
    elem=elem*elem;
    target.innerHTML=elem;
    target.removeEventListener('click',square);
}