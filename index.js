const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')


const server = express()
server.use(cors())
server.use(bodyParser.json())



server.post('/send-email', async (req, res) => {
    const { fullname, emailTo, subject, message } = req.body
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: "deshmukhamruta394@gmail.com",
                pass: "wuuo bfki friu umhu"
            }
        })

        const mailOptions = {
            from: 'emailTo',
            to: 'amrutaingle175@gmail.com',
            subject: `$ ${fullname} is waving at you 👋`,
            // text:message
            html:
                `
       <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Actor&family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Londrina+Solid:wght@100;300;400;900&family=Luckiest+Guy&family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=New+Amsterdam&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&family=Viga&display=swap');
        *{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            font-family: Poppins,sans-serif;
        }
        .container{
            width: 95%;
            padding: 0px 0px;
            margin: 20 auto;
            border: 1px solid gray;
            border-radius: 4px;
            overflow: hidden;
        }
        .header{
            width: 100%;
            background: rgb(126, 189, 247);
            border:1px solid gray;
            overflow: hidden;
            text-align: center;
            padding: 20px;
        }
        .header h2{
            margin: 0px auto;
            font-size: 22px;
            color: #fff;
            font-weight: 520;

        }
        .container .mail-content{
            padding: 20px 30px;
            width: 100%;
        }
        .mail-content p{
            font-size: 14px;
            margin: 15px 0px;
        }
        .mail-content a{
            text-transform: capitalize;
        }
        .mail-footer{
            padding: 20px 30px;
            width: 100%;
        }
        .mail-footer p{
            font-size: 15px;
            font-weight: 540;
        }
        .container .footer{
            padding: 10px;
            text-align: center;
            margin-top: 30px;
            width: 100%;
            background: rgb(126, 189, 247);
        }
        .footer p{
            font-size: 15px;
        }
   </style>
</head>
<body>
   <div class="container">
    <div class="header">
        <h2>Email From Your Portfolio !!</h2>
    </div>
    <div class="mail-content">
        <p><strong>Dear Amruta ,</strong></p>
        <p>I hope you're doing well. My name is ${fullname} ! It feels nice connecting with you !
        <p>I have seen your portfolio and it looks nice !</p>
        <p>I have some questions regarding the portfolio so mail me back : </p>
        <p>${message}</p>
    </div>
    <div class="mail-footer">
        <p>Best Regards,</p>
        <p> ${fullname}</p>
    </div>
    <div class="footer">
        <p> All rights are reserved 2025 &copy; Amruta Ingle.</p>
    </div>
   </div>
</body>
</html>
            `
        }

        await transporter.sendMail(mailOptions)
        res.status(200).send({ status: true, message: "Email sent successfully !!" })

    } catch (error) {
        console.log(error)
        res.status(500).send({ status: false, message: "Internal server error" })
    }
})

server.listen(8055, () => {
    console.log("Server started listening on 8055")
})