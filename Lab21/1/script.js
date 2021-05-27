function imgClick(event) {
    let target = event.target;

    if (target.tagName != 'IMG') return;

    openTab(target);
};

let table = document.getElementById('table');

table.addEventListener('click', imgClick)

function openTab(elem) {
    let newWindow = open("about:blank", "hello", "width=300,height=300", "menubar=no", "status=no", "location=no", "toolbar=no", "scrollbars=no");
    newWindow.document.write(elem.outerHTML);
}

let empty = document.getElementById('empty');

empty.addEventListener('click', forEmpty)

function forEmpty() {
    let newWindow = open("about:blank", "hello", "width=300,height=300", "menubar=no", "status=no", "location=no", "toolbar=no", "scrollbars=no");
    newWindow.document.write("Нет Изображения");
}