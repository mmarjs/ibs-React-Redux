import React, { Component, Fragment } from "react";
import ShowEmails from "../../containers/email/showEmails";
import EmailSidebar from "../../components/email/emailSidebar";
import EmailActions from "../../containers/email/emailActions";
import EmailSearch from "../../containers/email/emailSearch";
import EmailContent from "../../containers/email/emailContent";

class Email extends Component {

	constructor(props) {
		super(props);

		this.state = {
			showLeftPart: false,
			showRightPart: false
		};
		this.showLeftPart = this.showLeftPart.bind(this);
		this.showRightPart = this.showRightPart.bind(this);
	}

	showLeftPart = () => {
		this.setState({
			showLeftPart: !this.state.showLeftPart
		});
	}
	showRightPart = () => {
		this.setState({
			showRightPart: !this.state.showRightPart
		});
	}

	render() {
		return (
			<Fragment>
				<div className="email-app">
					<div className={"left-part bg-white " + (this.state.showLeftPart === true ? "show-panel" : "")}>
						<EmailSidebar />
					</div>
					<div className="right-part contact-list bg-white">
						<div className={"right-left-part " + (this.state.showRightPart === true ? "show-right-left-panel" : "")}>
							<span onClick={() => { this.showLeftPart(); }} className={"bg-primary show-left-part text-white d-block d-lg-none " + (this.state.showLeftPart === true ? "left-part-open" : "")}><i className={(this.state.showLeftPart === true ? "fas fa-chevron-left" : "fas fa-chevron-right")}></i></span>
							<EmailSearch />
							<EmailActions />
							<ShowEmails showRightPart={() => { this.showRightPart(); }} />
						</div>
						<div className={"right-right-part " + (this.state.showRightPart === true ? "show-right-right-panel" : "")}>
							<span onClick={() => { this.showRightPart(); }} className={"hide-right-right-part d-block d-md-none " + (this.state.showRightPart === true ? "right-right-part-open" : "")}><i className="fas fa-times"></i></span>
							<EmailContent />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Email;
