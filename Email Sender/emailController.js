const nodemailr = require("nodemailer");

const transporter = nodemailr.createTransport({
  service: "gmail",
  auth: {
    type: "oAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

const sendActivationMail = (email , userId) => {

    console.log({email})

    var mailOptions = {
        from: process.env.MAIL_USERNAME,
        to: email,
        subject: "Payment Reminder App - Activation Mail",
        html: "<body style='background-color: #373873; margin: auto; color: white; padding: 24px; max-width: 550px;'><div><img src='https://res.cloudinary.com/defkl7fpy/image/upload/v1702228688/Payment%20Reminder%20App/logo_y7invg.png'alt=''style='width: 100px;'/><table style='width : 100%'><tbody><tr><td style='text-align: center;'><img src='https://res.cloudinary.com/defkl7fpy/image/upload/v1702228648/Payment%20Reminder%20App/7626666_pww6op.png'alt=''style='width: 100px; margin-bottom: 20px;'/></td></tr><tr><td style='text-align: center;'><h2>Successful Registeration</h2></td></tr><tr><td style='text-align: center;'><p style='font-size: 18px; color: white;'>Please click the below button to activate your account, thanks...</p></td></tr><tr><td style='text-align: center;'><a href='http://localhost:3000/activation-successfully/" + userId + "' style='padding: 8px 16px; font-weight: 700; background-color: #00bbb4; color: white; border: 0; border-radius: 4px; cursor: pointer; text-decoration: none;'>Activate My Account</a></td></tr></tbody></table></div></body>"
    };

    transporter.sendMail(mailOptions , (error , info)=> {
        if(error){
            console.log({error})
        }
        else{
            console.log("Activation Email sent successfully")
        }

    })
}

module.exports = {
    sendActivationMail
}
