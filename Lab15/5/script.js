let div=document.getElementsByTagName('div');

for(let i=0;i<div.length;i++)
{
    div[i].addEventListener('click',red);
}

function red()
{
    this.setAttribute('style',"background:red;")
    this.removeEventListener('click',red);
    this.addEventListener('click',lime);
}
function lime()
{
    this.setAttribute('style',"background:lime;")
    this.removeEventListener('click', lime);
    this.addEventListener('click',red);
}