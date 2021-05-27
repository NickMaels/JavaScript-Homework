let first=document.getElementById('first');

let second=document.getElementById('second');

function swap()
{
    let firstN=first.value;
    let secondN=second.value;

    second.value=firstN;
    first.value=secondN;
}