let russia=document.getElementById('Russia');

let israel=document.getElementById('Israel');

let czech=document.getElementById('Czech');

let belgium=document.getElementById('Belgium');

russia.hidden=true;
israel.hidden=true;
czech.hidden=true;
belgium.hidden=true;

let select=document.getElementById('main');

let img=document.getElementById('img');


function Select(e)
{
    let src;

    e=e.selectedIndex;
    if(e==1)
    {
    src='img/russia.jpg';
    img.setAttribute('src',src);
    russia.hidden=false;
    israel.hidden=true;
    czech.hidden=true;
    belgium.hidden=true;
    }
    else if(e==2)
    {
        src='img/israel.jpg';
        img.setAttribute('src',src);
        russia.hidden=true;
        israel.hidden=false;
        czech.hidden=true;
        belgium.hidden=true;
    }
    else if(e==3)
    {
        src='img/czech.jpg';
        img.setAttribute('src',src);
        russia.hidden=true;
        israel.hidden=true;
        czech.hidden=false;
        belgium.hidden=true;
    }
    else if(e==4)
    {
        src='img/belgium.jpg';
        img.setAttribute('src',src);
        russia.hidden=true;
        israel.hidden=true;
        czech.hidden=true;
        belgium.hidden=false;
    }
}

