const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require("../Models/user");
const bcrypt = require('bcrypt')

const authUser = (email , password , done) => {

    User.findOne({ email: email })
    .then((user) => {

      if (user) {

        if (!user.isActive) {
          return done(null , false)
        }
      
        bcrypt
          .compare(password , user.password)
          .then((same) => {
            if (same) {
              return done(null , user)
            } else {
                
                return done(null , false)
            }
          })
          .catch((error) => console.log({ error }));
      } 
      else {
        return done(null , false)
      }
    })
    .catch((error) => {
        console.log({error})
        return done(null , false)
    });
}

passport.use(new LocalStrategy( {usernameField: "email"} ,authUser))

passport.serializeUser((user , done) => {
    return done(null , user._id)
})

passport.deserializeUser((id , done)=>{
    User.findById(id)
    .then(user => {
        done(null , user)
    })
})