const path = require('path');
const express = require('express');
const routes = require('./routes');
const models = require('./models');
// const exphbs = require('express-handlebars')

const app = express();

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

function booyah(req, res, next) {
  console.warn(req, res);
  return next();
}

function yeabud(req, res, next) {
  console.warn('yeah bud');
  return next();
}

// app.use((request, response, next) => {
//   next();
// });
app.use(booyah, yeabud);

app.get('/', routes.index);
app.get('/home', routes.home);

app.get('/user/:id', routes.getUser);
app.get('/user', routes.getUser);
app.post('/user', routes.postUser);
// app.get('/plaid', require('./routes').plaid);
// app.post('/plaid/auth', require('./routes').plaidAuth);

app.listen(3000);
