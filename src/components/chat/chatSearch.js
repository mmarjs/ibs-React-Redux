import React from "react";
import { Form, Input } from "reactstrap";
import PropTypes from 'prop-types';

const ChatSearch = ({ onChange, searchTerm }) => (
    <div className="p-3 border-bottom">
        <h5 className="card-title">Search Contact</h5>
        <Form>
            <div className="position-relative has-icon-left">
                <Input
                    className="form-control"
                    id="searchUser"
                    name="searchUser"
                    type="text"
                    onChange={e => onChange(e.target.value)}
                    value={searchTerm}
                    placeholder="Type here to search..."
                />
            </div>
        </Form>
    </div>
);

ChatSearch.propTypes = {
    onChange: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired,
}

export default ChatSearch;