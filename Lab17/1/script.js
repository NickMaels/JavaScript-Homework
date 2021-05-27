let first=document.getElementById('first');

let fbutton=document.getElementById('firstb');

let items=document.getElementById('items');

let units=document.getElementById('units');

let price=document.getElementById('price');

let price_it=0.00;



function firstEvent()
{
    let count_it=+first.value;

    items.innerHTML=+items.textContent+count_it;

    units.innerHTML=+units.textContent+1;

    price_it+=count_it*29.99;

    price.innerHTML=price_it.toFixed(2);
    fbutton.innerHTML="Added!";
    fbutton.disabled=true;
}

let second=document.getElementById('second');

let sbutton=document.getElementById('secondb');

function secondEvent()
{
    let count_it=+second.value;

    items.innerHTML=+items.textContent+count_it;

    units.innerHTML=+units.textContent+1;;

    price_it+=count_it*45.00;

    price.innerHTML=price_it.toFixed(2);
    sbutton.innerHTML="Added!";
    sbutton.disabled=true;
}

let treed=document.getElementById('treed');

let tbutton=document.getElementById('treeb');

function treeEnvet()
{
    let count_it=+treed.value;

    items.innerHTML=+items.textContent+count_it;

    units.innerHTML=+units.textContent+1;;

    price_it+=count_it*24.99;

    price.innerHTML=price_it.toFixed(2);
    tbutton.innerHTML="Added!";
    tbutton.disabled=true;
}

