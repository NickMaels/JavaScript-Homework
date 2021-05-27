$('#btn').click(function() {
    $('td').each(function() {
        console.log($(this).text())
        if ($(this).text() == 0) $(this).css('background-color', 'red');
    });
});