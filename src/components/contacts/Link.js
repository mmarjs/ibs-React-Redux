import React from "react";
import PropTypes from "prop-types";


const Link = ({ active, children, onClick }) => (
	<li className="list-group-item" onClick={onClick}>
		<span className={"list-group-item-action " + (active ? "active" : "")}>
			{children}
		</span>
	</li>
);

Link.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
};

export default Link;
