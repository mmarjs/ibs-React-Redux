import React from "react";
import PropTypes from 'prop-types';

class EmailSearch extends React.Component {
	render() {
		return (
			<div className="bg-light p-3">
				<input
					type="text"
					className="form-control"
					placeholder="Search emails"
					onChange={e => this.props.onChange(e.target.value)}
					value={this.props.searchTerm}
				/>
			</div>
		);
	}
}

EmailSearch.propTypes = {
	onChange: PropTypes.func.isRequired,
	searchTerm: PropTypes.string.isRequired
}

export default EmailSearch;
