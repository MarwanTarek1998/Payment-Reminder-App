module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.statusCode = 200
    res.setHeader("content-type" , "application/json")
    res.json({errorMsg: "This user is authorized"})
  } else {
    res.statusCode = 401;
    res.setHeader("content-type", "application/json");
    res.json({ errorMsg: "This user is unauthorized" });
  }
};
