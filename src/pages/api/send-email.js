import query from "query-string";
import mailer from "../../services/mail-service";


async function ApiMailHandler(req, res) {
  const { method } = req;
  let isSent = false;

  if (method === "GET") {
    const { to, data, subject } = query.parse(req.url?.split("?")[1]);
    if (!to || !data) {
      return res.status(400).json({ message: "Missing request parameter" });
    }
    isSent = handleMailing({ to, data, subject });
    if (isSent) res.status(200).send({ message: "Email sent!" });
    else {
      res
        .status(500)
        .send({ message: "Something went wrong with the server mailer." });
    }
  } else if (method === "POST") {
    const { to = "", data, subject } = req.body;
    if (!to || !data) {
      return res.status(400).json({ message: "Missing request parameter" });
    }
    isSent = handleMailing({ to, data, subject });
    if (isSent) res.status(200).send({ message: "Email sent!" });
    else {
      res
        .status(500)
        .send({ message: "Something went wrong with the server mailer." });
    }
  } else {
    res.status(405).send({ error: `Sorry, method ${method} not allowed!` });
  }
}

const handleMailing = async ({ to, data, subject }) => {
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
    return true;
  } catch (e) {
    console.log("ERROR sending e-mail.", e);
  }
};

export default ApiMailHandler;
