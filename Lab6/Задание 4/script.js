let str=prompt('Введите строку на подсчет "cert" в ней');
alert('Количество "cert" в строке:'+str.match(/cert/g).length);