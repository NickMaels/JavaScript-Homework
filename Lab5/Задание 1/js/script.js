function encryption()
{
    let number=0;

    let part1=0;
    let part2=0;
    let part3=0;
    let part4=0;

    number=number_in.value;

    part1=number/1000;
    number=number%1000;

    part2=number/100;
    number=number%100;

    part3=number/10;
    number=number%10;

    part4=number;
    part1=Math.floor(part1);
    part2=Math.floor(part2);
    part3=Math.floor(part3);

    part1+=7;
    part1=part1%10;

    part2+=7;
    part2=part2%10;

    part3+=7;
    part3=part3%10;

    part4+=7;
    part4=part4%10;
    
    
    result.value=part3+''+part4+''+part1+''+part2;
  //  alert(part3+' '+part4+' '+part1+' '+part2);
}
