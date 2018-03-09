const redux = require('redux');
 
function routes(state = [], action) {
  switch (action.type) {
    case 'ROUTE_ENTER':
      console.warn(action);
      return state.concat([action.page]);
    default:
      return state;
  }
}

function createAppStore(req, res, callback) {
  res.locals.store = redux.createStore(routes, ['Use Redux']);

  callback(null, res);
}

module.exports = {
  'createAppStore': createAppStore
};
