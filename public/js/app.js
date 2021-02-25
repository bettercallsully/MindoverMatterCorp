const express = require('express');
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.set('view engine', 'pug');
app.get('/', (req, res) => {
  res.render('home', {})
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  const imgs = [
    { name: 'img1', image: 'logo.png'},
  ];
  res.render('home', { img1: logo})
});

each img1 in MindoverMattr 
div.