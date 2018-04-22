const express = require('express');
const authRoutes = require('./router/auth');
const paymentsRoutes = require('./router/payments');
const surveysRoutes = require('./router/survey');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI);

// test if this works for debugging of mongoose
mongoose.set('debug', function(coll, method, query, doc) {
  console.log(
    `${coll} ${method} ${JSON.stringify(query)} ${JSON.stringify(doc)}`
  );
});

const app = express();

// import models
require('./models/Users');
require('./models/Surveys');
// Import passport
require('./services/passport');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookiesKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Bind routes
app.use('/auth', authRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/surveys', surveysRoutes);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('express app is runinng on port 5000');
});
