const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express()
    .use(bodyParser.json())
    .use(cors())

app.get('/', (req, res) => {
    // console.log(req.body);
    fs.appendFile('./users', 'htmldfsdfs', (err) => {
        if (err) console.log(err);
        else console.log('saved');
    });
})

app.post('/login', (req, res) => {
    console.log(req.body);
    let x = JSON.stringify(req.body)
    fs.appendFile('./users', x, (err) => {
        if (err) console.log(err);
        else console.log('saved');
    })
});

app.listen(8080);