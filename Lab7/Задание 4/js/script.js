
function reverse()
{
    let string = prompt('Введи строку',"eggs and toast and bacon");
    string=string.split('').reverse().join('');
    
    alert(string)
}

reverse();