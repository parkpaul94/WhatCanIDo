$(document).ready(function() {
    $('#reg_submit').on('click', function (event) {
        $.ajax({
            method: "POST",
            url: "localhost",
            data: { 
                firstname: $('#first_name').val(), 
                lastname: $('#last_name').val(),
                pass: $('#password').val(),
                email: $('#email').val(),
            }
          })
            .done(function( msg ) {
              alert( "Data Saved: " + msg );
        })
        event.preventDefault();
    })
})