var express = require('express');
var mysql   = require('mysql');
var app     = express();
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'conferences'
});

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.get('/', function (req, res) {
    connection.query('SELECT * FROM conferences', function(err, conferences, fields) {
        if (err) throw err;

        res.render('index', { conferences: conferences });
    });
})

app.post('/submit', function (req, res) {
    res.redirect(301, '/');
})

app.get('/submit', function (req, res) {
    res.render('submit');
})

var server = app.listen(3000, function () {
    console.log('Example app listening at http://localhost:3000');
})
