const router = require('express').Router();
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const email = require('../services/Email');

const mongoose = require('mongoose');
require('../models/Survays');
const Survay = mongoose.model('survays');

const templateGenerator = require('../services/emailTemplates/surveyTemplate');

router.post('/', requireLogin, requireCredits, async (req, res) => {
  const { title, subject, receipients, body } = req.body;
  const survay = new Survay({
    title,
    subject,
    body,
    receipients: receipients.split(',').map(email => ({
      email: email.trim(),
    })),
    sendDate: new Date(),
  });

  try {
    await survay.save();
    const template = templateGenerator(survay);

    await email(survay, template);

    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  } catch (err) {
    req.status(422).send(err);
  }
});

module.exports = router;
