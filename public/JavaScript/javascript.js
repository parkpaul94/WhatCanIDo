$(document).ready(function() {
    $('#reg_submit').on('click', function (event) {
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/api/register",
            data: { 
                firstname: $('#first_name').val(), 
                lastname: $('#last_name').val(),
                pass: $('#password').val(),
                email: $('#email').val()
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
                pass: $('#password').val()
            }
        })
        .done(function(msg) {
            console.log('Logged In');
        })
        event.preventDefault();
    })

    $('#budget_submit').on('click', function (event) {
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/api/budget",
            data: {
                description: $('#description').val(),
                cost: $('#price').val()
            }
        }).done(function(msg) {
            console.log('Budget Logged');
            $('#description').val('');
            $('#price').val('');
        })
    })
})


// Adding the activity to the content page 


$("#submit-btn").on("click", function(event) {
    event.preventDefault();

    var newContent = {
      category: $("#category").val().trim(),
      activity: $("#activity").val().trim(),
      rating: $("#rating").val().trim(),
      price: $("#price").val().trim(),
      description: $("#description").val().trim()
    };

    console.log(newContent);

      $.post("/api/add", newContent,
      function(data) {

        if (data) {
          alert("Yay! You are officially adding");
        }

        else {
          alert("Not adding");
        }

        $("#category").val();
        $("#activity").val();
        $("#rating").val();
        $("#price").val();
        $("#description").val();


      });

  });