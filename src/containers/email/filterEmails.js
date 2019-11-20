import { connect } from 'react-redux'
import { setEmailVisibilityFilter } from '../../redux/email/action'
import FilterLinks from '../../components/email/filterLinks.js'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.emailReducer.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setEmailVisibilityFilter(ownProps.filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLinks)