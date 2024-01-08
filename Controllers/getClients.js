const User = require('../Models/user')

module.exports = (req , res , next) =>{
    const userID = req.user._id
    User.findById(userID)
    .populate('clients')
    .then(user =>{
        res.statusCode = 200
        res.setHeader('content-type' , 'application/json')
        res.json(user.clients)
    })


}