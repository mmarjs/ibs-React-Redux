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
import 'react-flags-select/css/react-flags-select.css';

class CoverTypes extends React.Component {
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
        
        //Get current TimeStamp
        let dt = new Date();
        let utcDate = dt.toUTCString();
        data["updatedat"] = utcDate;

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
            brokercommission: prop.brokercommission,
            description: prop.description,
            createdat: prop.createdat,
            updatedat: prop.updatedat,
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
            <ModalHeader toggle={this.toggle}>Edit Cover Types</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                    <Input defaultValue={this.state.currentClient.id} type="hidden" name="id" />
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="name">Name</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.name} type="text" name="name" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2">BrokerCommission</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.brokercommission} type="number" required name="brokercommission" placeholder="Enter Broker Commission" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="description">Description</Label>
                            <Col sm="10">
                            <Input defaultValue={this.state.currentClient.description} type="text" name="description" />
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
                            <Label sm="2" for="createddate">CreatedAt</Label>
                            <Col sm="10">
                                <label>{this.state.currentClient.createdat}</label>
                                <Input type="hidden" name="createdat" defaultValue={this.state.currentClient.createdat} />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="createddate">UpdatedAt</Label>
                            <Col sm="10">
                                <label>{this.state.currentClient.updatedat}</label>
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
                        <i className="mdi mdi-border-right mr-2"></i>Cover Types
                    </Col>
                    <Col sm="6" className="text-right">
                        <NavLink to={ "/admin/addClient/coverType" } color="success" activeClassName="active" className="btn btn-create-new">
                            Create New Cover Type
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
                            Header: "Description",
                            accessor: "description"
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
    clientsData: state.allClients.coverTypes
  }
} 

export default connect(mapStateToProps, null)(CoverTypes);
