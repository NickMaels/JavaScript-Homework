

let temp;

let count=0;

let money=0.0;
do
{
    temp=+prompt('продукт1-2,98$'+'\n'+'продукт2-4,50$'+'\n'+'продукт3-9,98$'+'\n'+'продукт4-4,49$'+'\n'+'продукт5-6,87$'+'\n'+'0-Выход/Просмотр общей стоимости'+'\n'+'Введите номер продукта:');
    
    switch(temp)
    {
        case 1:
        {
                count=prompt('Введите колличество товара:');
                money+=count*2.98;
                break;
        }
        case 2:
        {
                count=prompt('Введите колличество товара:');
                money+=count*4.50;
                break;
        }
        case 3:
        {
                count=prompt('Введите колличество товара:');
                money+=count*9.98;
                break;
        }
        case 4:
        {
                count=prompt('Введите колличество товара:');
                money+=count*4.49;
                break;
        }
        case 5:
        {
                count=prompt('Введите колличество товара:');
                money+=count*6.87;
                break;
        }
    }
}while(temp!=0)

if(money>0)alert('Общаяя стоимость проданных продуктов:'+money+'$');
else alert('Ничего не было продано!');