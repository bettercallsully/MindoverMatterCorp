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

  const express = require(
  )

  





