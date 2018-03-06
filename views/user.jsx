const React = require('react');
const DefaultLayout = require('./layouts/default');
const Nav = require('./nav');

class GetUser extends React.Component {
  render() {
    // console.warn('jsx: ', this);
    return (
      <DefaultLayout title={this.props.title}>
        <Nav links={this.props.links}></Nav>
        <h1>user</h1>
        <h2>hello world</h2>

        <p>this page is the user page</p>
      </DefaultLayout>
    );
  }
}

module.exports = GetUser;
