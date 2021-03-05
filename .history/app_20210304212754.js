const express = require('express');
const app = express();
const port = 5500;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  app.get('/', (req, res) => {
    MongoClient.connect(url, function(err, client) {
      const db = client.db('#');
      const collection = db.collection('#');
  
      collection.find({}).toArray((error, documents) => {
        client.close();
        res.render('index', { documents: documents });
      });
    });
  });
});

app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('home', {})
});

app.use(express.static('public',));

  app.get('/callback', passport.authenticate('forcedotcom', {
    successRedirect: '/',
    failureRedirect: '/login'
  }), function(req, res) {
    res.redirect('/');
  });

  const express = require('express');
  const app = express();
  const session = require('express-session');

  app.set('view engine', 'ejs');

  app.use(session({
    save: false,
    saveUninitialized: true,
    secret: 'SECRET'
  }));

  const passport = require('passport');
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

  app.get('/', function(req, res) {
    res.render('views/login.pug');
  });

  const port = process.env.PORT || 5500;
  app.listen(port, () => console.log('App is listening on port  + port'));

  const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
  const GOOGLE_CLIENT_ID = 'our-google-client-id';
  const GOOGLE_CLIENT_SECRET = 'our-google-client-secret';
  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: https://localhost:5500/auth/google/callback"

  },
  function(accessToken, refreshToken, profile, done) {
    userProfile = Profile;
    return done(null, userProfile);
  }
));

app.get('/auth/google')


