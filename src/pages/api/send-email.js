import mailer from "../../services/mail-service";

export default async function (req, res) {
  const { method } = req;
  switch (method) {
    case "POST":
      const { to = "", data, subject } = req.body;
      const customSubject = "Starprince's E-Mailer";
      const mailOptions = {
        from: "Starprince's Server <no-reply-sys@princenweke.com>",
        to,
        subject: subject || customSubject,
        text: data.toString(),
      };

      try {
        const result = await mailer(mailOptions);
        console.log("SUCCESS sending e-mail!");
      } catch (e) {
        console.log("ERROR sending e-mail.", e);
      }
      break;
    default:
      res.status(405).send({ error: `Sorry, method ${method} not allowed!` });
      break;
  }
}
