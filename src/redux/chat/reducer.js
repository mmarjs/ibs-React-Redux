import { SELECTED_CHAT, SEARCH_USER, MSG_SUBMIT } from '../constants/';
import chatData from '../../data/chat/chatData';

const INIT_STATE = {
    chatContent: 1,
    chatSearch: "",
    chats: chatData
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case SELECTED_CHAT:
            return {
                ...state,
                chatContent: action.id
            };
        case MSG_SUBMIT:
            return {
                ...state,
                chats: chatData.map(chat =>
                    (chat.id === action.id
                        ?
                        Object.assign({}, chat, chat.chatHistory[0][1]['to'].push(action.chatMsg))
                        : chat
                    ))
            };
        case SEARCH_USER:
            return {
                ...state,
                chatSearch: action.searchTerm
            }
        default:
            return state;
    }
};