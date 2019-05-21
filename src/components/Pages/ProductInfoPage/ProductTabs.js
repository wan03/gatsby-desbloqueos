import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import './ProductInfoPage';

export default class ProductTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="tabsBox">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Instructions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Information
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <p className="tabContent">THIS IS HOW TO UNLOCK YOUR APPLE IPHONE 8 FROM ANY GSM NETWORKS SUCH AS AT&T, T-MOBILE, VODAFONE,SPRINT,VERIZON AND MANY MORE.  Your Apple device is simple to unlock! Simply connect your Apple iPhone to your computer and turn on iTunes after we have processed your order. Follow the instructions on iTunes and this will unlock your cell phone to be used with any GSM network such as Rogers, Bell, Vodafone, and others!

Once you place your order for your Apple iPhone Network Unlock, we will have your IMEI Number processed and email you as soon as it is completed. Once unlocked, your Apple iPhone 8 will be factory unlocked for another GSM Network.</p>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <p className="tabContent">Other content for Tab 2</p>

              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
