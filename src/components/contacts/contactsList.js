import React from "react";
import PropTypes from "prop-types";
import { Table } from 'reactstrap';
import Contact from "./contact";

const ContactsList = ({ active, contacts, toggleStarredContact, deleteContact, contactDetails, showRightPart }) => (
	<div className="table-responsive contact-list">
		<Table className="table contact-table no-wrap table-hover v-middle mb-0">
			<tbody>
				{contacts.map(contact => (
					<Contact
						key={contact.id}
						active={active}
						{...contact}
						onStarredClick={() => toggleStarredContact(contact.id)}
						onDeleteClick={() => deleteContact(contact.id)}
						onContactClick={() => { contactDetails(contact.id); showRightPart(); }}
					/>
				))}
			</tbody>
		</Table>
	</div>
);

ContactsList.prototype = {
	contacts: PropTypes.arrayOf(
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
	).isRequired,
	toggleStarredContact: PropTypes.func.isRequired,
	deleteContact: PropTypes.func.isRequired,
	contactDetails: PropTypes.func.isRequired
};
export default ContactsList;
