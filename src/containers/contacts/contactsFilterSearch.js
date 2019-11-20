import { connect } from "react-redux";
import { contactsSearch } from "../../redux/contacts/action";
import Search from "../../components/contacts/Search";

const mapStateToProps = (state) => ({
   value: state.contactReducer.contactsSearch
});

const mapDispatchToProps = (dispatch) => ({
   onChange: value => dispatch(contactsSearch(value)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Search);
