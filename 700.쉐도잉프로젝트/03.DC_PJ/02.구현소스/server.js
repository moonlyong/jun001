const express = require('express');

const path = require('path');

const app = express();

app.listen(8080,function () {
    console.log('8080server')
})

app.use(express.static(path.join(__dirname, '/build')))

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname). '/build/index.html')
})