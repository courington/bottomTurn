const path = require('path');
const express = require('express');
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

app.get('/', require('./routes').index);
// app.get('/home', require('./routes').home);
// app.get('/plaid', require('./routes').plaid);
// app.post('/plaid/auth', require('./routes').plaidAuth);

app.listen(3000);
