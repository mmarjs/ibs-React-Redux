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

class Users extends React.Component {
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
        
        //Get current client id.
        let id = event.target.id.value;
        //Get current client data.
        const modalData = new FormData(event.target);

        const data = {};
        for (let key of modalData.keys()) {
            data[key] = modalData.get(key);
        }
        data["country"] = this.state.country;
        this.props.clientsData[id]=data;

        //Close modal
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
            fname: prop.fname,
            mname: prop.mname,
            lname: prop.lname,
            email: prop.email,
            phonenum: prop.phonenum,
            roletype: prop.roletype,
            access: prop.access,
            status: prop.status,

            actions: (
                // Action buttons
                <div className="text-center">
                    {/* Perform edit function */}
                    <Button
                        onClick={() => {
                            let currentClient = tableData.find(o => o.id === key);
                            console.log(currentClient);

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
            <ModalHeader toggle={this.toggle}>Edit User</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                    <Input defaultValue={this.state.currentClient.id} type="hidden" name="id" id="id" />
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="fname">FirstName</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.fname} type="text" name="fname" id="fname" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="mname">MiddleName</Label>
                            <Col sm="10">
                            <Input defaultValue={this.state.currentClient.mname} type="text" name="mname" id="mname" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="lname">LastName</Label>
                            <Col sm="10">
                            <Input defaultValue={this.state.currentClient.lname} type="text" name="lname" id="lname" />
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
                            <Label sm="2" for="phonenum">PhoneNumber</Label>
                            <Col sm="10">
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={ this.state.currentClient.phonenum }
                                    name="phonenum"
                                    onChange={ value => this.setState({ value }) } />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2">RoleType</Label>
                            <Col sm="10">
                            <Input defaultValue={this.state.currentClient.roletype} type="select" name="roletype" id="roletype">
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
                            <Input defaultValue={this.state.currentClient.access} type="select" name="access" id="access">
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
                                <Input defaultValue={this.state.currentClient.status} type="select" name="status" id="status">
                                    <option value="Active">Active</option>
                                    <option value="Suspended">Suspended</option>
                                </Input>
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
                        <i className="mdi mdi-border-right mr-2"></i>Users
                    </Col>
                    <Col sm="6" className="text-right">
                        <NavLink to={ "/admin/addClient/user" } color="success" activeClassName="active" className="btn btn-create-new">
                            Create New User
                        </NavLink>
                    </Col>
                </Row>
            </CardTitle>
            <CardBody>
                <ReactTable
                    columns={[
                        {
                            Header: "FirstName",
                            accessor: "fname"
                        },
                        {
                            Header: "MiddleName",
                            accessor: "mname"
                        },
                        {
                            Header: "LastName",
                            accessor: "lname"
                        },
                        {
                            Header: "Email",
                            accessor: "email"
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
    clientsData: state.allClients.users
  }
}

export default connect(mapStateToProps, null)(Users);
