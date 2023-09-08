// Mail Service config.
import Mailgun from "mailgun.js";
import formData from "form-data";
// Intialize Mailgun
const mailgun = new Mailgun(formData);
const domain = process.env.MAILGUN_ACCEPTED_DOMAIN;

const authCredentials = {
  username: "api",
  key: process.env.MAILGUN_API_KEY,
  url: "https://api.mailgun.net",
};
const mailgunClient = mailgun.client(authCredentials);

const mailer = async (mailOptions) => {
  return mailgunClient.messages.create(domain, mailOptions);
};

export default mailer;
