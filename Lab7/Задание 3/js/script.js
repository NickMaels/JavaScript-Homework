
function swap()
{
    let string = prompt('Введи строку',"eggs and toast and bacon");
    let array = string.trim().split(' ');
    
    let temp = array[0];
    array[0] = array[array.length -1];
    array[array.length - 1] = temp;
    let newString = array.join(' ');
    alert(newString);
}

swap();