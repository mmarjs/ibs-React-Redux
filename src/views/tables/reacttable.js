import React from 'react';
import ReactTable from "react-table";
import treeTableHOC from "react-table/lib/hoc/treeTable";
import {
	Card,
	CardBody,
	CardTitle,
	Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap';
import "react-table/react-table.css";
import * as data from "./reactable-data";

const TreeTable = treeTableHOC(ReactTable);

class Reacttable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false,
			obj: {},
			jsonData: data.dataTable,
			data: data.makeData(),
			treedata: data.treedata
		};
		this.toggle = this.toggle.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		let id = event.target.id.value;
		let name = event.target.name.value;
		let designation = event.target.designation.value;
		let location = event.target.location.value;
		let age = event.target.age.value;
		let newObj = JSON.parse(JSON.stringify(this.state.jsonData));
		newObj[id] = [name, designation, location, age];
		this.setState({
			jsonData: newObj,
			modal: !this.state.modal
		})
	}

	render() {
		const { data } = this.state;
		const data2 = this.state.jsonData.map((prop, key) => {
			return {
				id: key,
				name: prop[0],
				designation: prop[1],
				location: prop[2],
				age: prop[3],
				actions: (
					// we've added some custom button actions
					<div className="text-center">
						{/* use this button to add a edit kind of action */}
						<Button
							onClick={() => {
								let obj = data2.find(o => o.id === key);
								this.setState({
									modal: !this.state.modal,
									obj: obj
								});
							}}
							color="inverse"
							size="sm"
							round="true"
							icon="true"
						>
							<i className="fa fa-edit" />
						</Button>
						{/* use this button to remove the data row */}
						{/* <Button
							onClick={() => {
								let newdata = data2;
								newdata.find((o, i) => {
									if (o.id === key) {
										newdata.splice(i, 1);
										console.log(newdata);
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
						</Button> */}
					</div>
				)
			};
		});
		return <div>
			<Modal isOpen={this.state.modal} toggle={this.toggle}>
				<ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
				<ModalBody>
					<Form onSubmit={this.handleSubmit}>
						<Input type="hidden" name="id" id="id" defaultValue={this.state.obj.id} />
						<FormGroup>
							<Label for="name">Name</Label>
							<Input type="text" name="name" id="name" defaultValue={this.state.obj.name} />
						</FormGroup>
						<FormGroup>
							<Label for="designation">Designation</Label>
							<Input type="text" name="designation" id="designation" defaultValue={this.state.obj.designation} />
						</FormGroup>
						<FormGroup>
							<Label for="location">Location</Label>
							<Input type="text" name="location" id="location" defaultValue={this.state.obj.location} />
						</FormGroup>
						<FormGroup>
							<Label for="age">Age</Label>
							<Input type="text" name="age" id="age" defaultValue={this.state.obj.age} />
						</FormGroup>
						<FormGroup>
							<Button color="primary" type="submit">Save</Button>
							<Button color="secondary" className="ml-1" onClick={this.toggle}>Cancel</Button>
						</FormGroup>
					</Form>
				</ModalBody>
			</Modal>
			{/*--------------------------------------------------------------------------------*/}
			{/* Start Inner Div*/}
			{/*--------------------------------------------------------------------------------*/}
			<Card>
				<CardTitle className="bg-light border-bottom p-3 mb-0">
					<i className="mdi mdi-border-right mr-2"></i>Basic Table
				</CardTitle>
				<CardBody>
					<ReactTable
						data={data}
						columns={[
							{
								Header: "Name",
								columns: [
									{
										Header: "First Name",
										accessor: "firstName"
									},
									{
										Header: "Last Name",
										id: "lastName",
										accessor: d => d.lastName
									}
								]
							},
							{
								Header: "Info",
								columns: [
									{
										Header: "Age",
										accessor: "age"
									},
									{
										Header: "Status",
										accessor: "status"
									}
								]
							},
							{
								Header: 'Stats',
								columns: [
									{
										Header: "Visits",
										accessor: "visits"
									}
								]
							}
						]}
						defaultPageSize={10}
						className="-striped -highlight"
					/>
				</CardBody>
			</Card>
			{/*--------------------------------------------------------------------------------*/}
			{/*End Inner Div*/}
			{/*--------------------------------------------------------------------------------*/}
			{/*--------------------------------------------------------------------------------*/}
			{/* Start Action table*/}
			{/*--------------------------------------------------------------------------------*/}
			<Card>
				<CardTitle className="mb-0 p-3 border-bottom bg-light"><i className="mdi mdi-border-right mr-2"></i>Action Table</CardTitle>
				<CardBody>
					<ReactTable
						columns={[
							{
								Header: "FirstName",
								accessor: "name"
							},
							{
								Header: "Designation",
								accessor: "designation"
							},
							{
								Header: "Location",
								accessor: "location"
							},
							{
								Header: "Age",
								accessor: "age"
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
						data={data2}
						filterable
					/>
				</CardBody>
			</Card>
			{/*--------------------------------------------------------------------------------*/}
			{/* End Action table*/}
			{/*--------------------------------------------------------------------------------*/}
			{/*--------------------------------------------------------------------------------*/}
			{/* Tree table*/}
			{/*--------------------------------------------------------------------------------*/}
			<Card>
				<CardBody className="border-bottom">
					<CardTitle className="mb-0"><i className="mdi mdi-border-right mr-2"></i>Tree Table</CardTitle>
				</CardBody>
				<CardBody>
					<TreeTable
						filterable
						defaultFilterMethod={(filter, row, column) => {
							const id = filter.pivotId || filter.id;
							return row[id] !== undefined
								? String(row[id])
									.toLowerCase()
									.includes(filter.value.toLowerCase())
								: true;
						}}
						data={this.state.treedata}
						pivotBy={["state", "post", "city"]}
						columns={[
							// we only require the accessor so TreeTable
							// can handle the pivot automatically
							{
								accessor: "state"
							},
							{
								accessor: "post"
							},
							{
								accessor: "city"
							},

							// any other columns we want to display
							{
								Header: "First Name",
								accessor: "first_name"
							},
							{
								Header: "Last Name",
								accessor: "last_name"
							},
							{
								Header: "Company Name",
								accessor: "company_name"
							},
							{
								Header: "Address",
								accessor: "address"
							},
							{
								Header: "Phone 1",
								accessor: "phone1"
							},
							{
								Header: "Email",
								accessor: "email"
							}
						]}
						defaultPageSize={5}
						SubComponent={row => {
							// a SubComponent just for the final detail
							const columns = [
								{
									Header: "Property",
									accessor: "property",
									width: 200,
									Cell: ci => {
										return `${ci.value}:`;
									},
									style: {
										backgroundColor: "#DDD",
										textAlign: "right",
										fontWeight: "bold"
									}
								},
								{ Header: "Value", accessor: "value" }
							];
							const rowData = Object.keys(row.original).map(key => {
								return {
									property: key,
									value: row.original[key].toString()
								};
							});
							return (
								<div style={{ padding: "10px" }}>
									<ReactTable
										data={rowData}
										columns={columns}
										pageSize={rowData.length}
										showPagination={false}
									/>
								</div>
							);
						}}
					/>
				</CardBody>
			</Card>
			{/*--------------------------------------------------------------------------------*/}
			{/* End Tree table*/}
			{/*--------------------------------------------------------------------------------*/}
			{/*--------------------------------------------------------------------------------*/}
			{/* Fixed header-footer table*/}
			{/*--------------------------------------------------------------------------------*/}
			<Card>
				<CardTitle className="mb-0 p-3 border-bottom"><i className="mdi mdi-border-right mr-2"></i>Fixed Table</CardTitle>
				<CardBody>
					<ReactTable
						data={data}
						columns={[
							{
								Header: "Name",
								columns: [
									{
										Header: "First Name",
										accessor: "firstName"
									},
									{
										Header: "Last Name",
										id: "lastName",
										accessor: d => d.lastName
									}
								]
							},
							{
								Header: "Info",
								columns: [
									{
										Header: "Age",
										accessor: "age"
									}
								]
							}
						]}
						defaultPageSize={20}
						style={{
							height: "400px" // This will force the table body to overflow and scroll, since there is not enough room
						}}
						className="-striped -highlight"
					/>
				</CardBody>
			</Card>
			{/*--------------------------------------------------------------------------------*/}
			{/* End fixed header-footer table*/}
			{/*--------------------------------------------------------------------------------*/}
		</div>
	}
}

export default Reacttable;
