import React from 'react'
import PropTypes from 'prop-types'

const FilterLinks = ({ active, children, onClick }) => (
    <li className="list-group-item" onClick={onClick} disabled={active}>
        <span className={"list-group-item-action " + (active ? "active" : "")}>
            {children}
        </span>
    </li>
)

FilterLinks.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default FilterLinks;