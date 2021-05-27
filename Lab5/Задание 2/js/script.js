function Perimetr()
{
    let first=0;
    let second=0;
    let thrid=0;


    first=first_side.value;
    second=second_side.value;
    thrid=thrid_side.value;

    perimetr.value=+first+ +second+ +thrid;
}
function Aria()
{
    let first=0;
    let second=0;
    let thrid=0;

    let semi_per=0.0;
    first=first_side.value;
    second=second_side.value;
    thrid=thrid_side.value;


    semi_per=(+first+ +second+ +thrid)/2;

    aria.value=Math.sqrt(semi_per*(semi_per-first)*(semi_per-second)*(semi_per-thrid));
}
function Type()
{
    let first=0;
    let second=0;
    let thrid=0;


    first=first_side.value;
    second=second_side.value;
    thrid=thrid_side.value;


    if(first*first+second*second==thrid*thrid || first*first+thrid*thrid==second*second || thrid*thrid+second*second==first*first )type.value="Прямоугольный";
    else 
    {
        if(first*first+second*second<thrid*thrid || first*first+thrid*thrid<second*second || thrid*thrid+second*second<first*first )type.value="Тупоугольный";
        else
        {
            if(first*first+second*second>thrid*thrid || first*first+thrid*thrid>second*second || thrid*thrid+second*second>first*first )type.value="Остроугольный";
        }
    }
    
}
function All()
{
    Perimetr();
    Aria();
    Type();
}