import React, { Component } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from 'prop-types';

class ChatContent extends Component {

    updateScrollbar = () => {
        const ctn = document.getElementById('chat-list');
        setTimeout(() => {
            ctn.scrollTo(0, ctn.scrollHeight);
        }, 300);
    }
    componentDidUpdate() {
        this.updateScrollbar();
    }

    render() {
        let chatDetails = this.props.chatDetails;
        return <div>
            <div className="d-flex align-items-center p-3 border-bottom">
                <div className="mr-3">
                    <img src={chatDetails.thumb} alt="user" className="rounded-circle" width="50" />
                </div>
                <div>
                    <h5 className="message-title mb-0">{chatDetails.name}</h5>
                    <p className="mb-0">{chatDetails.status}</p>
                </div>
                <div className="ml-auto">
                    <i className="fas fa-ellipsis-v"></i>
                </div>
            </div>

            <PerfectScrollbar
                containerRef={(ref) => {
                    this.chatScrollHandler = ref;
                }}
            >
                <ul id="chat-list" className="chat-list p-4" style={{ 'height': 'calc(100vh - 334px)' }}>
                    {Object.keys(chatDetails.chatHistory).map((chat) =>
                        (Object.keys(chatDetails.chatHistory[chat]).map((key) =>
                            (Object.keys(chatDetails.chatHistory[chat][key]).map((k) =>
                                (k === 'from') ?
                                    <li className="chat-item d-flex" key={k}>
                                        <div className="chat-img">
                                            <img src={chatDetails.thumb} alt={chatDetails.name} />
                                        </div>
                                        <div className="pl-3">
                                            {(chatDetails.chatHistory[chat][key][k]).map((v) =>
                                                <div className="chat-content" key={v}>
                                                    <div className="box bg-light-info">{v}</div>
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                    :
                                    <li className="chat-item odd" key={k}>
                                        {(chatDetails.chatHistory[chat][key][k]).map((v) =>
                                            <div className="chat-content" key={v}>
                                                <div className="box bg-light-info">{v}</div>
                                            </div>
                                        )}
                                    </li>
                            ))
                        ))
                    )}
                </ul>
            </PerfectScrollbar>
        </div>
    }
}

export default ChatContent;

ChatContent.propTypes = {
    chatDetails: PropTypes.object.isRequired
}