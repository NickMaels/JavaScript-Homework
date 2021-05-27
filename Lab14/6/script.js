let table=document.getElementById('table');

let name=document.getElementById('name');

let surname=document.getElementById('surname');

function addElem()
{
    let nameTD=name.value;
    let surnameTD=surname.value;

    let row=document.createElement('tr');
    table.appendChild(row);

    let cellOne=document.createElement('td');
    let cellTwo=document.createElement('td');

    row.appendChild(cellOne);
    row.appendChild(cellTwo);

    cellOne.innerHTML=nameTD;
    cellTwo.innerHTML=surnameTD;
}

function reName(event)
{
    let target = event.target;
    if (target.tagName != 'TD') return;

    let newText=prompt("Введи новое значение");
    target.innerHTML=newText;
}

