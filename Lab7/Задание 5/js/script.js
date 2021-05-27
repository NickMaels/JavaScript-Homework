function convert_Number()
{
    let num=all_number.value;

    let split_number=num.replace(/ /g, '').split(/[\(\)]/);

    area.value=split_number[1];
    number.value=split_number[2];
}