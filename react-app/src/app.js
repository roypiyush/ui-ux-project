
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var validator = require('express-validator');
var fs = require('fs');
var app = express()

// View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(validator());
// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Set Static files path
app.use(express.static(path.join(__dirname, '../dist')))

var users = JSON.parse(fs.readFileSync(path.join(__dirname, 'user.json'), 'utf8'));

app.get('/', function (req, res) {
  res.render('index', {
    errors: undefined
  })
})

app.get('/users', function (req, res) {
  res.send(users);
});

app.get('/user/:id', function (req, res) {
  var index = req.params.id;
  var size = users.length;
  if (index < size) {
    res.send(users[index])
  }
  else {
    res.status(404).send({ message: 'Resource not found' });
  }
});

app.delete('/user/:id', function (req, res) {
  var index = req.params.id;
  var size = users.length;
  if (index < size) {
    users.splice(index - 1, 1);
    res.status(200).send({message: "Successfully Deleted"});
  }
  else {
    res.status(404).send({ message: 'Resource not found' });
  }
});

app.post('/user', function(req, res) {
  var index = req.params.id;
  users[index] = {
    fname: req.body.user.fname,
    lname: req.body.user.lname,
    email: req.body.user.email,
    age: req.body.user.age
  }
  res.status(200).send({ message: 'Successfully Updated User', users: users});
});

app.put('/user', function(req, res) {
  var user = {
    fname: req.body.user.fname,
    lname: req.body.user.lname,
    email: req.body.user.email,
    age: req.body.user.age

  }
  users.push(user);
  res.status(200).send({ message: 'Successfully Saved User', users: users});
});


app.listen(8000, () => console.log('Application started on http://localhost:8000'))
