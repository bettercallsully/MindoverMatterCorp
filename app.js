const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//Express.JS app
const app = express();

//MongoDB Connection Link
const dbURI = 'mongodb+srv://testuser1:admin123@cluster0.p2nae.mongodb.net/mindovermatter?retryWrites=true&w=majority'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(5500))
.catch((err) => console.log(err));

//Register Viewengine 
app.set('view engine', 'pug','ejs');

