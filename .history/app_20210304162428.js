const express = require('express');
const app = express();
const port = 5500;

//Auth0 Login Authentication
const { auth } = require('express-openid-connect');

const config = {
  authRequired: false, 
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:5500',
  clientID: 'TYYeWdBvhQhzLjTUJWeGoAFMbsT5bJvh',
  issuerBaseURL: 'https://bettercallsully.us.auth0.com'
}

// Auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

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

app.get('/', (req, res) => {
  
})

