
//let array=[-3,-10,8,-23,0,1,4,-50,10,3];

//let array=[4, -8, 7, -6, 0, -7, 5]

let array=[];
let barray=[];

let number=prompt('Введите количество элементов массива:');

for(let i=0;i<number;i++)
{
  array[i]=prompt('Введи элемент');
}

array.sort(function(a,b){ 
  return a - b;
}) 

let k=0;

while(array[k]<0)k++;

for (let i=0;i<k;i++) barray[i]=array[k-i-1];

for (let i=k;i<number;i++) barray[i]=array[i];

alert(barray)