const express = require('express');
const authRoutes = require('./router/auth');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

mongoose.connect(keys.mongoURI);

const app = express();

// import model users
require('./models/Users');
// Import passport
require('./services/passport');

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookiesKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Bind routes
app.get('auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('express app is runinng on port 5000');
});
