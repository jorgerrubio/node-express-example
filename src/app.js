'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const timeMiddleware = require('./middlewares/time');
const headersMiddleware = require('./middlewares/header');
const appRouter = require('./app.router');
const userRouter = require('./controllers/user/user.router');
const hotelsRouter = require('./controllers/hotels/hotels.router');

// app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(timeMiddleware);
app.use(headersMiddleware);

app.use('/', appRouter);
app.use('/user', userRouter);
app.use('/hotels', hotelsRouter);

app.listen(3300);