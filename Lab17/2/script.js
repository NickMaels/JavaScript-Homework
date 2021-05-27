let count=document.getElementById('count');
let count2=document.getElementById('count2');
let total=document.getElementById('total');
let deliver=document.getElementById('deliver')

let fAll=document.getElementById('fall');

let minus=document.getElementById('minus');
let plus=document.getElementById('plus');

let delivery=document.getElementById('delivery');
let nondel=document.getElementById('non');

let count_m=+count.textContent;
let=fAll_m=+fAll.textContent;
let total_m=+total.textContent;

let delivery_m=0;


minus.addEventListener('click',countMinus);
plus.addEventListener('click',countPlus);


function countPlus()
{
    count_m+=1;
    count.innerHTML="  "+count_m+"  ";
    fAll_m=count_m*75;
    fAll.innerHTML=fAll_m;
    count2.innerHTML=fAll_m;
    total_m=fAll_m+delivery_m;
    total.innerHTML=total_m;

}

function countMinus()
{
    count_m-=1;
    if(count_m<=0)count_m=0;
    count.innerHTML="  "+count_m+"  ";
    fAll_m=count_m*75;
    fAll.innerHTML=fAll_m;
    count2.innerHTML=fAll_m;
    total_m=fAll_m+delivery_m;
    total.innerHTML=total_m;
}

function deliveryAdd()
{
    deliver.innerHTML=25;
    total.innerHTML=+total.textContent+25;
    delivery_m=25;


}

delivery.addEventListener('click',deliveryAdd);

function deliveryDel()
{
    deliver.innerHTML=0;
    total.innerHTML=+total.textContent-25;

    delivery_m=0

}
nondel.addEventListener('click',deliveryDel);


