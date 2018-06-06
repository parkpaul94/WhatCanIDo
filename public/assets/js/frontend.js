$(function() {

    $('#signInBtn').on('click', (event) => {
        event.preventDefault();
        console.log('I have been clicked')
        $.ajax('/signin', {
            type: 'GET',
            cache: false
        }).done((data) => {
            console.log('shall have been routed to SignIn page now');
            $('body').html(data);
        }).catch((err) => console.log(err));
    });

    $('#signUpBtn').on('click', (event) => {
        event.preventDefault();
        console.log('I have been clicked')
        $.ajax('/signup', {
            type: 'GET',
            cache: false
        }).done((data) => {
            console.log('shall have been routed to SignUp page now')
            $('body').html(data);
        }).catch((err) => console.log(err));
    })



$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});

$('.slider').slider();



console.log('TESTING');
    $.ajax({
        type: 'GET',
        url: "/api/budget",
    })
    .then(function(data) {
        $('#table') // append DATA to table
    })

    $('#budget_submit').on('click', function (event) {
        console.log('POSTING TEST');
        var postData = {
            description: $('#description').val(),
            cost: $('#price').val()
        };
        console.log(postData)
        $.ajax("/api/budget", {
            type: "POST",
            data: postData
        }).done(function(msg) {
            console.log('Budget Logged');
            $('#description').val('');
            $('#price').val('');
            $('body').html(msg)
        })
    })
});
