function finder()
{
    var str=text.value;
    var find_str=symbol.value;
    for(var count=-1,index=-2; index != -1; count++,index=str.indexOf(find_str,index+1));
    result.value=count; 
}