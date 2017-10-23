//********************************************************
//            INITIAL SERVER APPLICATION SETUP
//******************************************************** 

const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');      // samo se izvede cim se pokrene index.js

mongoose.connect(keys.mongoURI);

const app = express();

// cookie setup
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // trajanje cookija
    keys: [keys.cookieKey]            // cookie enkripcija
  })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
