const User = require("../Models/user");
const bcrypt = require("bcrypt");

module.exports = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {

      if (user) {

        if (!user.isActive) {
          res.statusCode = 400;
          res.setHeader("content-type", "application/json");
          res.json({
            errorMsg: "Please activate your account via you email,Thanks",
          });
          return;
        }
      
        bcrypt
          .compare(req.body.password , user.password)
          .then((same) => {
            if (same) {
              res.statusCode = 200;
              res.setHeader("content-type", "application/json");
              res.json(user);
            } else {
              res.statusCode = 400;
              res.setHeader("content-type", "application/json");
              res.json({ errorMsg: "Invalid password" });
            }
          })
          .catch((error) => console.log({ error }));
      } 
      else {
        res.statusCode = 404;
        res.setHeader("content-type", "application/json");
        res.json({ errorMsg: "This email is not registered" });
      }
    })
    .catch((error) => {
      res.statusCode = 500;
      res.setHeader("content-type", "application/json");
      res.json({ errorMsg: "Internal server error" });
    });
};
