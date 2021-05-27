let res=document.querySelector('input[type=button]');
res.hidden=true;
function buttons()
{
    let button=document.querySelectorAll('button');
    for(let i=0;i<button.length;i++)
    {
        button[i].disabled=true;
    }
    res.hidden=false;
}
function lessonOne()
{
    buttons();
    let achiveDate = new Date().setHours(8, 40, 0, 0);
    console.log((achiveDate/1000/60)%60);
    timer(achiveDate);
    
}

function lessonTwo()
{
    buttons();
    let achiveDate = new Date().setHours(9, 30, 0, 0);
    console.log((achiveDate/1000/60)%60);
    timer(achiveDate);
    
}

function lessonThree()
{
    buttons();
    let achiveDate = new Date().setHours(10, 25, 0, 0);
    console.log((achiveDate/1000/60)%60);
    timer(achiveDate);
}

function lessonFour()
{
    buttons();
    let achiveDate = new Date().setHours(11, 15, 0, 0);
    console.log((achiveDate/1000/60)%60);
    timer(achiveDate);
}
function check()
{
    buttons();
    let achiveDate = new Date().setHours(23, 59, 0, 0);
    console.log((achiveDate/1000/60)%60);
    timer(achiveDate);
}
function reset()
{
    window.location.reload()
}
function timer(date) {
    let today = new Date();
    let result = (date - today)+1000;
    if (result < 0) {
        let elmnt = document.getElementById('timer');
        elmnt.innerHTML = '-- : --';
        return undefined;
    }
    let seconds = Math.floor((result/1000)%60);
    let minutes = Math.floor((result/1000/60)%60);
    let hours = Math.floor((result/1000/60/60)%24);
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;
    let elmnt = document.getElementById('timer');
    elmnt.innerHTML = minutes + ':' + seconds;
    setTimeout(timer, 1000, date);
}

