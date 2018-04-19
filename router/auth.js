const passport = require('passport');
const router = require('express').Router();

// google strategy
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/surveys');
});

// logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/signed_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
