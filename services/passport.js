const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');
// user session => put some user info (ovdje user.id) into a cookie
passport.serializeUser((user, done) => {    // user iz mongoDB koji se vratio u callback-u ispod
  done(null, user.id);                      // user.id nije googleId vec id koji generira mongoDB za svakog usera
});

// take user object from cookie to user from mongoDB
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then((user) => {
      done(null, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((existingUser) => {
        if (existingUser) {
          // User exists, dont save to DB
          done(null, existingUser);             // ovaj user se vraca u passport serializeUser kao prvi argument
        } else {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));    // ili ovaj user se vraca u passport serializeUser kao prvi argument
        }
      });
    }
  )
);
