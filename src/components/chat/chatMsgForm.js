import React, { Component } from "react";
import { Form, Input } from 'reactstrap';
import PropTypes from 'prop-types';

class ChatMsgForm extends Component {
    state = {
        msg: ""
    };
    handleChatMsgChange = e => {
        this.setState({
            msg: e.target.value
        });
    };

    onChatMsgSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        this.props.onClick(this.props.id, this.state.msg)
        this.setState({ msg: "" })
    }

    render() {
        return (
            <Form onSubmit={this.onChatMsgSubmit} className="card-body border-top">
                <div className="d-flex">
                    <Input
                        type="text"
                        className="form-control mr-2"
                        placeholder="Type your message"
                        onChange={this.handleChatMsgChange}
                        value={this.state.msg}
                        required
                    />
                    <button
                        onClick={() => {
                            this.props.onClick(this.props.id, this.state.msg)
                            this.setState({ msg: "" })
                        }}
                        className="btn btn-outline-secondary"
                        type="button"
                        disabled={!this.state.msg}
                    >
                        <i className="fas fa-paper-plane" />
                    </button>
                </div>
            </Form>
        );
    }
}

ChatMsgForm.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ChatMsgForm;
