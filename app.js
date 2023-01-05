const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const loginRoute = require('./routes/login');
const messageRoute = require('./routes/message')

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoute);

app.use(messageRoute);

app.listen(4000);