import React from 'react';
import {
  Card,
  CardBody,
  Row,
  Col,
  Tooltip
} from 'reactstrap';

import img1 from '../../../assets/images/users/1.jpg';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle01 = this.toggle01.bind(this);
    this.toggle02 = this.toggle02.bind(this);
    this.toggle03 = this.toggle03.bind(this);
    this.state = {
      tooltipOpen01: false,
      tooltipOpen02: false,
      tooltipOpen03: false
    };
  }

  toggle01() {
    this.setState({
      tooltipOpen01: !this.state.tooltipOpen01
    });
  }

  toggle02() {
    this.setState({
      tooltipOpen02: !this.state.tooltipOpen02
    });
  }

  toggle03() {
    this.setState({
      tooltipOpen03: !this.state.tooltipOpen03
    });
  }
  render() {
    return (
      <Card>
        <CardBody>
          <div className="d-flex flex-row">
            <div className=""><img src={img1} alt="user" className="rounded-circle" width="100" /></div>
            <div className="pl-3">
              <h3 className="font-medium">Daniel Kristeen</h3>
              <h6>UIUX Designer</h6>
              <button className="btn btn-success"><i className="ti-plus"></i> Follow</button>
            </div>
          </div>
          <Row className="mt-5">
            <Col className="border-right text-center">
              <h2 className="font-light">14</h2>
              <h6>Photos</h6>
            </Col>
            <Col className="border-right text-center">
              <h2 className="font-light">54</h2>
              <h6>Videos</h6>
            </Col>
            <Col className="border-right text-center">
              <h2 className="font-light">145</h2>
              <h6>Tasks</h6>
            </Col>
          </Row>
        </CardBody>
        <div>
          <hr />
        </div>
        <CardBody>
          <p className="text-center aboutscroll">
            Lorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididunt adipisicing elit, sed do eiusmod tempor incididunLorem ipsum dolor sit ametetur adipisicing elit, sed do eiusmod tempor incididuntt
                  </p>
          <Row className="text-center pt-2">
            <Col>
              <a href="/" className="text-muted" id="tooltip1"><i className="fa fa-globe font-20"></i></a>
              <Tooltip placement="top" isOpen={this.state.tooltipOpen01} target="tooltip1" toggle={this.toggle01}>
                Website
                      </Tooltip>
            </Col>
            <Col>
              <a href="/" className="text-muted" id="tooltip2"><i className="fab fa-twitter font-20"></i></a>
              <Tooltip placement="top" isOpen={this.state.tooltipOpen02} target="tooltip2" toggle={this.toggle02}>
                twitter
                      </Tooltip>
            </Col>
            <Col>
              <a href="/" className="text-muted" id="tooltip3"><i className="fab fa-facebook-square font-20"></i></a>
              <Tooltip placement="top" isOpen={this.state.tooltipOpen03} target="tooltip3" toggle={this.toggle03}>
                Facebook
                      </Tooltip>
            </Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default UserProfile;
