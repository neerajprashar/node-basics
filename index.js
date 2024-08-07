const express = require('express');
const app = express();
const axios = require("axios");
const bodyParser = require('body-parser')
const ejs = require('ejs');

app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', async (req, res) => {

    const response = await axios.get("https://gorest.co.in/public/v2/users");
    const users = response.data;
    res.render('index.ejs', { users });
});


app.get('/add-record', async (req, res) => {
  
    const showMessage = false;
    res.render('add_record.ejs', {  showMessage });
});

app.post('/add-record', async (req, res) => {

    const { name, email, gender } = req.body;

    let apiRequest = {};
    apiRequest.name = name;
    apiRequest.email = email;
    apiRequest.gender = gender;
    const response = true;//await axios.post("https://gorest.co.in/public/v2/users", apiRequest);
    const showMessage = true;
    res.render('add_record.ejs', { showMessage });
});

app.get('/user/:id', async (req, res) => {

    const response = await axios.get("https://gorest.co.in/public/v2/users");
    const users = response.data;


    const idToFind = req.params.id;
    const record = users.find(record => record.id == idToFind);
 
 
    res.render('single_user.ejs', { user: record });
});

app.get('/update-user/:id', async (req, res) => {

    const response = await axios.get("https://gorest.co.in/public/v2/users");
    const users = response.data;
    const idToFind = req.params.id;
    const record = users.find(record => record.id == idToFind);
    const showMessage = false;
    res.render('update_record.ejs', { showMessage, user: record  });
});

app.post('/update-record', async (req, res) => {

    const { name, email, gender } = req.body;

    let apiRequest = {};
    apiRequest.name = name;
    apiRequest.email = email;
    apiRequest.gender = gender;
    console.log("apiRequest ",apiRequest);
    const response = true;//await axios.post("https://gorest.co.in/public/v2/users", apiRequest);
    const showMessage = true;
    res.render('update_record.ejs', { showMessage, user: apiRequest });
});



//boilerplate

const port = 3000;
app.listen (port, () => {
console.log(`App running on port ${port}...*`);
});
