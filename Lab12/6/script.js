let p=document.getElementById('p');

let rainbow=['red','orange','yellow','green','cyan','blue','violet'];

window.setInterval(setColor,250);

let i=0;
function setColor()
{
    p.style.color = rainbow[i];
    i++;
    if(i>=rainbow.length)i=0;
}
