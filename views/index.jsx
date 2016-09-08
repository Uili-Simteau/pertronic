const DefaultLayout = require('./layouts/master')
const React = require('react');
var {  FormGroup, FormControl, InputGroup, Radio, Tab, Tabs  } = require('react-bootstrap')
// const tabsInstance = require('./layouts/tabs')


const IndexComponent = React.createClass({

  getInitialState(){
    return {
      key: 1
    };
  },

  handleSelect(key) {
    this.setState({key});
    console.log('This is the key', key)
  },

  render: function(){
    return (
      <DefaultLayout name={this.props.name}>
        <div>
          <h1>{this.props.name}</h1>
          <h2>{this.props.word}</h2>
          <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
            <Tab eventKey={1} title="Country">
              <h2>Country standard</h2>
              <form>
                  <Radio >
                    New Zealand NZS4512:1997                    
                  </Radio>
                  <Radio >
                    New Zealand NZS4512: 2003/2010
                  </Radio>
                  <Radio >
                    Australia AS4428.1
                  </Radio>
                  <Radio >
                    Australia AS7240.2
                  </Radio>
              </form>
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