

let table=document.createElement('table');

let rows=document.getElementById('rows');
let cols=document.getElementById('cols');

function createTabel()
{
    let rows1=rows.value;
    let cols1=cols.value;
    for(let i=0;i<rows1;i++)
    {
        let tr=document.createElement('tr');
        for(let j=0;j<cols1;j++)
        {
            let td=document.createElement('td');
            tr.appendChild(td);
            td.innerHTML=getRandomInt(1000);
        }
        table.appendChild(tr);
    }
}

document.body.append(table);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }