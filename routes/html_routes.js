// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/stats", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

};

