var React = require('react');
var _ = require('lodash');

class Nav extends React.Component {
  render() {
    let links = this.props.links.map((link, i) => {
      return <li key={i}><a href={link}>{link}</a></li>;
    });
    return <ul>{links}</ul>;
  }
}

module.exports = Nav;
