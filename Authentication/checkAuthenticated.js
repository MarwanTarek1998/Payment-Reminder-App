module.exports = (req, res , next) => {
    if(req.isAuthenticated()) return next()

    res.statusCode = 401
    res.setHeader("content-type" , "application/json")
    res.json({errorMsg: "This user is unauthorized"})
}