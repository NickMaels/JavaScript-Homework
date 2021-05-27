$('#btn').click(function() {
    let some_code = $('#code').val()
    eval(some_code);
    let func = new Function();
    func(some_code);
})