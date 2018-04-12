var path = require('path');

module.exports = function(app) {

  //when a GET request is made to /survey
  app.get("/survey", function(req, res) {
    //respond with .sendFile() - Send a file as an octet stream.
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
