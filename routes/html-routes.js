var path = require("path");
const db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {



  app.get("/", function(req, res) {
    res.render(path.join(__dirname, "../views"));
    console.log('\nindex');
  });

  app.get("/index", function(req, res) {
    res.render(path.join("index.handlebars"));
    console.log('\nindex');
  });

  // cms route loads cms
  app.get("/add", function(req, res) {
    res.render(path.join("add.handlebars"));
    console.log('\nadd');
  });

  // blog route loads blog
  app.get("/about", function(req, res) {
    res.render(path.join("about.handlebars"));
    console.log('\nabout');
  });

  // authors route loads author-manager
  app.get("/content", function(req, res) {
    res.render(path.join("content.handlebars"));
    console.log('\ncontent');
  });

  app.get("/profile", function(req, res) {
    res.render(path.join("profile.handlebars"));
    console.log('\nprofile');
  });

  app.get("/signin", function(req, res) {
    res.render(path.join("signin.handlebars"));
    console.log('\nsignin');
  });

  app.get("/signup", function(req, res) {
    res.render(path.join("signup.handlebars"));
    console.log('\nsignup');
  });

  app.get("/budget", function(req, res) {
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
  // app.get("/budget", function(req, res) {
  //   res.render(path.join("budget.handlebars"));
  //   console.log('\nbudget');
  // });
};
