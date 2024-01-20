const express = require('express');
const app = express();

const port = 3000;

app.listen(port, () =>{
    console.log( `Example app listening at http://localhost:${port}`)    
});


 app.get('/', function(req, res) {
    res.send('<h1>Hi! Welcome in REST Simulator</h1>');

 })
 app.get('/boo', function (req, res) {
    res.send('Hello world!')
 });

 app.get('/foo', function (req, res) {
    res.json( {"foo": "bar"})
 });