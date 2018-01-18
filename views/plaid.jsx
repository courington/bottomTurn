const React = require('react');
const PlaidAuth = require('../views/plaidAuth');

class Plaid extends React.Component {
  render() {
    return <div>
      <h1>{this.props.name}</h1>
        <PlaidAuth
          publicKey={this.props.key}
          product="auth"
          env="tartan"
          clientName="plaidname"
          onSuccess={this.handleOnSuccess}
          />
    </div>;
  }
}

module.exports = PlaidAuth;
