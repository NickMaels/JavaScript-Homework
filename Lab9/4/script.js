let main_sec;
let sp=document.querySelector('span');

let bt=document.getElementById('bt');
bt.disabled=true;
function edit(e) {
    var secs = prompt('Введи количество секунд:');
    main_sec=secs;
    sp.innerHTML=main_sec;
    bt.disabled=false;
}
function start()
{
    let timer = setInterval(tick,1000);
    function tick(){
    if(main_sec>0)sp.innerText=--main_sec;
    }
}



