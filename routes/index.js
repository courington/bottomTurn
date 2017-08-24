// routes/index.js
const plaid = require('plaid');

exports.index = (req, res) => {
  const data = {
    name: 'Chase'
  };
  res.render('index', data);
};

// exports.home = (req, res) => {
//   const data = {
//     name: 'home'
//   };
//   res.render('home', data);
// };

exports.plaid = (req, res) => {
  const data = {
    name: 'plaid',
    key: process.env.PLAID_KEY,
    id: process.env.PLAID_ID,
    secret: process.env.PLAID_SECRET,
    publicToken: req.body.public_token
  };
  res.render('plaid', data);
};

exports.plaidAuth = (req, res) => {
  let public_token = process.env.PLAID_KEY;
  let plaidClient = new plaid.Client(process.env.PLAID_ID,
                                     process.env.PLAID_SECRET,
                                     plaid.environments.tartan);

  // Exchange a public_token for a Plaid access_token
  plaidClient.exchangeToken(public_token, function(err, exchangeTokenRes) {
   if (err != null) {
     // Handle error!
   } else {
     // This is your Plaid access token - store somewhere persistent
     // The access_token can be used to make Plaid API calls to
     // retrieve accounts and transactions
     var access_token = exchangeTokenRes.access_token;

     plaidClient.getAuthUser(access_token, function(err, authRes) {
       if (err != null) {
         // Handle error!
       } else {
         // An array of accounts for this user, containing account
         // names, balances, and account and routing numbers.
         var accounts = authRes.accounts;

         // Return account data
         res.json({accounts: accounts});
       }
     });
   }
  });
}
