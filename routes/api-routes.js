const db = require("../models");

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
};