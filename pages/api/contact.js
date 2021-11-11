export default function (req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.strato.de",
        auth: {
            user: 'philipp@jawny.de',
            pass: process.env.MAILER_PASSWORD,
        },
        secure: true,
    })

    const mailData = {
        from: req.body.email,
        to: 'jawny.p@gmail.com',
        subject: `Kontaktformular Jawny.de - Neue Nachricht`,
        html: `
            <div>Neue Nachricht über das Kontaktformular auf Jawny.de</div>
            <div>Absender: <b>${req.body.name}</b></div>
            <div>Mail: <b>${req.body.email}</b></div>
            <p>${req.body.message}</p>
        `,
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
    })

    return res.status(200).json({ name: 'Next.js' })
}