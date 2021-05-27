function sum()
{
    let arg=document.querySelectorAll('li')
    for(let i=0;i<arg.length;i++)
    {
        let number=+arg[i].textContent+1;
        
        arg[i].innerHTML=number;
    }
}

