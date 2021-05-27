
let number=document.getElementsByTagName('option');



function addOption()
{
    let count=0;
    for(let i=0;i<number.length;i++)
    {
        count=i+2;
    }

    let option=document.createElement('option');

    option.innerHTML="Значение "+count;
    
    select.appendChild(option);
}

