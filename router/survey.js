const router = require('express').Router();
const requireLogin = require('../middleware/requireLogin');
const requireCredits = require('../middleware/requireCredits');
const email = require('../services/Email');

const _ = require('lodash');
const Path = require('path-parser').default;
const { URL } = require('url');

const mongoose = require('mongoose');
require('../models/Surveys');
const Survey = mongoose.model('surveys');

const templateGenerator = require('../services/emailTemplates/surveyTemplate');

router.get('/:surveyId/:choice', (req, res) => {
  res.send('thank you for wating');
});

router.get('/', requireLogin, async (req, res) => {
  const surveys = await Survey.find({ userId: req.user.id }).select({
    recipients: 0,
  });
  console.log(surveys);
  res.send(surveys);
});

router.post('/', requireLogin, requireCredits, async (req, res) => {
  const { title, subject, recipients, body } = req.body;
  const survey = new Survey({
    title,
    subject,
    body,
    recipients: recipients.split(',').map(email => ({
      email: email.trim(),
    })),
    userId: req.user.id,
    sendDate: new Date(),
  });

  try {
    await survey.save();
    const template = templateGenerator(survey);

    await email(survey, template);

    req.user.credits -= 1;
    const user = await req.user.save();
    res.send(user);
  } catch (err) {
    req.status(422).send(err);
  }
});

router.post('/webhook', (req, res) => {
  const paramsExtractor = new Path('/api/surveys/:surveyId/:choice');

  const events = _.chain(req.body)
    .map(event => {
      const pathname = new URL(event.url).pathname;
      const params = paramsExtractor.test(pathname);
      if (params) {
        return {
          email: event.email,
          surveyId: params.surveyId,
          choice: params.choice,
        };
      }
    })
    .compact()
    .uniqBy('choice', 'surveyId')
    .each(({ email, surveyId, choice }) => {
      Survey.updateOne(
        {
          _id: surveyId,
          recipients: {
            $elemMatch: {
              email: email,
              responded: false,
            },
          },
        },
        {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date(),
        }
      ).exec();
    })
    .value();

  res.send({});
});

module.exports = router;
