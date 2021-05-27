function task()
{
    let elem=document.querySelectorAll('a');

    for(let i=0;i<elem.length;i++)
    {
        elem[i].textContent+=' '+'('+elem[i].getAttribute('href')+')';
    }
}


    



