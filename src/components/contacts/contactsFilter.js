import React from "react";
import { Modal, ModalHeader, ListGroup, ListGroupItem } from "reactstrap";
import FilterLink from "../../containers/contacts/contactsFilterLink";
import { contactVisiblityFilter } from "../../redux/contacts/action";
import AddContact from "../../containers/contacts/addContact";

class ContactsFilter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};

		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState({
			modal: !this.state.modal
		});
	}
	render() {
		return (
			<div>
				<div className="p-3">
					<span onClick={this.toggle} className="btn btn-danger d-block text-white">New Contact</span>
				</div>
				<div className="divider"></div>
				<ListGroup className="contact-filters">
					<FilterLink filter={contactVisiblityFilter.SHOW_ALL}>
						<i className="fas fa-users mr-2"></i> All
                        </FilterLink>
					<FilterLink filter={contactVisiblityFilter.FREQUENT_CONTACT}>
						<i className="fas fa-sync-alt mr-2"></i> Frequent
                        </FilterLink>
					<FilterLink filter={contactVisiblityFilter.STARRED_CONTACT}>
						<i className="fas fa-star mr-2"></i> Starred
                        </FilterLink>
					<ListGroupItem>
						<hr />
					</ListGroupItem>
					<FilterLink
						filter={contactVisiblityFilter.ENGINEERING_DEPARTMENT_CONTACT}
						departmentValue="Engineering"
					>
						<i className="fas fa-tags mr-2"></i> Engineering
                        </FilterLink>
					<FilterLink filter={contactVisiblityFilter.SALES_DEPARTMENT_CONTACT} departmentValue="Sales">
						<i className="fas fa-tags mr-2"></i> Sales
                        </FilterLink>
					<FilterLink filter={contactVisiblityFilter.SUPPORT_DEPARTMENT_CONTACT} departmentValue="Support">
						<i className="fas fa-tags mr-2"></i> Support
                        </FilterLink>
				</ListGroup>
				<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} size="md">
					<ModalHeader toggle={this.toggle}>Add Contact</ModalHeader>
					<AddContact />
				</Modal>
			</div>
		);
	}
}

export default ContactsFilter;
