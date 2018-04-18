module.exports = (req, res, next) => {
  if (req.user.credits < 1) {
    res.status(402).send({ error: 'you need more credits to create survay' });
  }

  next();
};
