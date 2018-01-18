var React = require('react');
var DataItem = require('../../views/dataList/DataItem');

class DataList extends React.Component {

  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    console.warn(this.props);
    return (
      <ul>
        <DataItem data={this.props.data}>{this.props.children}</DataItem>
      </ul>
    );
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

module.exports = DataList;
