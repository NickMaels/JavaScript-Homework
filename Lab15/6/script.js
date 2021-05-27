let day=document.getElementById('day');
let month=document.getElementById('month');
let year=document.getElementById('year');


let span=document.getElementsByTagName('span');

for(let i=0;i<span.length;i++)
{
    span[i].hidden=true;
}

year.value = 1970;
month.value = 1;
day.value = 1;


function changeDate() {
if (checking(year.value, month.value, day.value))
{
span[0].hidden=true;
span[1].hidden=false;
} else
{
    span[0].hidden=false;
    span[1].hidden=true;
    this.value = this.dataset.default;
}
}

function focusDate()
{
this.dataset.default = this.value;
}

function addElements(select, massive) 
{
for (let i = 0; i < massive.length; i++) 
{
select.add(new Option(massive[i]));
}
}

function countElements(start, finish) {
let result=[];
for (let i=start;i<=finish;i++) {
result.push(i);
}
return result;
}

function checking(year, month, day) {
let date = new Date(year, month-1, day);
return date.getFullYear() == year && date.getMonth() == month-1 && date.getDate() == day;
}

day.addEventListener('focus', focusDate);
month.addEventListener('focus', focusDate);
year.addEventListener('focus', focusDate);

day.addEventListener('change', changeDate);
month.addEventListener('change', changeDate);
year.addEventListener('change', changeDate);

addElements(day, countElements(1, 31));
addElements(month, countElements(1, 12));
addElements(year, countElements(1970, 2020));