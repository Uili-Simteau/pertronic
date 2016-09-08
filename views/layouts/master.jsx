var React = require('react')

var MasterLayout = React.createClass({
  render: function(){
    return (
      <html lang="eg">
        <head>
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <title>{this.props.name}</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>

            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css"/>
        </head>
        <body>
            {this.props.children}
        </body>
      </html>
      )
  }});

module.exports = MasterLayout;