let select = document.getElementById('select');

let first = document.getElementById('first');
let second = document.getElementById('second');
let tree = document.getElementById('threed');

let btn = document.getElementById('btn');

let error = document.getElementById('error');
first.hidden = true;
second.hidden = true;
tree.hidden = true;
error.hidden = true;

function Select(e) {
    let some = e.selectedIndex;
    if (some == 1) {
        $('#btn').click(function() {
            if (first.value == "" || second.value == "") {
                error.hidden = false;
            } else {
                let aria = first.value * second.value;
                let perimetr = 2 * first.value + 2 * second.value;
                error.hidden = true;
                $('#answer').html('Площадь:' + aria.toFixed(2) + " " + "Периметр:" + perimetr.toFixed(2));
            }

        });
        first.hidden = false;
        second.hidden = false;
        tree.hidden = true;
        first.setAttribute('placeholder', "Cторона 1");
        second.setAttribute('placeholder', "Cторона 2");
        first.value = "";
        second.value = "";
        tree.value = "";
    } else if (some == 2) {
        $('#btn').click(function() {
            if (first.value == "" || second.value == "" || tree.value == "") {
                error.hidden = false;
            } else {
                let perimetr1 = +first.value + +second.value + +tree.value;
                let semiP = perimetr1 / 2;
                let aria1 = Math.sqrt(semiP * (semiP - first.value) * (semiP - second.value) * (semiP - tree.value));
                error.hidden = true;
                $('#answer').html('Площадь:' + aria1.toFixed(2) + " " + "Периметр:" + perimetr1.toFixed(2));
            }

        })
        first.hidden = false;
        second.hidden = false;
        tree.hidden = false;
        first.setAttribute('placeholder', "Cторона 1");
        second.setAttribute('placeholder', "Cторона 2");
        tree.setAttribute('placeholder', "Cторона 3");
        first.value = "";
        second.value = "";
        tree.value = "";
    } else if (some == 3) {
        $('#btn').click(function() {
            if (first.value == "") {
                error.hidden = false;
            } else {
                let perimetr2 = 2 * Math.PI * first.value;
                let aria2 = Math.PI * first.value * first.value;
                error.hidden = true;
                $('#answer').html('Площадь:' + aria2.toFixed(2) + " " + "Периметр:" + perimetr2.toFixed(2));
            }

        })
        first.hidden = false;
        second.hidden = true;
        tree.hidden = true;
        first.setAttribute('placeholder', "Радиус");
        first.value = "";
        second.value = "";
        tree.value = "";
    } else if (some == 4) {
        $('#btn').click(function() {
            if (first.value == "" || second.value == "" || tree.value == "") {
                error.hidden = false;
            } else {
                let perimetr3 = 2 * first.value + 2 * second.value;
                let aria3 = first.value * second.value * Math.sin(tree.value * Math.PI / 180);
                error.hidden = true;
                $('#answer').html('Площадь:' + aria3.toFixed(2) + " " + "Периметр:" + perimetr3.toFixed(2));
            }

        })
        first.hidden = false;
        second.hidden = false;
        tree.hidden = false;
        first.setAttribute('placeholder', "Cторона 1");
        second.setAttribute('placeholder', "Cторона 2");
        tree.setAttribute('placeholder', "Мера угла");
        first.value = "";
        second.value = "";
        tree.value = "";
    }
}