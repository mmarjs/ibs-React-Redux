import { connect } from "react-redux";
import { setEditContactFlag, updateContact } from "../../redux/contacts/action";
import contactsDetails from "../../components/contacts/contactsDetails";

const mapStateToProps = (state, ownProps) => ({
   selectedContacts: state.contactReducer.contacts[state.contactReducer.contactsDetails],
   editContactFlag: state.contactReducer.editContact
});

const mapDispatchToProps = dispatch => ({
   onEditClick: () => dispatch(setEditContactFlag()),
   onChange: (id, field, value) => dispatch(updateContact(id, field, value))
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(contactsDetails);
