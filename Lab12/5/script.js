let img=document.getElementsByTagName('img');

for(let i=0;i<img.length;i++)
{
    img[i].addEventListener("click",makeGreat);
}

function makeGreat()
{    
    this.style.width=this.offsetWidth*2+'px';
    this.style.height=this.offsetHeight*2+'px';
        
    this.removeEventListener("click",makeGreat)
    this.addEventListener("click",makeMin);
}

function makeMin()
{
    this.style.width=this.offsetWidth/2+'px';
    this.style.height=this.offsetHeight/2+'px';

    this.removeEventListener("click",makeMin);
    this.addEventListener("click",makeGreat);
}

