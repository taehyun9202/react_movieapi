require('dotenv').config();
const express = require("express");
const cors = require("cors");
const port = 8000;
const axios = require("axios");
const db_name = "e";
const nodemailer = require("nodemailer");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { sendEmail } = require('./mail');

app.use(cors());
app.use(express.json()); 
//email use
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post("/api/sendMail", (req,res)=>{
  console.log(req.body);
  nodemailer.createTestAccount((err,account) =>{}

  )
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    },
  });
  // send mail with defined transport object
  let mailOptions ={
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "taehyun9202@gmail.com",
    subject: req.body.subject, // Subject line
    text: req.body.message, // plain text body
    html: "<b>Hello world?</b>", // html body
  };

  transporter.sendMail(mailOptions, function(err,data) {
    if(err){
        console.log('Error occurs');
    }
    else{
        console.log('Email sent');
    }
});
})





require("./config/mongoose")(db_name);
require("./routes/MovieApi.routes")(app);

app.listen(port, ()=> console.log(`Listening on port ${port}`))