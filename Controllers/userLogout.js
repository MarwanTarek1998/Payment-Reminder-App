module.exports = (req , res , next) => {
    req.logout((error) =>{
        res.statusCode = 200
        res.end()
    })
    
}