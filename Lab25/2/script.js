let text = document.getElementById('text');
let box = document.getElementById('box');

text.addEventListener('keydown', enterButton)


function enterButton(e) {
    if (e.keyCode === 13) {
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('class', 'checkbox');
        let p = document.createElement('p');
        let span = document.createElement('span');
        let exit = document.createElement('button');
        exit.setAttribute('class', 'exitb');
        exit.innerHTML = 'X';
        p.appendChild(checkbox);
        span.innerHTML = this.value;
        p.appendChild(span);
        p.appendChild(exit);
        span.setAttribute('class', 'p');
        box.appendChild(p);
        var ch = document.getElementsByClassName('checkbox');
        console.log(ch);
        for (let i = 0; i < ch.length; i++)
            ch[i].addEventListener('click', lineTh)
        var ex = document.getElementsByClassName('exitb');
        console.log(ex);
        for (let j = 0; j < ex.length; j++)
            ex[j].addEventListener('click', removeEl);
        var px = document.getElementsByClassName('p');
        console.log(px);
        for (let m = 0; m < px.length; m++)
            px[m].addEventListener('dblclick', recall)
    }
}



function recall() {
    var rec = document.createElement('input');
    rec.setAttribute('type', 'text');
    rec.setAttribute('value', this.textContent);
    this.innerHTML = '';
    this.appendChild(rec);
    console.log(this.textContent);
    this.addEventListener('keydown', custom);

    function custom(e) {
        if (e.keyCode === 13) {
            this.innerHTML = rec.value;
        } // rec.addEventListener('keydown', recall);
    }
}



function removeEl() {
    this.parentNode.remove();
}

function lineTh() {
    this.hidden = true;
    this.parentNode.style = 'text-decoration:line-through;';
}