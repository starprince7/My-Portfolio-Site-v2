const Mailgun = require('mailgun.js')
const formData = require('form-data')
// Intialize Mailgun
const mailgun = new Mailgun(formData)
const DOMAIN = process.env.MAILGUN_ACCEPTED_DOMAIN;

const auth_credentials = {
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
    url: 'https://api.mailgun.net'
}

const notificationHandler = async (req, res) => {
    const { name, email, message } = req.body;

    const client = mailgun.client(auth_credentials)

    const mail_options = {
        from: "Portfolio Site <codeplugservices@gmail.com>",
        to: process.env.ADMIN_EMAIL,
        subject: "Get In Touch",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    try {
        const mail_success = await client.messages.create(DOMAIN, mail_options)
        mail_success && console.log("MESSAGE SENT!!!");
        mail_success && res.status(200).json({ msg: "Message has been delivered successfully."});
    } catch (e) {
        console.log("ERROR OCCURED!!! =====", e);
        res.status(401).json({ error: e.message })
    }
};

export default notificationHandler