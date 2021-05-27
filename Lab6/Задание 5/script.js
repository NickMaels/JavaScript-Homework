let str = prompt("Введите строку(на латинице)");
let array = str.split(/\W/);
for (let i = 0; i < array.length; i++) {
if (i % 2 != 0) 
if (array[i] % 2 != 0) str = str.replace(array[i], '');
			}
alert(str);