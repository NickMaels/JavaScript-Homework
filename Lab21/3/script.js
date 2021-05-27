let table = document.createElement('table');
let timetext = document.getElementById('timer');
let timer;
let bt = document.getElementById('button');
let rs = document.getElementById('reset')
rs.disabled = true;
let massive = getRandom(1, 25);

function startGame() {
    let index = -1;
    let rows1 = 5;
    let cols1 = 5;
    for (let i = 0; i < rows1; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < cols1; j++) {
            let td = document.createElement('td');
            tr.appendChild(td);
            index++;
            td.innerHTML = massive[index];
            td.style.fontSize = fontFunc(20, 45) + 'px';
            td.style.color = rgb();
            td.style.textShadow = '3px 0px 10px black';
            td.style.textAlign = "center";
        }
        table.appendChild(tr);
    }
    startTimer();
    bt.disabled = true;
    rs.disabled = false;
}
document.body.append(table);

function shuffle(array) {
    for (var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return true;
}

function getRandom(min, max) {
    var arr = Array.from(Array(max - min + 1).keys(), x => x + min);
    shuffle(arr);
    return arr;
}

table.addEventListener('click', cus)

let temp = 1;

function cus(event) {
    let target = event.target;
    let prev = +target.textContent;
    console.log(prev)
    if (target.tagName != 'TD') return;
    if (prev == temp) {
        temp++;
        target.style.background = "red";
        target.style.fontSize = 15;
    }
    if (temp == 26) {
        clearInterval(timer);
        alert("Вы выйграли!");
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function fontFunc(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rgb() {
    let red = getRandomInt(255);
    let green = getRandomInt(255);
    let blue = getRandomInt(255);

    let color = '#' + red.toString(16) + green.toString(16) + blue.toString(16);
    return color;
}



console.log(timer)
let main_sec = 40;

function startTimer() {


    timer = setInterval(tick, 1000);

    function tick() {
        if (main_sec > 0) timetext.innerText = --main_sec;
        else {
            clearInterval(timer);
            table.removeEventListener('click', cus)
            alert('Вы проиграли!')
        }
    }
}