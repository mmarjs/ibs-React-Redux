import { connect } from 'react-redux'
import emailList from '../../components/email/emailList'
import { EmailVisibilityFilters, openEmail, setSelectedEmail, starEmail, importantEmail } from '../../redux/email/action';

const getVisibleEmails = (emails, filter, emailSearch) => {
  switch (filter) {
    case EmailVisibilityFilters.SHOW_INBOX:
      return emails.filter(
        t => t.inbox &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      )
    case EmailVisibilityFilters.SHOW_SENT:
      return emails.filter(
        t => t.sent &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      )
    case EmailVisibilityFilters.SHOW_DRAFTS:
      return emails.filter(
        t => t.draft &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      )
    case EmailVisibilityFilters.SHOW_SPAM:
      return emails.filter(
        t => t.spam &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      )
    case EmailVisibilityFilters.SHOW_TRASH:
      return emails.filter(
        t => t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      )
    case EmailVisibilityFilters.SHOW_STARRED:
      return emails.filter(
        t => t.starred &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      )
    case EmailVisibilityFilters.SHOW_IMPORTANT:
      return emails.filter(
        t => t.important &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      )
    case EmailVisibilityFilters.SHOW_PROMOTIONAL:
      return emails.filter(
        t => t.label === 'Promotional' &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      )
    case EmailVisibilityFilters.SHOW_SOCIAL:
      return emails.filter(
        t => t.label === 'Social' &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      )
    case EmailVisibilityFilters.SHOW_HEALTH:
      return emails.filter(
        t => t.label === 'Health' &&
          !t.trash &&
          t.from.toLocaleLowerCase().includes(emailSearch.toLocaleLowerCase())
      )
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  emails: getVisibleEmails(state.emailReducer.emails, state.emailReducer.visibilityFilter, state.emailReducer.emailSearch),
  active: state.emailReducer.emailContent
})

const mapDispatchToProps = dispatch => ({
  openEmail: id => dispatch(openEmail(id)),
  onStar: id => dispatch(starEmail(id)),
  onImportant: id => dispatch(importantEmail(id)),
  setSelectedEmail: (id, checkStatus) => dispatch(setSelectedEmail(id, checkStatus))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(emailList)