const  mongoose = require("mongoose")


const connectToDB = (url) =>{
    mongoose.connect(url)
    .then(DB => {
        console.log("......... Connect to DB successfuly ...........")
    })
}

module.exports ={
    connectToDB
}