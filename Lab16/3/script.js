let span=document.getElementsByTagName('span');

for(let i=0;i<span.length;i++)
{
    span[i].hidden=true;
}
function validateForm()
{
    //имя
    let name=document.getElementById('name');
    if(name.value==null ||name.value==""){
        span[0].hidden=false;
    }
    else span[0].hidden=true;
    //пароль
    let pass=document.getElementById('password1');
    const checkPass = new RegExp('^.{4,8}$');
    if(!checkPass.test(pass.value))
    {
        span[1].hidden=false;

    }
    else span[1].hidden=true;
    //повторение пароля
    var password1 = document.getElementById('password1');
    var password2 = document.getElementById('password2');
    if (password1.value !== password2.value) {
        span[2].hidden=false;
    
    }
    else span[2].hidden=true;
    //email
    let email = document.getElementById('email');
    let email_regexp = /[0-9a-zа-я_A-ZА-Я]+@[0-9a-zа-я_A-ZА-Я^.]+\.[a-zа-яА-ЯA-Z]{2,4}/i;
    if (!email_regexp.test(email.value)) {
        span[3].hidden=false;

    }
    else span[3].hidden=true;

    let about=document.getElementById('about');
    if(about.value==""){
        span[4].hidden=false;
    }
    else span[4].hidden=true;

}