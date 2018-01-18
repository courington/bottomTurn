var React = require('react');
const DataList = require('../views/dataList/DataList');

class HomeMessage extends React.Component {
  render() {
    return <DataList data={this.props.names}>{this.props.children}</DataList>;
  }
}

module.exports = HomeMessage;
