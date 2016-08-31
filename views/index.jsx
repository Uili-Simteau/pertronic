var React = require('react');


var IndexComponent = React.createClass({
  render: function(){
    return (
      <div>
        <h1>I'm building using {this.props.name}</h1>
      </div>
      )
  }
});

module.exports = IndexComponent