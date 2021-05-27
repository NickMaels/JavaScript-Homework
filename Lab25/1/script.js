let table = document.createElement('table');
let rows1 = 3;
let cols1 = 3;
let index = -1;
let temp = 0;
let wintag = document.getElementById('win');
let winx = document.getElementById('winx');
let wino = document.getElementById('wino');
let nobody = document.getElementById('nobody');
let winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let winner = [];

for (let i = 0; i < rows1; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < cols1; j++) {
        let td = document.createElement('td');
        index++;
        td.setAttribute('value', index);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.append(table);

table.addEventListener('click', X)

function X(event) {
    let target = event.target;
    if (target.tagName != 'TD') return;
    if (target.textContent == "") {
        target.innerHTML = 'X';
        winner[target.getAttribute('value')] = "X";
        temp++;
        console.log(temp);
    }
    if (checkWin()) {
        table.removeEventListener('click', X);
        winx.innerHTML = +winx.textContent + 1;
        wintag.innerHTML = "Выйграл:X";
    } else {
        table.removeEventListener('click', X);
        table.addEventListener('click', O);
    }
    if (checkWin() == false && temp == 9) {
        wintag.innerHTML = "Ничья!";
        nobody.innerHTML = +nobody.textContent + 1;
        table.removeEventListener('click', O);
    }
}

function O(event) {
    let target = event.target;
    if (target.tagName != 'TD') return;
    if (target.textContent == "") {
        target.innerHTML = 'O';
        winner[target.getAttribute('value')] = "O";
        temp++;
        console.log(temp);
    }
    if (checkWin()) {
        wintag.innerHTML = "Выйграл:O";
        wino.innerHTML = +wino.textContent + 1;
        table.removeEventListener('click', O);
    } else {
        table.removeEventListener('click', O);
        table.addEventListener('click', X);
    }
    if (checkWin() == false && temp == 9) {
        wintag.innerHTML = "Ничья!";
        nobody.innerHTML = +nobody.textContent + 1;
        table.removeEventListener('click', X);
    }
}


function checkWin() {
    for (let i = 0; i < winCombo.length; i++) {
        let id = winCombo[i];
        let check = winner[id[0]] &&
            winner[id[0]] == winner[id[1]] &&
            winner[id[1]] == winner[id[2]];
        if (check) {
            return true;
        }
    }
    return false;
}

let reset = document.getElementById('reset');

reset.addEventListener('click', resetGame);

function resetGame() {
    let td = document.getElementsByTagName('td');
    table.addEventListener('click', X);
    table.removeEventListener('click', O);
    winner = [];
    temp = 0;
    wintag.innerHTML = "Выйграл:";
    for (let i = 0; i < td.length; i++)
        td[i].innerHTML = "";
}