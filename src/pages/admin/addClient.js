import React from 'react';
import { allClients } from "../../redux/client/action";
import { connect } from 'react-redux';
import {
  Card,
  CardTitle,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
  Button,
  CardBody
} from 'reactstrap';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import { Redirect } from 'react-router-dom';
import LogoImage from '../../components/client/logoImage';
import BinderImage from '../../components/client/binderImage';

class Client extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      telephone: '',
      phonenum: '',
      redirect: false,
      country: '',
      roleKey: this.props.match.params.roleKey,
      file: '',
      imagePreviewUrl: ''
    }
  }

  handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  componentDidMount () {
  }

  onCountry = (country) => {
    this.setState({
      country: country
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      switch(this.props.match.params.roleKey){
        case "cClient":
          return <Redirect to='/clients/cClients' />
        case "iClient":
          return <Redirect to='/clients/iClients' />
        case "benefit":
          return <Redirect to='/master/benefits' />
        case "riskCategory":
          return <Redirect to='/master/riskCategories' />
        case "riskClass":
          return <Redirect to='/master/riskClasses' />
        case "coverType":
          return <Redirect to='/master/coverTypes' />
        case "productType":
          return <Redirect to='/master/productTypes' />
        case "underWriter":
          return <Redirect to='/master/underWriters' />
        case "user":
          return <Redirect to='/master/users' />
        case "promotion":
          return <Redirect to='/master/promotions' />
        default: 
          return <Redirect to='/' />
      }
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const clientFormData = new FormData(event.target);
    const data = {};
    for (let key of clientFormData.keys()) {
      data[key] = clientFormData.get(key);
    }

    data["country"] = this.state.country;
    data["userType"] = this.props.match.params.roleKey;

    //Get current TimeStamp
    let dt = new Date();
    var utcDate = dt.toUTCString();
    data["createdat"] = utcDate;
    data["updatedat"] = utcDate;

    event.target.reset();

    this.props.allClients(data);
    this.setState({
      redirect: true
    })
  }

  render() {
    let dt=new Date();
    let current_date="";
    current_date=dt.getFullYear();
    if(dt.getMonth()<9){
      current_date+="-0"+(dt.getMonth()+1);
    }else{
      current_date+="-"+(dt.getMonth()+1);
    }
    if(dt.getDate()<10){
      current_date+="-0"+dt.getDate();
    }else{
      current_date+="-"+dt.getDate();
    }

    switch(this.props.match.params.roleKey){
      case "cClient": //In case of adding company client
          return <div>
          <Card>
            <CardBody>
              <Col md="12">
                <Card>
                  <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-book mr-2"></i>Create New Company Client.
                  </CardTitle>
                  <CardBody>
                    <Form onSubmit = { this.handleSubmit }>
                      <FormGroup>
                        <Row>
                          <Label sm="2">First Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="fname" defaultValue="" placeholder="Enter first name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Middle Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="mname" defaultValue="" placeholder="Enter middle name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Last Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="lname" defaultValue="" placeholder="Enter last name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="name" defaultValue="" placeholder="Enter name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Email</Label>
                          <Col sm="10">
                            <Input type="email" required name="email" defaultValue="" placeholder="Enter email address" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Display Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="dname" defaultValue="" placeholder="Enter display name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Logo</Label>
                          <Col sm="10">
                            <LogoImage />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Telephone</Label>
                          <Col sm="10">
                            <PhoneInput
                              placeholder="Enter phone number"
                              value={ this.state.telephone }
                              id="telephone"
                              required
                              name="telephone"
                              onChange={ telephone => this.setState({ telephone }) } />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Contract Person</Label>
                          <Col sm="10">
                            <Input name="cperson" required type="text" defaultValue="" placeholder="Enter contract person" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Phone number</Label>
                          <Col sm="10">
                            <PhoneInput
                              placeholder="Enter phone number"
                              value={ this.state.phonenum }
                              id="phonenum"
                              required
                              name="phonenum"
                              onChange={ phonenum => this.setState({ phonenum }) } />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Address</Label>
                          <Col sm="10">
                            <Input name="address" required type="text" defaultValue="" placeholder="Enter address" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Street Address</Label>
                          <Col sm="10">
                            <Input name="saddress" required type="text" defaultValue="" placeholder="Enter street address" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">County</Label>
                          <Col sm="10">
                            <Input name="county" required type="text" defaultValue="" placeholder="Enter county" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Country</Label>
                          <Col sm="10">
                            <ReactFlagsSelect onSelect={this.onCountry} required name="country" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">PIN Number</Label>
                          <Col sm="10">
                            <Input name="pinnum" required type="number" placeholder="Enter PIN number" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col sm="12" className="text-center">
                            <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                            {this.renderRedirect()}
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </CardBody>
          </Card>
        </div>;
      case "user": //In case of adding new user
          return <div>
          <Card>
            <CardBody>
              <Col md="12">
                <Card>
                  <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-book mr-2"></i>Create New User.
                  </CardTitle>
                  <CardBody>
                    <Form onSubmit = { this.handleSubmit }>
                      <FormGroup>
                        <Row>
                          <Label sm="2">First Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="fname" defaultValue="" placeholder="Enter first name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Middle Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="mname" defaultValue="" placeholder="Enter middle name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Last Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="lname" defaultValue="" placeholder="Enter last name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Email</Label>
                          <Col sm="10">
                            <Input type="email" required name="email" defaultValue="" placeholder="Enter email address" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Phone number</Label>
                          <Col sm="10">
                            <PhoneInput
                              placeholder="Enter phone number"
                              value={ this.state.phonenum }
                              id="phonenum"
                              required
                              name="phonenum"
                              onChange={ phonenum => this.setState({ phonenum }) } />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                          <Row>
                              <Label sm="2">RoleType</Label>
                              <Col sm="10">
                              <Input type="select" name="roletype" id="roletype">
                                  <option value="Employee">Employee</option>
                                  <option value="Agent">Agent</option>
                              </Input>
                              </Col>
                          </Row>
                      </FormGroup>
                      <FormGroup>
                          <Row>
                              <Label sm="2">Access</Label>
                              <Col sm="10">
                              <Input type="select" name="access" id="access">
                                  <option value="Accounts">Accounts</option>
                                  <option value="Sales">Sales</option>
                                  <option value="Admin">Admin</option>
                                  <option value="Manager">Manager</option>
                              </Input>
                              </Col>
                          </Row>
                      </FormGroup>
                      <FormGroup>
                          <Row>
                              <Label sm="2">Status</Label>
                              <Col sm="10">
                              <Input type="select" name="status" id="status">
                                  <option value="Active">Active</option>
                                  <option value="Suspended">Suspended</option>
                              </Input>
                              </Col>
                          </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col sm="12" className="text-center">
                            <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                            {this.renderRedirect()}
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </CardBody>
          </Card>
        </div>;
      case "iClient": //In case of adding individual client
          return <div>
          <Card>
            <CardBody>
              <Col md="12">
                <Card>
                  <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-book mr-2"></i>Create New Individual Client.
                  </CardTitle>
                  <CardBody>
                    <Form onSubmit = { this.handleSubmit }>
                      <FormGroup>
                        <Row>
                          <Label sm="2">First Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="fname" defaultValue="" placeholder="Enter first name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Middle Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="mname" defaultValue="" placeholder="Enter middle name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Last Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="lname" defaultValue="" placeholder="Enter last name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Client Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="clientname" defaultValue="" placeholder="Enter client name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Ledger Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="ledgername" defaultValue="" placeholder="Enter Ledger name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Client Print Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="cpname" defaultValue="" placeholder="Enter client print name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">ID Number</Label>
                          <Col sm="10">
                            <Input type="number" required name="idnumber" defaultValue="" placeholder="Enter ID number" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Contract Person</Label>
                          <Col sm="10">
                            <Input name="cperson" required type="text" defaultValue="" placeholder="Enter contract person" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Telephone</Label>
                          <Col sm="10">
                            <PhoneInput
                              placeholder="Enter phone number"
                              value={ this.state.telephone }
                              id="telephone"
                              required
                              name="telephone"
                              onChange={ telephone => this.setState({ telephone }) } />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Phone number</Label>
                          <Col sm="10">
                            <PhoneInput
                              placeholder="Enter phone number"
                              value={ this.state.phonenum }
                              id="phonenum"
                              required
                              name="phonenum"
                              onChange={ phonenum => this.setState({ phonenum }) } />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Email</Label>
                          <Col sm="10">
                            <Input type="email" required name="email" defaultValue="" placeholder="Enter email address" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Address</Label>
                          <Col sm="10">
                            <Input name="address" required type="text" defaultValue="" placeholder="Enter address" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Street Address</Label>
                          <Col sm="10">
                            <Input name="saddress" required type="text" defaultValue="" placeholder="Enter street address" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">County</Label>
                          <Col sm="10">
                            <Input name="county" required type="text" defaultValue="" placeholder="Enter county" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Country</Label>
                          <Col sm="10">
                            <ReactFlagsSelect onSelect={this.onCountry} required name="country" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">PIN Number</Label>
                          <Col sm="10">
                            <Input name="pinnum" required type="number" placeholder="Enter PIN number" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Notes</Label>
                          <Col sm="10">
                            <Input name="notes" required type="text" placeholder="Enter Notes" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Status</Label>
                          <Col sm="10">
                            <Input type="select" name="status" id="status">
                              <option value="Active">Active</option>
                              <option value="Suspended">Suspended</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col sm="12" className="text-center">
                            <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                            {this.renderRedirect()}
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </CardBody>
          </Card>
        </div>;
      case "benefit": //In case of adding benefit
        return <div>
          <Card>
            <CardBody>
              <Col md="12">
                <Card>
                  <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-book mr-2"></i>Create New Benefit.
                  </CardTitle>
                  <CardBody>
                    <Form onSubmit = { this.handleSubmit }>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="name" defaultValue="" placeholder="Enter name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Underwriter</Label>
                          <Col sm="10">
                            <Input type="select" name="underwriter" id="underwriter">
                              <option value="1">underwriter 1</option>
                              <option value="2">underwriter 2</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Risk Class</Label>
                          <Col sm="10">
                            <Input type="select" name="riskclass" id="riskclass">
                              <option value="1">class 1</option>
                              <option value="2">class 2</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Cover Type</Label>
                          <Col sm="10">
                            <Input type="select" name="covertype" id="covertype">
                              <option value="1">type 1</option>
                              <option value="2">type 2</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Benefit Type</Label>
                          <Col sm="10">
                            <Input type="select" name="benefittype" id="benefittype">
                              <option value="1">type 1</option>
                              <option value="2">type 2</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Benefit Rate</Label>
                          <Col sm="10">
                            <Input type="select" name="benefitrate" id="benefitrate">
                              <option value="Fixed">Fixed</option>
                              <option value="Percentage">Percentage</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Benefit Value</Label>
                          <Col sm="10">
                            <Input type="number" required name="benefitvalue" defaultValue="" placeholder="Enter Benefit Value" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Benefit Minimum Value</Label>
                          <Col sm="10">
                            <Input type="number" required name="benefitminivalue" defaultValue="" placeholder="Enter Benefit Minimum Value" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Status</Label>
                          <Col sm="10">
                            <Input type="select" name="status" id="status">
                              <option value="Active">Active</option>
                              <option value="Suspended">Suspended</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col sm="12" className="text-center">
                            <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                            {this.renderRedirect()}
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </CardBody>
          </Card>
        </div>;
      case "promotion": //In case of adding promotion
        return <div>
          <Card>
            <CardBody>
              <Col md="12">
                <Card>
                  <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-book mr-2"></i>Create New Promotion.
                  </CardTitle>
                  <CardBody>
                    <Form onSubmit = { this.handleSubmit }>
                      <FormGroup>
                          <Row>
                              <Label sm="2" for="promotionname">Promotion Name</Label>
                              <Col sm="10">
                                  <Input type="text" name="promotionname" />
                              </Col>
                          </Row>
                      </FormGroup>
                      <FormGroup>
                          <Row>
                              <Label sm="2">Risk Class</Label>
                              <Col sm="10">
                                  <Input type="select" name="riskclass" id="riskclass">
                                      <option value="1">class 1</option>
                                      <option value="2">class 2</option>
                                  </Input>
                              </Col>
                          </Row>
                      </FormGroup>
                      <FormGroup>
                          <Row>
                              <Label sm="2">Discount Percent</Label>
                              <Col sm="10">
                                  <Input type="text" name="discountpercent" />
                              </Col>
                          </Row>
                      </FormGroup>
                      <FormGroup>
                          <Row>
                              <Label sm="2">Promotion Code</Label>
                              <Col sm="10">
                                  <Input type="text" name="promotioncode" />
                              </Col>
                          </Row>
                      </FormGroup>
                      <FormGroup>
                          <Row>
                              <Label sm="2">Sales/Agent Code</Label>
                              <Col sm="10">
                                  <Input type="text" name="sacode" />
                              </Col>
                          </Row>
                      </FormGroup>
                      <FormGroup>
                          <Row>
                              <Label sm="2">Status</Label>
                              <Col sm="10">
                              <Input type="select" name="status" id="status">
                                  <option value="Active">Active</option>
                                  <option value="Suspended">Suspended</option>
                              </Input>
                              </Col>
                          </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col sm="12" className="text-center">
                            <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                            {this.renderRedirect()}
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </CardBody>
          </Card>
        </div>;
      case "riskCategory": //In case of adding riskCategory
        return <div>
          <Card>
            <CardBody>
              <Col md="12">
                <Card>
                  <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-book mr-2"></i>Create New Risk Category.
                  </CardTitle>
                  <CardBody>
                    <Form onSubmit = { this.handleSubmit }>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="name" defaultValue="" placeholder="Enter name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Description</Label>
                          <Col sm="10">
                            <Input type="text" required name="description" defaultValue="" placeholder="Enter description" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">CreatedDate</Label>
                          <Col sm="10">
                            <Input type="date" defaultValue={current_date} required name="createddate" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col sm="12" className="text-center">
                            <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                            {this.renderRedirect()}
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </CardBody>
          </Card>
        </div>;
      case "riskClass": //In case of adding Risk Class
        return <div>
          <Card>
            <CardBody>
              <Col md="12">
                <Card>
                  <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-book mr-2"></i>Create New Risk Class.
                  </CardTitle>
                  <CardBody>
                    <Form onSubmit = { this.handleSubmit }>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="name" defaultValue="" placeholder="Enter name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Description</Label>
                          <Col sm="10">
                            <Input type="text" required name="description" defaultValue="" placeholder="Enter description" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">CreatedDate</Label>
                          <Col sm="10">
                            <Input type="date" defaultValue={current_date} required name="createddate" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col sm="12" className="text-center">
                            <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                            {this.renderRedirect()}
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </CardBody>
          </Card>
        </div>;
      case "coverType": //In case of adding Cover Type
        return <div>
          <Card>
            <CardBody>
              <Col md="12">
                <Card>
                  <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-book mr-2"></i>Create New Cover Type.
                  </CardTitle>
                  <CardBody>
                    <Form onSubmit = { this.handleSubmit }>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="name" defaultValue="" placeholder="Enter name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">BrokerCommission</Label>
                          <Col sm="10">
                            <Input type="number" required name="brokercommission" defaultValue="" placeholder="Enter Broker Commission" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Description</Label>
                          <Col sm="10">
                            <Input type="text" required name="description" defaultValue="" placeholder="Enter description" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Status</Label>
                          <Col sm="10">
                            <Input type="select" name="status" id="status">
                              <option value="Active">Active</option>
                              <option value="Suspended">Suspended</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col sm="12" className="text-center">
                            <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                            {this.renderRedirect()}
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </CardBody>
          </Card>
        </div>;
      case "productType": //In case of adding Product Type
        return <div>
          <Card>
            <CardBody>
              <Col md="12">
                <Card>
                  <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-book mr-2"></i>Create New Product Type.
                  </CardTitle>
                  <CardBody>
                    <Form onSubmit = { this.handleSubmit }>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Name</Label>
                          <Col sm="10">
                            <Input type="text" required name="name" defaultValue="" placeholder="Enter name" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Description</Label>
                          <Col sm="10">
                            <Input type="text" required name="description" defaultValue="" placeholder="Enter description" />
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Label sm="2">Status</Label>
                          <Col sm="10">
                            <Input type="select" name="status" id="status">
                              <option value="Active">Active</option>
                              <option value="Suspended">Suspended</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      <FormGroup>
                        <Row>
                          <Col sm="12" className="text-center">
                            <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                            {this.renderRedirect()}
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </CardBody>
          </Card>
        </div>;
      case "underWriter": //In case of adding underwriter
        return <div>
        <Card>
          <CardBody>
            <Col md="12">
              <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                  <i className="mdi mdi-book mr-2"></i>Create New Underwriter.
                </CardTitle>
                <CardBody>
                  <Form onSubmit = { this.handleSubmit }>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Name</Label>
                        <Col sm="10">
                          <Input type="text" required name="name" defaultValue="" placeholder="Enter name" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Description</Label>
                        <Col sm="10">
                          <Input type="text" required name="description" defaultValue="" placeholder="Enter description" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Logo Name</Label>
                        <Col sm="10">
                          <Input type="text" required name="logoname" defaultValue="" placeholder="Enter logo name" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Logo</Label>
                        <Col sm="10">
                          <LogoImage />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Binder Name</Label>
                        <Col sm="10">
                          <Input type="text" required name="bindername" defaultValue="" placeholder="Enter binder name" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Binder</Label>
                        <Col sm="10">
                          <BinderImage />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Website</Label>
                        <Col sm="10">
                          <Input type="text" required name="website" defaultValue="" placeholder="Enter website" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Contact Person</Label>
                        <Col sm="10">
                          <Input type="text" required name="cperson" defaultValue="" placeholder="Enter contact person" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Telephone</Label>
                        <Col sm="10">
                          <PhoneInput
                            placeholder="Enter telephone number"
                            value={ this.state.telephone }
                            id="telephone"
                            required
                            name="telephone"
                            onChange={ telephone => this.setState({ telephone }) } />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Phone number</Label>
                        <Col sm="10">
                          <PhoneInput
                            placeholder="Enter phone number"
                            value={ this.state.phonenum }
                            id="phonenum"
                            required
                            name="phonenum"
                            onChange={ phonenum => this.setState({ phonenum }) } />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Email</Label>
                        <Col sm="10">
                          <Input type="email" required name="email" defaultValue="" placeholder="Enter email address" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Address</Label>
                        <Col sm="10">
                          <Input name="address" required type="text" defaultValue="" placeholder="Enter address" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Street Address</Label>
                        <Col sm="10">
                          <Input name="saddress" required type="text" defaultValue="" placeholder="Enter street address" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">County</Label>
                        <Col sm="10">
                          <Input name="county" required type="text" defaultValue="" placeholder="Enter county" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Country</Label>
                        <Col sm="10">
                          <ReactFlagsSelect onSelect={this.onCountry} required name="country" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">PIN Number</Label>
                        <Col sm="10">
                          <Input name="pinnum" required type="number" placeholder="Enter PIN number" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Status</Label>
                        <Col sm="10">
                          <Input type="select" name="status" id="status">
                            <option value="Active">Active</option>
                            <option value="Suspended">Suspended</option>
                          </Input>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Col sm="12" className="text-center">
                          <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                          {this.renderRedirect()}
                        </Col>
                      </Row>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </CardBody>
        </Card>
      </div>;
      default:
      return "";
    }
  }
}

const mapStateToProps = (state) => {
  return {
    
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    allClients: (clientFormData) => dispatch(allClients(clientFormData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);
