import React from "react";
import Chat from "./chatListItem";
import PropTypes from 'prop-types';
import { Nav } from 'reactstrap';

const ChatList = ({ chats, openChat }) => (
    <Nav className="list-unstyled d-block mailbox chat-users">
        <div className="message-center" style={{ 'height': 'calc(100vh - 274px)' }}>
            {chats.map(chat => (
                <Chat
                    key={chat.id}
                    {...chat}
                    onClick={() => openChat(chat.id)}
                    thumb={chat.thumb}
                    status={chat.status}
                    contactName={chat.name}
                    chatExcerpt={chat.excerpt}
                />
            ))}
        </div>
    </Nav>
);

ChatList.propTypes = {
    chats: PropTypes.array.isRequired,
    openChat: PropTypes.func.isRequired
}
export default ChatList;
