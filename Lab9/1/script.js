function p_h3()
{
    let elem=document.querySelector('p:first-child')
    console.log(elem)
    elem.outerHTML='<h3>'+elem.innerHTML+'</h3>';
}

