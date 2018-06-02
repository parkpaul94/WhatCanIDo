// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
//   app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname, "../index.html"));
//     console.log('\nindex.html');
//   });

  app.get("/index.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
    console.log('\nindex.html');
  });

  // cms route loads cms.html
  app.get("/add.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../add.html"));
    console.log('\nadd.html');
  });

  // blog route loads blog.html
  app.get("/about.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../about.html"));
    console.log('\nabout.html');
  });

  // authors route loads author-manager.html
  app.get("/content.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../content.html"));
    console.log('\ncontent.html');
  });

  app.get("/profile.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../profile.html"));
    console.log('\nprofile.html');
  });

  app.get("/register.html", function(req, res) {
    res.sendFile(path.join(__dirname, "../register.html"));
    console.log('\nregister.html');
  });

}