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
    target.addEventListener('click', cube)
}

function cube(event)
{
    let target=event.target;

    if (target.tagName != 'P') return;

    let elem=target.textContent;
    
    elem=Math.sqrt(elem);

    elem=elem*elem*elem;

    target.innerHTML=elem;

    target.removeEventListener('click',cube);

    target.addEventListener('click',four)
}

function four(event)
{
    let target=event.target;

    if (target.tagName != 'P') return;

    let elem=target.textContent;
    
    elem=Math.cbrt(elem);

    elem=elem*elem*elem*elem;

    target.innerHTML=elem;

    target.removeEventListener('click',four);

}
