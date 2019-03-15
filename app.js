const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
const controller = require('./controller/rendom_user');
controller(app);
app.listen(port, ()=>{console.log('listen port 3000')});

