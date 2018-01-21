exports.index = (req, res) => {
  const data = {
    title: 'express react',
    name: 'bottomTurn'
  };

  // fetch some data
  res.render('index', data);
};
