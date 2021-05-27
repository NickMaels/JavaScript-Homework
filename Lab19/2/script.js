let pictures = document.getElementById('pictures');

let show = document.getElementById('show');

pictures.addEventListener('click', changePic);
let i = 0;

function changePic(event) {
    let target = event.target;

    if (target.tagName != 'IMG') return;
    i = +target.getAttribute('value');
    show.setAttribute('src', target.getAttribute('src'));
}
let img = document.getElementsByTagName('img')


console.log(img[1].getAttribute('value'))

function nextPic() {
    i++;
    if (i < 6) {
        show.setAttribute('src', img[i].getAttribute('src'));

    } else i = 5;
    console.log(i);
}

function prevPic() {
    console.log(i)
    if (i >= 2) {
        i--;
        show.setAttribute('src', img[i].getAttribute('src'));
    } else return
    console.log(i)
}