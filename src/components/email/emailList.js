import React from "react";
import Email from "./emailListItem";
import PropTypes from "prop-types";

const EmailList = ({ active, emails, openEmail, onStar, onImportant, setSelectedEmail, showRightPart }) => (
	<ul className="list-group email-list">
		{emails.map(email => (
			<Email
				key={email.id}
				active={active}
				{...email}
				onClick={() => { openEmail(email.id); showRightPart(); }}
				onStar={() => onStar(email.id)}
				onImportant={() => onImportant(email.id)}
				onChange={e => {
					if (e.target.checked === true) setSelectedEmail(email.id, "checked");
					else setSelectedEmail(email.id, "unchecked");
				}}
			/>
		))}
	</ul>
);

EmailList.propTypes = {
	emails: PropTypes.array.isRequired,
	openEmail: PropTypes.func.isRequired,
	onStar: PropTypes.func.isRequired,
	onImportant: PropTypes.func.isRequired,
	setSelectedEmail: PropTypes.func.isRequired
};
export default EmailList;
