import React, { Fragment } from "react";
import { Table, Button, Input } from "reactstrap";
import PropTypes from "prop-types";

const ContactsDetails = ({ selectedContacts, onEditClick, editContactFlag, onChange }) => (
	<Fragment>
		{selectedContacts ? (
			<div className="">
				<div className="d-flex align-items-center p-4 border-bottom">
					<div className="mr-3">
						<img src={selectedContacts.image} alt="user" className="rounded-circle" width="50" />
					</div>
					<div>
						<h5 className="message-title mb-0">{selectedContacts.firstname} {selectedContacts.lastname}</h5>
						<p className="mb-0">{selectedContacts.department}</p>
						{editContactFlag ?
							<Button className="btn btn-success mt-2" size="sm" onClick={onEditClick}>Save</Button>
							:
							<Button className="btn btn-info mt-2" size="sm" onClick={onEditClick}>Edit</Button>
						}
					</div>
				</div>
				<div className="details-table px-4">
					<Table responsive borderless size="sm" className="mt-4">
						<tbody>
							<tr className="d-flex">
								<td className="col-3 font-bold">First Name</td>
								<td className="col-9">
									{editContactFlag ? (
										<Input
											type="text"
											name="firstName"
											id="firstName"
											defaultValue={selectedContacts.firstname}
											onChange={e => onChange(selectedContacts.id, "firstname", e.target.value)}
										/>
									) : (
											": " + selectedContacts.firstname
										)}
								</td>
							</tr>
							<tr className="d-flex">
								<td className="col-3 font-bold">Last Name</td>
								<td className="col-9">
									{editContactFlag ? (
										<Input
											type="text"
											name="lastName"
											id="lastName"
											defaultValue={selectedContacts.lastname}
											onChange={e => onChange(selectedContacts.id, "lastname", e.target.value)}
										/>
									) : (
											": " + selectedContacts.lastname
										)}
								</td>
							</tr>
							<tr className="d-flex">
								<td className="col-3 font-bold">Company</td>
								<td className="col-9">
									{editContactFlag ? (
										<Input
											type="text"
											name="company"
											id="company"
											defaultValue={selectedContacts.company}
											onChange={e => onChange(selectedContacts.id, "company", e.target.value)}
										/>
									) : (
											": " + selectedContacts.company
										)}
								</td>
							</tr>
							<tr className="d-flex">
								<td className="col-3 font-bold">Department</td>
								<td className="col-9">
									{editContactFlag ? (
										<Input
											type="text"
											name="department"
											id="department"
											defaultValue={selectedContacts.department}
											onChange={e => onChange(selectedContacts.id, "department", e.target.value)}
										/>
									) : (
											": " + selectedContacts.department
										)}
								</td>
							</tr>
							<tr className="d-flex">
								<td className="col-3 font-bold">Email</td>
								<td className="col-9">
									{editContactFlag ? (
										<Input
											type="text"
											name="email"
											id="email"
											defaultValue={selectedContacts.email}
											onChange={e => onChange(selectedContacts.id, "email", e.target.value)}
										/>
									) : (
											": " + selectedContacts.email
										)}
								</td>
							</tr>
							<tr className="d-flex">
								<td className="col-3 font-bold">Phone</td>
								<td className="col-9">
									{editContactFlag ? (
										<Input
											type="text"
											name="phone"
											id="phone"
											defaultValue={selectedContacts.phone}
											onChange={e => onChange(selectedContacts.id, "phone", e.target.value)}
										/>
									) : (
											": " + selectedContacts.phone
										)}
								</td>
							</tr>
							<tr className="d-flex">
								<td className="col-3 font-bold">Address</td>
								<td className="col-9">
									{editContactFlag ? (
										<Input
											type="text"
											name="address"
											id="address"
											defaultValue={selectedContacts.address}
											onChange={e => onChange(selectedContacts.id, "address", e.target.value)}
										/>
									) : (
											": " + selectedContacts.address
										)}
								</td>
							</tr>
							<tr className="d-flex">
								<td className="col-3 font-bold">Note</td>
								<td className="col-9">
									{editContactFlag ? (
										<Input
											type="text"
											name="notes"
											id="notes"
											defaultValue={selectedContacts.notes}
											onChange={e => onChange(selectedContacts.id, "notes", e.target.value)}
										/>
									) : (
											": " + selectedContacts.notes
										)}
								</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		) : (
				<div className="d-flex h-100 p-4 flex-column align-items-center justify-content-center">
					<i className="far fa-address-card display-5"></i>
					<h4 className="mt-2">Please select a contact to show details.</h4>
				</div>
			)}
	</Fragment>
);

ContactsDetails.prototype = {
	selectedContacts: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			firstname: PropTypes.string.isRequired,
			lastname: PropTypes.string,
			image: PropTypes.string,
			department: PropTypes.string,
			company: PropTypes.string,
			phone: PropTypes.number.isRequired,
			email: PropTypes.string.isRequired,
			address: PropTypes.string,
			notes: PropTypes.string,
			frequentlycontacted: PropTypes.bool.isRequired,
			starred: PropTypes.bool.isRequired,
			deleted: PropTypes.bool.isRequired
		}).isRequired
	).isRequired
};
export default ContactsDetails;
