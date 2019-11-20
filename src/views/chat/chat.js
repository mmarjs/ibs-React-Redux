import React, { Component, Fragment } from "react";
import ChatList from "../../containers/chat/chatList";
import ChatSearch from "../../containers/chat/chatSearch";
import ChatContent from "../../containers/chat/chatContent";
import ChatMsgSend from "../../containers/chat/chatMsgSend";

class Chat extends Component {

    render() {
        return (
            <Fragment>
                <div>
                    <div className="left-part bg-white chat-list">
                        <ChatSearch />
                        <ChatList />
                    </div>
                    <div className="right-part bg-white chat-list">
                        <ChatContent />
                        <ChatMsgSend />
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Chat;
