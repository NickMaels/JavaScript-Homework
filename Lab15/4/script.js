let texts=document.getElementsByTagName('input')

for(let i=0;i<texts.length;i++)
{
    texts[i].addEventListener('blur',check)
}
function check()
{
    let lenghtAll=this.value.length;
    let dataLength=this.getAttribute('data-length');
   // console.log(dataLength);
   // console.log(lenghtAll);
    
    if(lenghtAll<dataLength || lenghtAll>dataLength)
    {
        this.setAttribute('style',"border:2px solid red")
    }
    else 
    if(lenghtAll==dataLength)this.setAttribute('style',"border:2px solid lime")
}