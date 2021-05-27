
function painter()
{
    let element=document.querySelectorAll('td');

    for(let i=0;i<element.length;i++)
    {
        let number= +element[i].textContent;
    
        if(number==0)element[i].style.background='red';
        
    }
}
