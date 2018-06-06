const db = require("../models");

module.exports = function (app) {
    app.post('/api/budget', function(req, res) {
        var budget = req.body;
        console.log(budget);
        db.Budget.create(req.body).then(function(budget) {
            res.redirect('/budget');
        });
    })
    app.get("/api/budget", function(req, res) {
        db.Budget.findAll()
        .then(function (dbBudget) {
            if (dbBudget.length===0) {
                throw "No results";
            };

            res.render('budget',{
                budgets: dbBudget,
            });
            return({budgets: dbBudget});
        })
        .catch(function (err) {
            res.json(err);
        })
    });
};


