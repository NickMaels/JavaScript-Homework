function numberText()
{
    let element=document.querySelectorAll('p');

    console.log(element);
    
    for(let i=0;element.length;i++)
    {
        let num=i+1;
        element[i].insertAdjacentHTML('beforebegin', num);
    }
}
