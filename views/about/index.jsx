var React = require('react');
var DefaultLayout = require('../layouts/default');
var Nav = require('../nav');

class HelloMessage extends React.Component {
  render() {
    // console.warn('jsx: ', this);
    return (
      <DefaultLayout title={this.props.title}>
        <Nav links={this.props.links}></Nav>
        <h1>{this.props.name}</h1>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
