let store = {};

const home = (req, res) => {
  store = res.locals.store;

  const data = {
    name: 'home',
    title: 'bottomTurn - home',
    links: ['home','product','about','contact']
  };

store.dispatch({
    type: 'ROUTE_ENTER',
    page: 'home'
  });

  // fetch some data
  res.render('home', data);
};

const about = (req, res) => {
  store = res.locals.store;

  const data = {
    name: 'about',
    title: 'bottomTurn - about',
    links: ['home','product','about','contact']
  };

  store.dispatch({
    type: 'ROUTE_ENTER',
    page: 'about'
  });

  // fetch some data
  res.render('about', data);
};

const product = (req, res) => {
  store = res.locals.store;

  const data = {
    name: 'product',
    title: 'bottomTurn - product',
    links: ['home','product','about','contact']
  };

  store.dispatch({
    type: 'ROUTE_ENTER',
    page: 'product'
  });

  // fetch some data
  res.render('product', data);
};

const contact = (req, res) => {
  store = res.locals.store;

  const data = {
    name: 'contact',
    title: 'bottomTurn - contact',
    links: ['home','product','about','contact']
  };

  store.dispatch({
    type: 'ROUTE_ENTER',
    page: 'contact'
  });

  // fetch some data
  res.render('contact', data);
};

module.exports = {
  'home': home,
  'about': about,
  'product': product,
  'contact': contact
};
