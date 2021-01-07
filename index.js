const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const { Client } = require('pg');

const client = new Client({
    user: 'postgres',
    password: 'prtk555',
    host: 'localhost',
    database: 'postgres'
});





const app = express()
    .use(cors())
    .use(bodyParser.json())

app.get("/", (req, res) => {
    console.log(req);
})

let obj = {
    message: "received"
}

app.post("/signup", async (req, res) => {
    try {
        
        await client.connect()
        console.log("sucessfully connected")
        await client.query(`insert into users2 values ('${req.body.user}','${req.body.password}')`)
        let result = await client.query('select * from users2;')
        console.log(result.rows)
    }
    catch (err) {
        console.log(err);
    }
    finally {
        await client.end();
    }
})

app.listen(8080);