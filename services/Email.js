const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

module.exports = ({ title, subject, receipients }, template) => {
  getEmails = receipients => {
    return receipients.map(user => user.email);
  };

  sgMail.setApiKey(keys.sendgridKey);
  const msg = {
    to: getEmails(receipients),
    from: 'no-reply@emailator.com',
    subject,
    html: template,
  };

  return sgMail.send(msg);
};
