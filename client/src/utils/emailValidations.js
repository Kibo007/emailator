const regexEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default emailsString => {
  const invalidEmails = emailsString
    .split(',')
    .map(email => email.trim())
    .filter(email => !regexEmail.test(email));
  if (invalidEmails.length) {
    return `Please add correct email, this email is not valid ${invalidEmails}`;
  }
};
