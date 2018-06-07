var exports = module.exports = {};
var db = require('../models');

exports.signup = function(req, res) {
  console.log(req.body);
  res.render('signup.handlebars');
};

exports.signin = function(req, res) {
  console.log(req.body);
  res.render('signin.handlebars');
};

exports.userloggedin = function(req, res) {
    db.Budget.findAll()
    .then(function (dbBudget) {
        db.Content.findAll()
            .then(function (dbContent) {
                res.render('profile', { 
                  budgets: dbBudget, activities: dbContent 
                });
            })
    })
    .catch(function (err) {
        res.json(err);
    })
};

exports.logout = function(req, res) {
  req.session.destroy(function(err) {
    res.redirect('/');
  })
}