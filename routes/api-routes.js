const db = require("../models");

module.exports = function (app) {
    // app.get("/index.html", (req, res) => {
    //     // db.Foods.findAll({}).then(function (dbFood) {
    //     //     res.json(dbFood);
    //     });
    app.post('/api/register/', function(req, res) {
        // http://localhost:8080/api/register/
        var user = req.body;
        console.log(user);
        // talk to sequelize... store user
        // send user back to browser
        res.json(user);
    })
};