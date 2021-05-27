let str = prompt("Введите текст Например(sgfsf12321gfgdbg4554) ");
let array = new Array();
array = str.split(/([0-9]+)/);
str = "";
for (let i = 0; i < array.length; i++) {
if (!isNaN(array[i])) {
for (let j = 0; j < array[i].length; j++)
if (array[i][0] != array[i][j]) if (array[i] == array[i].split('').reverse().join('')) array[i] = "";
				      }
	str += array[i];
	                                }
alert('Строка без численных палиндромов: '+str);