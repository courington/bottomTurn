var React = require('react');
var DefaultLayout = require('./layouts/default');
var Nav = require('./nav');

class HelloMessage extends React.Component {
  render() {
    // console.warn('jsx: ', this);
    return (
      <DefaultLayout title={this.props.title}>
        <Nav links={this.props.links}></Nav>
        <div>Hello {this.props.name}</div>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
