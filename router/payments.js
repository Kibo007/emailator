const router = require('express').Router();
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middleware/requireLogin');

router.post('/add-credits', requireLogin, async (req, res) => {
  try {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '5 euro for 5 credits',
      source: req.body.id,
    });
  } catch (err) {
    console.log(err);
  }

  req.user.credits += 5;
  const user = await req.user.save();
  res.send(user);
});

module.exports = router;
