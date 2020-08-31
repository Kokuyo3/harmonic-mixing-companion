const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('../node_modules/dotenv').config();

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

module.exports = app;
