import React from 'react';
import { newClient } from "../../actions/Actions";
import { connect } from 'react-redux';
import {
  Card,
  CardTitle,
  Row,
  Col,
  FormGroup,
  Label,
  CustomInput,
  Button,
  Input,
  CardBody
} from 'reactstrap';

class Client extends React.Component {

    constructor(props){
      super(props);
      this.state = {

    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const clientFormData = new FormData(event.target);

    const data = {};
    for (let key of clientFormData.keys()) {
      data[key] = clientFormData.get(key);
    }
    // const inputData = JSON.stringify(data, null, 2);

    this.props.newClient(data);
  }

  componentDidMount(){
    
  }

  render() {
    return <div>
      <Card>
        <CardBody>
          <Col md="12">
            <Card>
              <CardTitle className="bg-light border-bottom p-3 mb-0">
                <i className="mdi mdi-book mr-2"></i>Create a new client.
              </CardTitle>
              <CardBody>
                <form onSubmit = { this.handleSubmit }>
                  <FormGroup>
                    <Row>
                      <Label sm="2">User Type</Label>
                      <Col sm="10">
                        <Input type="select" name="utype">
                          <option>Indivisual Client</option>
                        </Input>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">First Name</Label>
                      <Col sm="10">
                        <Input type="text" name="fname" defaultValue="" placeholder="Enter first name" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Middle Name</Label>
                      <Col sm="10">
                        <Input type="text" name="mname" defaultValue="" placeholder="Enter middle name" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Last Name</Label>
                      <Col sm="10">
                        <Input type="text" name="lname" defaultValue="" placeholder="Enter last name" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Name</Label>
                      <Col sm="10">
                        <Input type="text" name="name" defaultValue="" placeholder="Enter name" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Email</Label>
                      <Col sm="10">
                        <Input type="email" name="email" defaultValue="" placeholder="Enter email address" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Display Name</Label>
                      <Col sm="10">
                        <Input type="text" name="dname" defaultValue="" placeholder="Enter display name" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Logo</Label>
                      <Col sm="10">
                        <Input type="file" name="logo" id="logo" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Telephone</Label>
                      <Col sm="10">
                        <Input name="telephone" type="tel" placeholder="Enter telephone" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Contract Person</Label>
                      <Col sm="10">
                        <Input name="cperson" type="text" defaultValue="" placeholder="Enter contract person" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Mobile</Label>
                      <Col sm="10">
                        <Input name="mobile" type="tel" placeholder="Enter mobile" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Address</Label>
                      <Col sm="10">
                        <Input name="address" type="text" defaultValue="" placeholder="Enter address" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Street Address</Label>
                      <Col sm="10">
                        <Input name="saddress" type="text" defaultValue="" placeholder="Enter street address" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">County</Label>
                      <Col sm="10">
                        <Input name="county" type="text" defaultValue="" placeholder="Enter county" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">Country</Label>
                      <Col sm="10">
                        <Input name="country" type="text" defaultValue="" placeholder="Enter country" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Label sm="2">PIN Number</Label>
                      <Col sm="10">
                        <Input name="pinnum" type="number" placeholder="Enter PIN number" />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="12" className="text-center">
                        <Button type="submit" className="btn btn-success"> <i className="fa fa-check"></i> Save</Button>
                        <Button type="button" className="btn btn-dark ml-2">Cancel</Button>
                      </Col>
                    </Row>
                  </FormGroup>
                </form>
              </CardBody>
            </Card>
          </Col>
        </CardBody>
      </Card>
    </div>;
  }
}


const mapStateToProps = (state) => {
  return {
    
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    newClient: (clientFormData) => dispatch(newClient(clientFormData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Client);
