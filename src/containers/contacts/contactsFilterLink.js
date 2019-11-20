import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../redux/contacts/action';
import Link from '../../components/contacts/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.contactReducer.contactsVisibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)