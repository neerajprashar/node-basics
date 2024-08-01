const express = require('express');
const app = express();
const axios = require("axios");
const bodyParser = require('body-parser')
const ejs = require('ejs');

app.use(bodyParser.json())


app.get('/', async (req, res) => {

    const response = await axios.get("https://gorest.co.in/public/v2/users");
    const users = response.data;
    res.render('index.ejs', { users });
});

//boilerplate

const port = 3000;
app.listen (port, () => {
console.log(`App running on port ${port}...*`);
});
