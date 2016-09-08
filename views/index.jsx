const DefaultLayout = require('./layouts/master')
const React = require('react');
var { Tab, Tabs } = require('react-bootstrap')
// const tabsInstance = require('./layouts/tabs')

const tabsInstance = React.createClass({
  render: function(){
    return (
      <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      </Tabs>
    )
  }
});

const IndexComponent = React.createClass({
  render: function(){
    return (
      <DefaultLayout name={this.props.name}>
        <div>
          <h1>{this.props.name}</h1>
          <h2>{this.props.word}</h2>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Country">
              <h2>Country standard</h2>
            </Tab>
            <Tab eventKey={2} title="System">
              <h2>System</h2>
            </Tab>
            <Tab eventKey={3} title="Panel">
              <h2>Type of Panel</h2>
            </Tab>
            <Tab eventKey={4} title="Detail">
              <h2>Panel Detail Type</h2>
            </Tab>
            <Tab eventKey={5} title="Power Supply">
              <h2>Additional Power Supply</h2>
            </Tab>
            <Tab eventKey={6} title="Amp">
              <h2>Amp</h2>
            </Tab>
            <Tab eventKey={7} title="LED">
              <h2>LED</h2>
            </Tab>
            <Tab eventKey={8} title="Inter">
              <h2>Inter</h2>
            </Tab>
            <Tab eventKey={9} title="Misc">
              <h2>Misc</h2>
            </Tab>
            <Tab eventKey={6} title="Summary">
              <h2>Summary</h2>
            </Tab>            
          </Tabs>
        </div>
      </DefaultLayout>
    )
  }
});

module.exports = IndexComponent