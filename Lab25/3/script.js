let first = document.getElementById('no');
let second = document.getElementById('three');
let threed = document.getElementById('уthree');
let btn = document.getElementById('check');

let all = document.getElementsByTagName('input');

btn.addEventListener('click', checkAnswers);

function checkAnswers() {
    let one, two, three;
    let one1, two1, three1;
    let wrong1, wrong2, wrong3;
    let space1, space2, space3;
    if (first.checked == true) {
        one = (100 / 3);
        one1 = 1;
    } else {
        one = 0;
        one1 = 0;
    }
    if (second.checked == true) {
        two = 100 / 3;
        two1 = 1;
    } else {
        two = 0;
        two1 = 0;
    }
    if (threed.checked == true) {
        three = 100 / 3;
        three1 = 1;
    } else {
        three = 0;
        three1 = 0;
    }


    if (all[1].checked == true || all[2].checked == true) {
        wrong1 = 1;
    } else wrong1 = 0;

    if (all[3].checked == true || all[4].checked == true) {
        wrong2 = 1;
    } else wrong2 = 0;

    if (all[6].checked == true || all[7].checked == true) {
        wrong3 = 1;
    } else wrong3 = 0;


    if (all[0].checked == false && all[1].checked == false && all[2].checked == false) {
        space1 = 1;
    } else space1 = 0;
    if (all[3].checked == false && all[4].checked == false && all[5].checked == false) {
        space2 = 1;
    } else space2 = 0;
    if (all[6].checked == false && all[7].checked == false && all[8].checked == false) {
        space3 = 1;
    } else space3 = 0;

    let procent = one + two + three;
    let count = one1 + two1 + three1;
    let wrong_count = wrong1 + wrong2 + wrong3;
    let space_count = space1 + space2 + space3;
    console.log(space_count);
    alert("Правильных ответов:" + count + "(" +
        procent.toFixed(2) + '%' + ')' + '\n' + "Неправильных ответов:" + wrong_count + '\n' + 'Невыбранных ответов:' + space_count);
}