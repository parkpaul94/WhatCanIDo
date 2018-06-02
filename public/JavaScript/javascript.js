$(document).ready(function() {
    $('#reg_submit').on('click', function (event) {
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/api/register",
            data: { 
                firstname: $('#first_name').val(), 
                lastname: $('#last_name').val(),
                pass: $('#password').val(),
                email: $('#email').val(),
            }
          })
            .done(function(msg) {
                console.log('string', msg);
        })
        event.preventDefault();
    })
    
    $('#login_submit').on('click', function (event) {
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/api/login",
            data: { 
                email: $('#email').val(),
                pass: $('#password').val(),
            }
        })
        .done(function(msg) {
            console.log('Logged In');
        })
        event.preventDefault();
    })
})