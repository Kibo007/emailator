const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

module.exports = ({ title, subject, recipients }, template) => {
  getEmails = recipients => {
    return recipients.map(user => user.email);
  };

  sgMail.setApiKey(keys.sendgridKey);
  const msg = {
    to: getEmails(recipients),
    from: 'no-reply@emailator.com',
    subject,
    html: template,
  };

  return sgMail.send(msg);
};
