function Distance()
{
    let a1;
    let b1;
    let a2;
    let b2;

    a1=x1.value;
    b1=y1.value;

    a2=x2.value;
    b2=y2.value;

    result.value=Math.sqrt((a2-a1)*(a2-a1)+(b2-b1)*(b2-b1));
}