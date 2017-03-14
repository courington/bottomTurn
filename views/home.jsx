var React = require('react');

class HomeMessage extends React.Component {
  render() {
    return <h1>{this.props.name}</h1>;
  }
}

module.exports = HomeMessage;
