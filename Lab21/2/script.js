let img = document.getElementsByTagName('img');
let timer;
let images = {
    "0": "img/0.jpg",
    "1": "img/1.jpg",
    "2": "img/2.jpg",
    "3": "img/3.jpg",
    "4": "img/4.jpg",
    "5": "img/5.jpg",
    "6": "img/6.jpg",
    "7": "img/7.jpg",
    "8": "img/8.jpg",
    "9": "img/9.jpg"
}

function update() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    img[0].src = images[Math.floor(hours / 10)];
    img[1].src = images[hours % 10];
    img[3].src = images[Math.floor(minutes / 10)];
    img[4].src = images[minutes % 10];
    img[6].src = images[Math.floor(seconds / 10)];
    img[7].src = images[seconds % 10];
}

function clockStart() {
    timer = setInterval(update, 1000);
    update();
}

function clockStop() {
    clearInterval(timer);
    timer = null;
}
clockStart();