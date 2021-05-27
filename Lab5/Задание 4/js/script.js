function integerPower(base,exponent)
{
    base=base_number.value;
    exponent=exp_number.value;

    let res=1;
    for(let i=0;i<exponent;i++)
    {
        res=base*res;
    }
    result.value=res;
}