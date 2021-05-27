function calculate()
{
  let amount = parseFloat(document.getElementById("amount").value);
  let select = document.getElementById("select");
  let select1 = document.getElementById("select1");
  let result = document.getElementById("result");
    let rates = {
    USD : {
        USD: 1,
        EUR: 0.84,
        MDL: 17.13,
        RUB: 77.43,
    },
    EUR : {
        EUR: 1,
        USD: 1.19,
        MDL: 20.34,
        RUB: 91.93,
    },
    MDL:
    {
        MDL : 1,
        USD : 0.058,
        EUR : 0.049,
        RUB : 4.52,
    },
    RUB:
    {
        RUB : 1,
        USD : 0.013,
        EUR : 0.011,
        MDL : 0.22,
    }
    
}


if(rates[select.value] && rates[select.value][select1.value]){
    result.value = (amount * rates[select.value][select1.value]).toFixed(2);
}
}