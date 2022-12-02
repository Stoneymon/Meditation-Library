const express = require('express');
const app = express();
const path = require('path');
const items = require('./data/items.js');

app.use((req, res, next) => {
    console.log(req.method, req.url, req.headers["content-type"], req.body);
    next();
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json());


/*
 * Task 2c - DO NOT MODIFY!
 */
function getOneRandomElementOfArray(arr) {
    if (arr == null || arr.length === 0) {
        return null;
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

app.get('/books/random', function (req, res) {
    res.send(getOneRandomElementOfArray(items.books));
});
app.get('/cpus/random', function (req, res) {
    res.send(getOneRandomElementOfArray(items.cpus));
});
app.get('/phones/random', function (req, res) {
    res.send(getOneRandomElementOfArray(items.phones));
});
app.get('/cars/random', function (req, res) {
    res.send(getOneRandomElementOfArray(items.cars));
});
app.get('/planets/random', function (req, res) {
    res.send(getOneRandomElementOfArray(items.planets));
});
app.get('/movies/random', function (req, res) {
    res.send(getOneRandomElementOfArray(items.movies));
});


/*
 * Task 2d
 */
var myCourses = [
    {"course": "Web Technologies"},
    {"course": "Programming"},
    {"course": "Mathematics I"},
    {"course": "Statistics I"},
    {"course": "Applied Informatics"}
]

app.get('/courses', function (req, res){
    res.send(myCourses);
});

/*
 * Task 2f
 */
app.post('/courses', function(req, res){
    myCourses.push({"course":req.body[0]});
    res.end();
});


app.listen(3000);