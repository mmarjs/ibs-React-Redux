import { connect } from 'react-redux';
import chatList from '../../components/chat/chatList';
import { openChat } from '../../redux/chat/action';

const filterChats = (chats, chatSearch) => {
    if (chatSearch !== '')
        return chats.filter(t => t.name.toLocaleLowerCase().includes(chatSearch.toLocaleLowerCase()))
    else
        return chats
}

const mapStateToProps = state => ({
    chats: filterChats(state.chatReducer.chats, state.chatReducer.chatSearch)
})

const mapDispatchToProps = dispatch => ({
    openChat: id => dispatch(openChat(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(chatList)