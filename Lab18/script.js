let span=document.getElementsByTagName('span');

for(let i=0;i<span.length;i++)
{
    span[i].hidden=true;

}
console.log(span);

function check()
{
    let point=false;
    let name=document.getElementById('name');
    const pat=new RegExp("^[a-zA-Z\s]+$");
    if(name.value==null || name.value=="" || pat.test(name.value)==false){
        span[0].hidden=false;
        point=true;
    }
    else span[0].hidden=true;

    let pass=document.getElementById('password');
    const checkPass = new RegExp('.{6,}$');
    if(!checkPass.test(pass.value))
    {
        span[1].hidden=false;
        point=true;
    }
    else span[1].hidden=true

    let male=document.getElementById('male');

    let female=document.getElementById('female');
    
    if(male.checked==false && female.checked==false)
    {
        span[2].hidden=false;
        point=true;
    }
    else span[2].hidden=true;

    let select=document.getElementById('select');   
    if(select.selectedIndex==0)
    {
        span[3].hidden=false;
        point=true;
    }
    else span[3].hidden=true;

    let java=document.getElementById('Java');
    let c=document.getElementById('C/C++');
    let sharp=document.getElementById('C#');

    if(java.checked==false && c.checked==false && sharp.checked==false)
    {
        span[4].hidden=false;
        point=true;
    }
    else span[4].hidden=true;

    let about=document.getElementById('Instruction');
    if(about.value==""){
        span[5].hidden=false;
        point=true;
    }
    else span[5].hidden=true;

    if(!point)
    {

    let newWindow=open('about:blank','width=300px','height=500px');
    newWindow.document.write("<link rel='stylesheet' href='winstyle.css'>");
    newWindow.document.write("<script>alert('Привет')<\/script>");
    newWindow.document.write("<h1>Информация о Человеке<\/h1>");
    newWindow.document.write("<div>Имя:"+document.getElementById('name').value+"<\/div>");
    newWindow.document.write("<div>Пароль:"+document.getElementById('password').value+"<\/div>");
    if(male.checked==true)
    {
        newWindow.document.write("<div>Пол:Мужской<\/div>");
    }
    else{
        newWindow.document.write("<div>Пол:Женский<\/div>");
    }

    let select_all=document.getElementById('select').options.selectedIndex;

    newWindow.document.write("<div>Стаж:"+document.getElementById('select').options[select_all].text+"<\/div>");

    newWindow.document.write("<span>Языки: <\/span>");
    if(java.checked==true)
    {
        newWindow.document.write("<span> Java<\/span>");
    }
    if(c.checked==true)
    {
        newWindow.document.write("<span> C/C++<\/span>");
    }
    if(sharp.checked==true)
    {
        newWindow.document.write("<span> C#<\/span>");
    }

    newWindow.document.write("<div>Instruction: "+document.getElementById('Instruction').value+"<\/div>");
    newWindow.document.write("<br> <button onclick='window.close()'>OK<\/button>");
    }
}


    