// // var express = require("express");
// // var db = require("./models");

// // var PORT = process.env.PORT || 8080;

// // var app = express();

// // db.sequelize.sync().then(() => {
// //     app.listen(PORT, () => {
// //         console.log("Listening on PORT :", PORT);
// //     });
// // });


// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 8080; 

// const passport = require('passport');
// const session = require('express-session');
// const flash = require('connect-flash');  
// const bodyParser = require('body-parser');

// const db = require('./models');

// const exphbs = require("express-handlebars");

// app.use(express.static(__dirname + "/public"));

// //BodyParser
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// //Handlebars
// app.set('views', './views');
// app.engine("handlebars", exphbs({ 
//   defaultLayout: "main"
// }));
// app.set("view engine", "handlebars");

// //Passport, express session and passport session
// app.use(session({ 
//   secret: 'keyboard cat',
//   resave: true, 
//   saveUninitialized:true
// })); // session secret
// app.use(passport.initialize());
// app.use(passport.session()); // persistent login sessions
// app.use(flash());// use connect-flash for flash messages stored in session

// // require('./routes/html-routes.js')(app);
// // require("./routes/api-routes.js")(app);
// // require('./routes/auth-api-routes.js')(app,passport);
// // require('./config/passport/passport.js')(passport, db.User);

// db.sequelize.sync({ force: true }).then(function() {
//     app.listen(PORT, function(err) {
//       if(!err) {
//         console.log("App listening on PORT " + PORT);
//       } else {
//         console.log('Database has err: ', err)
//       }
//     });
//   }).catch((err) => {
//     console.log('\n Something wrong and here is the err: ', err)
//   });

// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static(__dirname + "/public/"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
