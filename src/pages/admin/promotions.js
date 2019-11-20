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

class Promotions extends React.Component {
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
        var utcDate = dt.toUTCString();
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
            promotionname: prop.promotionname,
            riskclass: prop.riskclass,
            discountpercent: prop.discountpercent,
            promotioncode: prop.promotioncode,
            sacode: prop.sacode,
            status: prop.status,
            createdat: prop.createdat,
            updatedat: prop.updatedat,

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
            <ModalHeader toggle={this.toggle}>Edit Promotion</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                    <Input defaultValue={this.state.currentClient.id} type="hidden" name="id" />
                    <FormGroup>
                        <Row>
                            <Label sm="2" for="promotionname">Promotion Name</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.promotionname} type="text" name="promotionname" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2">Risk Class</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.riskclass} type="select" name="riskclass" id="riskclass">
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
                                <Input defaultValue={this.state.currentClient.discountpercent} type="text" name="discountpercent" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2">Promotion Code</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.promotioncode} type="text" name="promotioncode" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2">Sales/Agent Code</Label>
                            <Col sm="10">
                                <Input defaultValue={this.state.currentClient.sacode} type="text" name="sacode" />
                            </Col>
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Label sm="2">Status</Label>
                            <Col sm="10">
                            <Input defaultValue={this.state.currentClient.status} type="select" name="status" id="status">
                                <option>Active</option>
                                <option>Suspended</option>
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
                        <i className="mdi mdi-border-right mr-2"></i>Promotions
                    </Col>
                    <Col sm="6" className="text-right">
                        <NavLink to={ "/admin/addClient/promotion" } color="success" activeClassName="active" className="btn btn-create-new">
                            Create New promotion
                        </NavLink>
                    </Col>
                </Row>
            </CardTitle>
            <CardBody>
                <ReactTable
                    columns={[
                        {
                            Header: "Promotion Name",
                            accessor: "promotionname"
                        },
                        {
                            Header: "RiskClass",
                            accessor: "riskclass"
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
    clientsData: state.allClients.promotions
  }
} 

export default connect(mapStateToProps, null)(Promotions);
