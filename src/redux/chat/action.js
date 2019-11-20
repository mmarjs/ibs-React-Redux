import { SELECTED_CHAT, SEARCH_USER, MSG_SUBMIT } from '../constants/';

export const openChat = id => ({
    type: SELECTED_CHAT,
    id
})

export const chatSearch = (searchTerm) => ({
    type: SEARCH_USER,
    searchTerm
})

export const sendMsg = (id, chatMsg) => ({
    type: MSG_SUBMIT,
    id,
    chatMsg
})