const User = require("../Models/user");

module.exports = (req, res, next) => {
  const userId = req.params.userId;
    console.log({userId})
  User.findByIdAndUpdate(userId, { isActive: true })
  .then((user) => {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json");
    res.json({ description: "User has been activated successfully" });
  })
  .catch(error => console.log({error}))
};
