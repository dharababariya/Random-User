//Import modules

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const port = 3000;
const bodyParser = require('body-parser')


app.use(express.json());


//env config
dotenv.config();
// parse application/json
app.use(bodyParser.json());


const controller = require('./controller/rendom_user');
const addusers = require('./controller/add_users');

//fire controller
controller(app);
addusers(app);





app.listen(port, ()=>{console.log('listen port 3000')});

