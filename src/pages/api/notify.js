import mailer from "../../services/mail-service";

const notificationHandler = async (req, res) => {
  const { name, email, message } = req.body;

  const mail_options = {
    from: "Portfolio Site <codeplugservices@gmail.com>",
    to: process.env.ADMIN_EMAIL,
    subject: "Get In Touch",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    const mail_success = await mailer(mail_options);
    mail_success && console.log("MESSAGE SENT!!!");
    mail_success &&
      res.status(200).json({ msg: "Message has been delivered successfully." });
  } catch (e) {
    console.log("ERROR OCCURED!!! =====", e);
    res.status(401).json({ error: e.message });
  }
};

export default notificationHandler;
