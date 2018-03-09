const path = require('path');
const express = require('express');
const routes = require('./routes');
const models = require('./models');
const middleware = require('./middleware');

const app = express();

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

function yeabud(req, res, next) {
  console.warn('yeah bud');
  return next();
}

// app.use((request, response, next) => {
//   next();
// });
app.use(yeabud, middleware.createAppStore);

app.get('/', routes.home);
app.get('/home', routes.home);
app.get('/about', routes.about);
app.get('/product', routes.product);
app.get('/contact', routes.contact);

// app.get('/plaid', require('./routes').plaid);
// app.post('/plaid/auth', require('./routes').plaidAuth);

app.listen(3000);
