let square=document.getElementById('square');
let rectangle=document.getElementById('rectangle');
let triangle=document.getElementById('triangle');
let circle=document.getElementById('circle');
let parallelogram=document.getElementById('parallelogram');

let select=document.getElementById('select');

square.hidden=true;
rectangle.hidden=true;
triangle.hidden=true;
circle.hidden=true;
parallelogram.hidden=true;

function Select(e)
{
  
    
    e=e.selectedIndex;
    if(e==1)
    {
        square.hidden=false;
        rectangle.hidden=true;
        triangle.hidden=true;
        circle.hidden=true;
        parallelogram.hidden=true;
    }
    else if(e==2)
    {
        rectangle.hidden=false;
        triangle.hidden=true;
        circle.hidden=true;
        parallelogram.hidden=true;
        square.hidden=true;
    }
    else if(e==3)
    {
        triangle.hidden=false;
        circle.hidden=true;
        parallelogram.hidden=true;
        square.hidden=true;
        rectangle.hidden=true;
    }
    else if(e==4)
    {
        circle.hidden=false;
        parallelogram.hidden=true;
        square.hidden=true;
        rectangle.hidden=true;
        triangle.hidden=true;
    }
    else if(e==5)
    {
        parallelogram.hidden=false;
        square.hidden=true;
        rectangle.hidden=true;
        triangle.hidden=true;
        circle.hidden=true;
    }
}