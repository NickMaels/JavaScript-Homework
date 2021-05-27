let hord=document.getElementsByClassName('hord');
let bugs=document.getElementsByClassName('bugs');
let animals=document.getElementsByClassName('animals');
let rabbit=document.getElementsByClassName('rabbit');
let predator=document.getElementsByClassName('predator');
let rabbit_type=document.getElementsByClassName('rabbit_type');
let predator_type=document.getElementsByClassName('predator_type');
let lastR=document.getElementsByClassName('last_r');
let lastP=document.getElementsByClassName('last_p');
let insects=document.getElementsByClassName('insect');
let meduz=document.getElementsByClassName('meduz');
let worms=document.getElementsByClassName('worms');
let moluski=document.getElementsByClassName('moluski');
function hordHidden()
{
    for(let i=0;i<hord.length;i++)
    {
        hord[i].hidden=true;
    }
}
hordHidden();
function hord_edit(e) {
    
    for(let i=0;i<hord.length;i++)
    {
    hord[i].hidden=false;
    }
    bugsHidden();
    insectHidden();
    meduzHidden();
    bugsHidden();
    meduzHidden();
    wormsHidden();
    molHidden();
}
function bugsHidden()
{
    for(let i=0;i<bugs.length;i++)
    {
        bugs[i].hidden=true;
    }
}
bugsHidden();
function bugs_edit(e) {
    
    for(let i=0;i<bugs.length;i++)
    {
    bugs[i].hidden=false;
    }
    hordHidden();
    rabbitHidden(); 
    animalsHidden();
    predatorHidden();
    predator_typeHidden();
    lastPredatorHidden();
    rabbitHidden();
    rabbit_typeHidden();
    lastRabbitHidden();
    hordHidden();
    meduzHidden();
    wormsHidden();
    molHidden();
    
}

function animalsHidden()
{
    for(let i=0;i<animals.length;i++)
    {
        animals[i].hidden=true;
    }
}
animalsHidden();

function animals_edit()
{
    for(let i=0;i<animals.length;i++)
    {
    animals[i].hidden=false;
    }
}

function rabbitHidden()
{
    for(let i=0;i<rabbit.length;i++)
    {
    rabbit[i].hidden=true;
    }
}
rabbitHidden();

function rabbit_edit()
{
    for(let i=0;i<rabbit.length;i++)
    {
    rabbit[i].hidden=false;
    }
    predatorHidden();
    predator_typeHidden();
    lastPredatorHidden();
}

function predatorHidden()
{
    for(let i=0;i<predator.length;i++)
    {
    predator[i].hidden=true;
    }
}
predatorHidden();

function predator_edit()
{
    for(let i=0;i<predator.length;i++)
    {
    predator[i].hidden=false;
    }
    rabbitHidden();
    rabbit_typeHidden();
    lastRabbitHidden();
}

function rabbit_typeHidden()
{
    for(let i=0;i<rabbit_type.length;i++)
    {
    rabbit_type[i].hidden=true;
    }
}
rabbit_typeHidden();

function rabbit_type_edit()
{
    for(let i=0;i<rabbit_type.length;i++)
    {
    rabbit_type[i].hidden=false;
    }
    predator_typeHidden();
}

function predator_typeHidden()
{
    for(let i=0;i<predator_type.length;i++)
    {
    predator_type[i].hidden=true;
    }
}
predator_typeHidden();

function predator_type_edit()
{
    for(let i=0;i<predator_type.length;i++)
    {
    predator_type[i].hidden=false;
    }
    rabbit_typeHidden();
}

function lastRabbitHidden()
{
    for(let i=0;i<lastR.length;i++)
    {
        lastR[i].hidden=true;
    }
}
lastRabbitHidden();

function lastRabbit_edit()
{
    for(let i=0;i<lastR.length;i++)
    {
        lastR[i].hidden=false;
    }
    lastPredatorHidden();
}

function lastPredatorHidden()
{
    for(let i=0;i<lastP.length;i++)
    {
        lastP[i].hidden=true;
    }
}
lastPredatorHidden();

function lastPredator_edit()
{
    for(let i=0;i<lastP.length;i++)
    {
        lastP[i].hidden=false;
    }
    lastRabbitHidden();
}

//насекомые 

function insectHidden()
{
    for(let i=0;i<insects.length;i++)
    {
        insects[i].hidden=true;
    }
}
insectHidden();
function insects_edit()
{
    for(let i=0;i<insects.length;i++)
    {
        insects[i].hidden=false;
    }
    meduzHidden();
    
}
//Медузы
function meduzHidden()
{
    for(let i=0;i<meduz.length;i++)
    {
        meduz[i].hidden=true;
    }
}
meduzHidden();
function meduz_edit()
{
    for(let i=0;i<meduz.length;i++)
    {
        meduz[i].hidden=false;
    }
    hordHidden();
    bugsHidden();
    wormsHidden();
    molHidden();
    
    hordHidden();
    rabbitHidden(); 
    animalsHidden();
    predatorHidden();
    predator_typeHidden();
    lastPredatorHidden();
    rabbitHidden();
    rabbit_typeHidden();
    lastRabbitHidden();
    hordHidden();
    insectHidden();
}

//черви
function wormsHidden()
{
    for(let i=0;i<worms.length;i++)
    {
        worms[i].hidden=true;
    }
}
wormsHidden();
function worms_edit()
{
    for(let i=0;i<worms.length;i++)
    {
        worms[i].hidden=false;
    }
    hordHidden();
    bugsHidden();
    meduzHidden();
    molHidden();

    hordHidden();
    rabbitHidden(); 
    animalsHidden();
    predatorHidden();
    predator_typeHidden();
    lastPredatorHidden();
    rabbitHidden();
    rabbit_typeHidden();
    lastRabbitHidden();
    hordHidden();
    insectHidden();
}
//молюски
function molHidden()
{
    for(let i=0;i<moluski.length;i++)
    {
        moluski[i].hidden=true;
    }
}
molHidden();
function mol_edit()
{
    for(let i=0;i<moluski.length;i++)
    {
        moluski[i].hidden=false;
    }
    hordHidden();
    bugsHidden();
    meduzHidden();
    wormsHidden();

    hordHidden();
    rabbitHidden(); 
    animalsHidden();
    predatorHidden();
    predator_typeHidden();
    lastPredatorHidden();
    rabbitHidden();
    rabbit_typeHidden();
    lastRabbitHidden();
    hordHidden();
    insectHidden();
}