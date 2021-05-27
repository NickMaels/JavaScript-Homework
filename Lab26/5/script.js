let sum = 0.0;

$('#text').val(sum);

$('#book1').click(function() {
    if ($('#book1').is(':checked') == true) sum += 50.0;
    else sum -= 50.0;
    $('#text').val(sum);
})
$('#book2').click(function() {
    if ($('#book2').is(':checked') == true) sum += 60.0;
    else sum -= 60.0;
    $('#text').val(sum);
})
$('#book3').click(function() {
    if ($('#book3').is(':checked') == true) sum += 30.5;
    else sum -= 30.5;
    $('#text').val(sum);
})