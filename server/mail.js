const mailer = require('nodemailer');
const getEmailData = (to, name, type) =>{
    let data = null;
    switch(template){
        case "hello": 
            data = {
                from: "Tlyer Name <taehyun9202@gmail.com>",
                to,
                subject : `Hello ${name}, Thanks for the report!`
            }
            break;
    }
    return data;
}
const sendEmail = (to, name, type) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD
        },
    });
    const mail = getEmailData(to, name, type)
    
    transporter.sendMail(mailOptions, function(err,data) {
        if(err){
            console.log('Error occurs');
        }
        else{
            console.log('Email sent');
        }
        transporter.close();
    });
}


module.exports = { sendEmail};