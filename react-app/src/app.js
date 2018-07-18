
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var validator = require('express-validator');
var app = express()

var users = [
  {
    id: 1,
    fname: 'John',
    lname: 'Doe',
    email: 'john.doe@email.com',
    age: 12
  },
  {
    id: 2,
    fname: 'Bob',
    lname: 'Marley',
    email: 'bob.marley@email.com',
    age: 32
  },
  {
    id: 3,
    fname: 'Sam',
    lname: 'Lee',
    email: 'sam.lee@email.com',
    age: 43
  }
]

// View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(validator());
// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Set Static files path
app.use(express.static(path.join(__dirname, '../dist')))


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
    res.send(users[req.params.id])
  }
  else {
    res.status(404).send({ message: 'Resource not found' });
  }
});

app.put('/user', function(req, res) {
  var user = {
    id: users.length + 1,
    fname: req.body.user.fname,
    lname: req.body.user.lname,
    email: req.body.user.email,
    age: req.body.user.age

  }
  users.push(user);
  res.status(200).send({ message: 'Successfully Save User', users: users});
});


app.listen(8000, () => console.log('Application started on http://localhost:8000'))
