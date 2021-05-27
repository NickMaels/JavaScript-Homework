let button=document.getElementById('button');
let count=0;

function countPlus()
{
    count++;
    button.innerHTML='Нажато '+count+' '+declOfNum(count, ['раз', 'раза', 'раз']);
    console.log(count);
}

function declOfNum(number, titles) {  
    cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}
