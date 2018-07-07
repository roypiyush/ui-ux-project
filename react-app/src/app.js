
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
var validator = require('express-validator');
var app = express()

var users = [
    {
        id: 1,
        fname: 'First_1',
        lname: 'Last_1',
        email: 'test1@gmail.com',
        age: 12
    },
    {
        id: 2,
        fname: 'First_2',
        lname: 'Last_2',
        email: 'test2@gmail.com',
        age: 32
    },
    {
        id: 3,
        fname: 'First_3',
        lname: 'Last_3',
        email: 'test3@gmail.com',
        age: 43
    }
]

// View Engine
app.set('view engine', 'ejs')
console.log(path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'views'))
app.use(validator());
// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Set Static files path
console.log(path.join(__dirname, '../dist'));
app.use(express.static(path.join(__dirname, '../dist')))


app.get('/', function(req, res) {
    res.render('index', {
        errors: undefined
    })
})

app.get('/users', function(req, res) {
    res.send(users);
});

app.get('/user/:id', function(req, res) {
    var index = req.params.id;
    var size = users.length;
    if (index < size) {
        res.send(users[req.params.id])
    }
    else {
        res.header('application/json').status(404).send({message: 'Resource not found'});
    }
});

app.listen(8000, () => console.log('Application started on http://localhost:8000'))
