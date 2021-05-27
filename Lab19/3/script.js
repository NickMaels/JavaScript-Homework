let i = 0;
        let button=document.getElementById('but');
        let pepsi = document.getElementById('pepsi');
        let cola = document.getElementById('cola');
        let fanta = document.getElementById('fanta');
        let sprite = document.getElementById('sprite');

        let pepsiBar = document.getElementById("pepsiBar");
        let colaBar = document.getElementById('colaBar');
        let fantaBar = document.getElementById('fantaBar');
        let spriteBar = document.getElementById('spriteBar');


if(pepsi.checked==false && cola.checked==false && fanta.checked==false && sprite.checked==false)
{
    button.disabled=true;
}

    pepsiBar.hidden=true;
    colaBar.hidden=true;
    fantaBar.hidden=true;
    spriteBar.hidden=true;

function enabledBut()
{
    button.disabled=false;
}

pepsi.addEventListener('click',enabledBut);
cola.addEventListener('click',enabledBut);
fanta.addEventListener('click',enabledBut);
sprite.addEventListener('click',enabledBut);

function move() {
    if (i == 0) {
        i = 1;

        var width = 10;
        var id = setInterval(frame, 10);

        function frame() {

            if (pepsi.checked == true) {
                if (width >= 100) {
                    console.log(width)
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    pepsiBar.style.width = width - 1 + "%";
                    pepsiBar.innerHTML = width - 1 + "%";
                    colaBar.style.width = width / 5 + "%";
                    colaBar.innerHTML = width / 5 + "%";
                    fantaBar.style.width = width / 2 + "%";
                    fantaBar.innerHTML = width / 2 + "%";
                    spriteBar.style.width = (width / 3).toFixed(2) + "%";
                    spriteBar.innerHTML = (width / 3).toFixed(2) + "%";
                }
            } else {
                if (cola.checked == true) {
                    if (width >= 100) {
                        console.log(width)
                        clearInterval(id);
                        i = 0;
                    } else {
                        width++;
                        colaBar.style.width = width - 1 + "%";
                        colaBar.innerHTML = width - 1 + "%";
                        pepsiBar.style.width = (width / 3).toFixed(2) + "%";
                        pepsiBar.innerHTML = (width / 3).toFixed(2) + "%";
                        fantaBar.style.width = width / 2.5 + "%";
                        fantaBar.innerHTML = width / 2.5 + "%";
                        spriteBar.style.width = (width / 4).toFixed(2) + "%";
                        spriteBar.innerHTML = (width / 4).toFixed(2) + "%";
                    }
                } else {
                    if (fanta.checked == true) {
                        if (width >= 100) {
                            console.log(width)
                            clearInterval(id);
                            i = 0;
                        } else {
                            width++;
                            colaBar.style.width = width - 23 + "%";
                            colaBar.innerHTML = width - 23 + "%";
                            pepsiBar.style.width = (width / 4.5).toFixed(2) + "%";
                            pepsiBar.innerHTML = (width / 4.5).toFixed(2) + "%";
                            fantaBar.style.width = width - 1 + "%";
                            fantaBar.innerHTML = width - 1 + "%";
                            spriteBar.style.width = (width / 3.5).toFixed(2) + "%";
                            spriteBar.innerHTML = (width / 3.5).toFixed(2) + "%";
                        }
                    } else {
                        if (sprite.checked == true) {
                            if (width >= 100) {
                                console.log(width)
                                clearInterval(id);
                                i = 0;
                            } else {
                                width++;
                                colaBar.style.width = (width / 2.1).toFixed(2) + "%";
                                colaBar.innerHTML = (width / 2.1).toFixed(2) + "%";
                                pepsiBar.style.width = (width / 1.8).toFixed(2) + "%";
                                pepsiBar.innerHTML = (width / 1.8).toFixed(2) + "%";
                                fantaBar.style.width = width - 32 + "%";
                                fantaBar.innerHTML = width - 32 + "%";
                                spriteBar.style.width = width - 1 + "%"
                                spriteBar.innerHTML = width - 1 + "%"
                            }
                        }
                    }
                }
            }
        }
    }
    button.hidden=true;
    pepsiBar.hidden=false;
    colaBar.hidden=false;
    fantaBar.hidden=false;
    spriteBar.hidden=false;
}