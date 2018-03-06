const index = (req, res) => {
  const data = {
    title: 'index',
    name: 'bottomTurn - index',
    links: ['home']
  };

  // fetch some data
  res.render('index', data);
};

const home = (req, res) => {
  const data = {
    title: 'home',
    name: 'bottomTurn - home'
  };

  // fetch some data
  res.render('index', data);
};

const getUser = (req, res) => {
  const data = {};
  res.render('user', data);
};

const postUser = (req, res) => {
  const data = {};
  res.render('user', data);
};

module.exports = {
  'index': index,
  'home': home,
  'getUser': getUser,
  'postUser': postUser
};
