var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

var transporter = nodemailer.createTransport(smtpTransport({
    host: 'mail.meudominio.com.br',
    port: 587,  
    auth: {
        user: 'autentica@meudominio.com.br',
        pass: 'minhasenha'
    }
}));

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var mailOptions = {
    from: '"Eu" <no-reply@meudominio.com.br>', 
    to: 'para@dominio.com.br', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world', // plaintext body
    html: '<b>Hello world ?</b>' // html body
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

