const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer')
const cors = require('cors');
//const { credeciais } = require('./.env')

const app = express();


var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(express.static('dist/tracaja'))

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/*', function (req, res) {
  res.sendFile('dist/tracaja');
});
let transporter
const environment = {
  email: process.env.email,
  pass: process.env.password
};

transporter = nodemailer.createTransport({
  host: "email-ssl.com.br",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: environment.email,
    pass: environment.pass,
  }
});

async function enviar(req) {
  envio = await transporter.sendMail({
    from: environment.email,
    to: 'carlosgmr2304@gmail.com',
    subject: req.body.subject,
    replyTo: req.body.mail,
    text: req.body.text
  })

  console.log(envio)
}
app.post('/enviar', (req, res) => {
  enviar(req)

  res.status(204).send('Ok')

})



app.listen(3100, () => {
  console.log('Server Started!');
});
