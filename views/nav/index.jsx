var React = require('react');
var _ = require('lodash');

class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    );
  }
}

module.exports = Nav;
