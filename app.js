const express = require('express');
const mysql = require('mysql');
const app = express();
const userID ='Sully' 
const password = 'root'

app.set('view-engine', 'ejs')

const connect = mysql.createConnection({
  //properties
  host: 'localhost',
  userID:'root',
  password:'password',
  database: 'sampleDB',
})

connection.connect(function(error) {
  if(!!error) {
    console.log('Error');
  } else {
    console.log('Connected')
  }
});

app.get("/", (req, res) => {
  res.render('login.ejs', {name: 'Sully'})
}),

app.get("views/register.ejs", (req, res) => {

}),

app.get("/views/index.ejs", (req, res) => {

}),

app.listen('3000')