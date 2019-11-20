import { connect } from "react-redux";
import { chatSearch } from "../../redux/chat/action";
import Search from "../../components/chat/chatSearch";

const mapStateToProps = (state) => ({
   searchTerm: state.chatReducer.chatSearch
});

const mapDispatchToProps = (dispatch) => ({
   onChange: searchTerm => dispatch(chatSearch(searchTerm)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Search);
