let span=document.getElementsByTagName('span');

for(let i=0;i<span.length;i++)
{
    span[i].hidden=true;
}
console.log(span);

function validateForm () {

    //проверяем имя

    let name=document.getElementById('name');
    if(name.value==null ||name.value==""){
        span[0].hidden=false;
    }
    else span[0].hidden=true;
    
    //email
    let email = document.getElementById('email');
    let email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
    if (!email_regexp.test(email.value)) {
        span[1].hidden=false;

    }
    else span[1].hidden=true;
    //проверям пароль надлину
    let pass=document.getElementById('password1');

    const checkPass = new RegExp('^.{4,8}$');
    if(!checkPass.test(pass.value))
    {
        span[2].hidden=false;

    }
    else span[2].hidden=true

    // проверяем пароли
    var password1 = document.getElementById('password1');
    var password2 = document.getElementById('password2');
    if (password1.value !== password2.value) {
        span[3].hidden=false;
    
    }
    else span[3].hidden=true;

    //хобби

    let swim=document.getElementById('swim');
    let read=document.getElementById('read');
    let nothing=document.getElementById('nothing');

    if(swim.checked==false && read.checked==false && nothing.checked==false)
    {
        span[4].hidden=false;
      
    }
    else span[4].hidden=true;
    //дата
    let date=document.getElementById('date');
    if(date.value=="")
    {
        span[5].hidden=false;
  
    }
    else span[5].hidden=true;
    //страна 
    let select=document.getElementById('select');   
    if(select.selectedIndex==0)
    {
        span[6].hidden=false;
  
    }
    else span[6].hidden=true;

    //рассылка

    let yes=document.getElementById('yes');

    let sure=document.getElementById('sure');

    let yeah=document.getElementById('yeah');
    
    if(yes.checked==false && sure.checked==false && yeah.checked==false)
    {
        span[7].hidden=false;
   
    }
    else span[7].hidden=true;
}