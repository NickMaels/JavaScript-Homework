let year=1990;

let weight=20;

let procent=0.2;

let result=" ";

while(weight>=5)
{
    year=Number(year)+2;
    weight=Number(weight)-Number(weight)*(procent);
    result+='Год:'+year+" "+'Вес:'+weight+"\n";
}
alert(result); 

year=1990;

weight=20;

let all_weight=20;
while(all_weight<=90)
{
    year=Number(year)+2;
    weight=Number(weight)-Number(weight)*(procent);
    all_weight+=weight;
}

alert('В '+year+' году было собрано'+" "+all_weight+' тонна'); 


