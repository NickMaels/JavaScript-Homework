let first = document.getElementById('first');
let second = document.getElementById('second');

function swap() {
    let srcF = first.getAttribute('src');
    let srcS = second.getAttribute('src');

    first.setAttribute('src', srcS);
    second.setAttribute('src', srcF);
}