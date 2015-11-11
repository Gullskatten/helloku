const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.set("view options", {layout: false});
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));
app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res) {
  res.render('index.html');
})

app.listen('8080', function(){
  console.log("App is running on port 8080.");
});
