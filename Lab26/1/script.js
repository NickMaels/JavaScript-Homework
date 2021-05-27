$('img').mouseover(function() {
    let first = $('#first').attr('src');
    let second = $('#second').attr('src');
    $('#first').attr('src', second);
    $('#second').attr('src', first);
});