let description = document.getElementsByTagName('div');

for (let i = 0; i < description.length; i++) {
    console.log(description[i])
    description[i].hidden = true;
}

let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementsByClassName('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementsByClassName('six');
let seven = document.getElementsByClassName('seven');
let eight = document.getElementsByClassName('eight');
let nine = document.getElementsByClassName('nine');

one.addEventListener('click', oneF);

function oneF() {
    description[0].hidden = false;
    description[1].hidden = true;
    description[2].hidden = true;
    description[3].hidden = true;
    description[4].hidden = true;
    description[5].hidden = true;
    description[6].hidden = true;
    description[7].hidden = true;
    description[8].hidden = true;
}

two.addEventListener('click', twoF);

function twoF() {
    description[0].hidden = true;
    description[1].hidden = false;
    description[2].hidden = true;
    description[3].hidden = true;
    description[4].hidden = true;
    description[5].hidden = true;
    description[6].hidden = true;
    description[7].hidden = true;
    description[8].hidden = true;
}

for (let i = 0; i < three.length; i++) {
    three[i].addEventListener('click', threeF);
}


function threeF() {
    description[0].hidden = true;
    description[1].hidden = true;
    description[2].hidden = false;
    description[3].hidden = true;
    description[4].hidden = true;
    description[5].hidden = true;
    description[6].hidden = true;
    description[7].hidden = true;
    description[8].hidden = true;
}

four.addEventListener('click', fourF);

function fourF() {
    description[0].hidden = true;
    description[1].hidden = true;
    description[2].hidden = true;
    description[3].hidden = false;
    description[4].hidden = true;
    description[5].hidden = true;
    description[6].hidden = true;
    description[7].hidden = true;
    description[8].hidden = true;
}

five.addEventListener('click', fiveF);

function fiveF() {
    description[0].hidden = true;
    description[1].hidden = true;
    description[2].hidden = true;
    description[3].hidden = true;
    description[4].hidden = false;
    description[5].hidden = true;
    description[6].hidden = true;
    description[7].hidden = true;
    description[8].hidden = true;
}

for (let i = 0; i < six.length; i++) {
    six[i].addEventListener('click', sixF);
}


function sixF() {
    description[0].hidden = true;
    description[1].hidden = true;
    description[2].hidden = true;
    description[3].hidden = true;
    description[4].hidden = true;
    description[5].hidden = false;
    description[6].hidden = true;
    description[7].hidden = true;
    description[8].hidden = true;
}

for (let i = 0; i < seven.length; i++) {
    seven[i].addEventListener('click', sevenF);
}


function sevenF() {
    description[0].hidden = true;
    description[1].hidden = true;
    description[2].hidden = true;
    description[3].hidden = true;
    description[4].hidden = true;
    description[5].hidden = true;
    description[6].hidden = false;
    description[7].hidden = true;
    description[8].hidden = true;
}

for (let i = 0; i < eight.length; i++) {
    eight[i].addEventListener('click', eightF);
}


function eightF() {
    description[0].hidden = true;
    description[1].hidden = true;
    description[2].hidden = true;
    description[3].hidden = true;
    description[4].hidden = true;
    description[5].hidden = true;
    description[6].hidden = true;
    description[7].hidden = false;
    description[8].hidden = true;
}

for (let i = 0; i < nine.length; i++) {
    nine[i].addEventListener('click', nineF);
}


function nineF() {
    description[0].hidden = true;
    description[1].hidden = true;
    description[2].hidden = true;
    description[3].hidden = true;
    description[4].hidden = true;
    description[5].hidden = true;
    description[6].hidden = true;
    description[7].hidden = true;
    description[8].hidden = false;
}