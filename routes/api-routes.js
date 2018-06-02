const db = require("../models");
const Activity = require("../models/activity");

module.exports = function (app) {
    app.post('/api/register/', function(req, res) {
        // http://localhost:8080/api/register/
        var user = req.body;
        console.log(user);
        // talk to sequelize... store user
        // send user back to browser
        db.User.create(req.body).then(function(user) {
            res.json(user);
        })
    })
    app.post('/api/login/', function(req, res) {
// receive login info from browser (post)
// front-end ajax call
// back-end receives data...
        var login = req.body;
        console.log(login);
        // server sends two calls to database (query)
        // "is there a matching username in the db with this info"
        // "does their password match?" (passport)
        db.User.findOne(req.body).then(function(user) {
            res.json(user);
            // if true (to the both conditions), go to other route
            // res.render('html file')
        })
    })


    // routes for grabbing the activities from content page

    app.post("/api/add", function(req, res) {
        db.Activity.create(req.body).then(function(activity) {
            res.json(activity);
        })
      });

    app.get("/api/content", function(req,res) {
        db.Activity.findAll({})
        .then(function(activities){
            res.json(activities);
        });
    });


};


