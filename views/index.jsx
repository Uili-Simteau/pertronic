var React = require('react');
var DefaultLayout = require('./layouts/master')

var IndexComponent = React.createClass({
  render: function(){
    return (
      <DefaultLayout name={this.props.name}>
        <div>
          <h1>I'm building using {this.props.name}</h1>
          <h1>I'm saying {this.props.word}</h1>
        </div>
      </DefaultLayout>
      )
  }
});

module.exports = IndexComponent