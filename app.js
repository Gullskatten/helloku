const express = require('express');
const bodyParser = require('body-parser');
const jade = require('jade');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/login', function(req, res) {
  res.render('login');
});

app.post('/login', function (req, res, error) {
    const PASS_KEY = req.body.passKey;
    if(PASS_KEY === '123'){
      session.set
      res.redirect('/welcome');
    }else{
      res.render('login', {error: 'Wrong passkey!!'});
    }
});

app.listen('8080', function(){
  console.log("App is running on port 8080.");
});
