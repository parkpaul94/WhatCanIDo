var express = require("express");
var db = require("./models");

var PORT = process.env.PORT || 8080;

var app = express();

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Listening on PORT :", PORT);
    });
});