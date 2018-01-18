const path = require('path')
const express = require('express')
// const exphbs = require('express-handlebars')

const app = express()

app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine());

app.use((request, response, next) => {
  console.log('yay middleware!', request.headers)
  next()
})

app.use((request, response, next) => {
  request.chance = Math.random()
  next()
})

app.get('/', require('./routes').index);
// app.get('/home', require('./routes').home);
// app.get('/plaid', require('./routes').plaid);
// app.post('/plaid/auth', require('./routes').plaidAuth);

app.listen(3000)
