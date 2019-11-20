import React from 'react';
import ReactTable from "react-table";
import {
  Card,
  CardTitle,
  Button,
  Row,
  Col,
  CardBody, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import "react-table/react-table.css";
import { NavLink } from 'react-router-dom';

import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import LogoImage from '../../components/client/logoImage';
import BinderImage from '../../components/client/binderImage';

class UnderWriters extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            clientsData: [],
            openEdit: false,
            currentClient: {},
            telephone: '',
            phonenum: '',
            country: ''
        };
    }
    componentDidMount(){

    }
    
    onCountry = (country) => {
        this.setState({
            country: country
        })
    }

    toggle = () => {
        this.setState({
            openEdit: !this.state.openEdit
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        let id = event.target.id.value;
        const modalData = new FormData(event.target);

        const data = {};
        for (let key of modalData.keys()) {
            data[key] = modalData.get(key);
        }
        data["country"] = this.state.country;

        this.props.clientsData[id]=data;
        this.setState({
			openEdit: !this.state.openEdit
		})
    }
    
  render() {
    const { clientsData } = this.props;
    const tableData = clientsData.map((prop, key) => {
        return {
            id: key,
            utype: prop.utype,
            name: prop.name,
            description: prop.description,
            logoname: prop.logoname,
            logo: prop.logo,
            bindername: prop.bindername,
            binder: prop.binder,
            website: prop.website,
            cperson: prop.cperson,
            telephone: prop.telephone,
            phonenum: prop.phonenum,
            email: prop.email,
            address: prop.address,
            saddress: prop.saddress,
            county: prop.county,
            country: prop.country,
            pinnum: prop.pinnum,
            status: prop.status,

            actions: (
                // Action buttons
                <div className="text-center">
                    {/* Perform edit function */}
                    <Button
                        onClick={() => {
                            let currentClient = tableData.find(o => o.id === key);
                            this.setState({
                                openEdit: !this.state.openEdit,
                                currentClient: currentClient
                            });
                        }}
                        color="inverse"
                        size="sm"
                        round="true"
                        icon="true"
                    >
                        <i className="fa fa-edit" />
                    </Button>
                    {/* perform delete row function */}
                    <Button
                        onClick={() => {
                            let newdata = tableData;
                            newdata.find((o, i) => {
                                if (o.id === key) {
                                    this.props.clientsData.splice(i, 1);
                                    return true;
                                }
                                return false;
                            });
                            this.setState({ jsonData: newdata });
                        }}
                        className="ml-1"
                        color="danger"
                        size="sm"
                        round="true"
                        icon="true"
                    >
                        <i className="fa fa-times" />
                    </Button>
                </div>
            )
        };
    });
    return <div>
        <Modal isOpen={this.state.openEdit} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Edit Client</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                    <Input defaultValue={this.state.currentClient.id} type="hidden" name="id" id="id" />
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="name">Name</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.name} type="text" name="name" id="name" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Description</Label>
                        <Col sm="10">
                          <Input defaultValue={this.state.currentClient.description} type="text" required name="description" placeholder="Enter description" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Logo Name</Label>
                        <Col sm="10">
                          <Input defaultValue={this.state.currentClient.logoname} type="text" required name="logoname" placeholder="Enter logo name" />
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
                          <Input defaultValue={this.state.currentClient.bindername} type="text" required name="bindername" placeholder="Enter binder name" />
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
                          <Input defaultValue={this.state.currentClient.website} type="text" required name="website" placeholder="Enter website" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Contact Person</Label>
                        <Col sm="10">
                          <Input defaultValue={this.state.currentClient.cperson} type="text" required name="cperson" placeholder="Enter contact person" />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Telephone</Label>
                        <Col sm="10">
                          <PhoneInput
                            placeholder="Enter telephone number"
                            value={this.state.currentClient.telephone}
                            id="telephone"
                            required
                            name="telephone"
                            onChange={ value => this.setState({ value }) }  />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <Row>
                        <Label sm="2">Phone number</Label>
                        <Col sm="10">
                          <PhoneInput
                            placeholder="Enter phone number"
                            value={this.state.currentClient.phonenum}
                            id="phonenum"
                            required
                            name="phonenum"
                            onChange={ value => this.setState({ value }) } />
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="email">Email</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.email} type="text" name="email" id="email" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="address">Address</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.address} type="text" name="address" id="address" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="saddress">StreetAddress</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.saddress} type="text" name="saddress" id="saddress" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="county">County</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.county} type="text" name="county" id="county" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2">Country</Label>
                            <Col sm="10">
                                <ReactFlagsSelect
                                onSelect={this.onCountry}
                                defaultCountry={this.state.currentClient.country}
                                name="country" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="pinnum">PINNumber</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.pinnum} type="text" name="pinnum" id="pinnum" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="status">Status</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.status} type="text" name="status" id="status" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Col sm="12" className="text-center">
                                <Button color="primary" type="submit">Save</Button>
                                <Button color="secondary" className="ml-1" onClick={this.toggle}>Cancel</Button>
                            </Col>
                        </Row>
                    </FormGroup>
                </Form>
            </ModalBody>
        </Modal>
        <Card>
            <CardTitle className="mb-0 p-3 border-bottom bg-light">
                <Row>
                    <Col sm="6">
                        <i className="mdi mdi-border-right mr-2"></i>Underwriters
                    </Col>
                    <Col sm="6" className="text-right">
                        <NavLink to={ "/admin/addClient/underWriter" } color="success" activeClassName="active" className="btn btn-create-new">
                            Create New Underwriters
                        </NavLink>
                    </Col>
                </Row>
            </CardTitle>
            <CardBody>
                <ReactTable
                    columns={[
                        {
                            Header: "Name",
                            accessor: "name"
                        },
                        {
                            Header: "Contact Person",
                            accessor: "cperson"
                        },
                        {
                            Header: "Telephone",
                            accessor: "telephone"
                        },
                        {
                            Header: "Status",
                            accessor: "status"
                        },
                        {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false
                        }
                    ]}
                    defaultPageSize={10}
                    showPaginationBottom={true}
                    className="-striped -highlight"
                    data={tableData}
                    filterable
                />
            </CardBody>
        </Card>
    </div>;
  }
}
const mapStateToProps = (state) => {
  return {
    clientsData:  state.allClients.underWriters
  }
} 


export default connect(mapStateToProps, null)(UnderWriters);
