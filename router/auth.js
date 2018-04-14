const passport = require('passport');
const router = require('express').Router();

// google strategy
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['email', 'profile'],
  })
);
router.get('/google/callback', passport.authenticate('google'));

// logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
