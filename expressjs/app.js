
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
        email: 'test1@gmail.com'
    },
    {
        id: 2,
        fname: 'First_2',
        lname: 'Last_2',
        email: 'test2@gmail.com'
    },
    {
        id: 3,
        fname: 'First_3',
        lname: 'Last_3',
        email: 'test3@gmail.com'
    }
]

// View Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(validator());
// Body Parser Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// Set Static files path
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function(req, res) {
    res.render('index', {
        users: users,
        errors: undefined
    })
})

app.post('/user/add', function(req, res){
    req.checkBody('fname', 'Enter Your First Name').notEmpty();
    req.checkBody('lname', 'Enter Your Last Name').notEmpty();
    req.checkBody('email', 'Enter Valid Email Address').isEmail();
    var errors = req.validationErrors();
    if (errors) {
        res.render('index', {
            users: users,
            errors: errors
        });
    }
    else {
        var newUser = {
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email
        }
        console.log('User Created ' + newUser);
        users.push(newUser)
        res.redirect("/")
    }

})


app.post('/user/delete/:id', function(req, res){
    console.log("Output " + req.params.id)
    users.splice(req.params.id, 1);
})

app.listen(8080, () => console.log('Application started on http://localhost:8080'))
