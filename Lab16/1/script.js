let check=document.getElementsByClassName('check');


check[0].addEventListener('click',Book1);
check[1].addEventListener('click',Book2);
check[2].addEventListener('click',Book3);

let text=document.getElementById('text');

let num=0.0;

text.value=num;


function Book1()
{
    if(this.checked==true)
    {
        num+=50.0;
        console.log(num)
    }
    else
    {
        num-=50.0;
    }
    text.value=num;
}

function Book2()
{
    if(this.checked==true)
    {
        num+=60.0;
        console.log(num)
    }
    else
    {
        num-=60.0;
    }
    text.value=num;
}

function Book3()
{
    if(this.checked==true)
    {
        num+=30.5;
        console.log(num)
    }
    else
    {
        num-=30.5;
    }
    text.value=num;
}
