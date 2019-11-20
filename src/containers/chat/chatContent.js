import { connect } from 'react-redux';
import chatContent from '../../components/chat/chatContent';

const mapStateToProps = state => ({
    chatDetails: state.chatReducer.chats[state.chatReducer.chatContent - 1]
})

export default connect(
    mapStateToProps
)(chatContent)