import React from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

class EmailActions extends React.Component {
	state = {
		folderDpOpen: false,
		labelDpOpen: false
	};

	folderDptoggle = () => {
		this.setState(prevState => ({
			folderDpOpen: !prevState.folderDpOpen
		}));
	};

	labelDptoggle = () => {
		this.setState(prevState => ({
			labelDpOpen: !prevState.labelDpOpen
		}));
	};
	render() {
		return (
			<div className="bg-light px-3 pb-3 border-bottom">
				<div className="d-flex" role="group">
					<button type="button" className="btn btn-outline-secondary w-100" onClick={() => this.props.trashEmail(this.props.id)}><i className="fas fa-trash-alt"></i></button>
					<div className="w-100">
						<div className="btn-group w-100" role="group">
							<Dropdown className="w-100" isOpen={this.state.folderDpOpen} toggle={this.folderDptoggle}>
								<DropdownToggle className="btn btn-outline-secondary w-100">
									<i className="fas fa-folder"></i>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem onClick={e => this.props.assignFolder(this.props.id, "inbox")}>Inbox</DropdownItem>
									<DropdownItem onClick={e => this.props.assignFolder(this.props.id, "sent")}>Sent</DropdownItem>
									<DropdownItem onClick={e => this.props.assignFolder(this.props.id, "draft")}>Draft</DropdownItem>
									<DropdownItem onClick={e => this.props.assignFolder(this.props.id, "spam")}>Spam</DropdownItem>
									<DropdownItem onClick={e => this.props.assignFolder(this.props.id, "trash")}>Trash</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</div>
					<div className="w-100">
						<div className="btn-group w-100" role="group">
							<Dropdown className="w-100" isOpen={this.state.labelDpOpen} toggle={this.labelDptoggle}>
								<DropdownToggle className="btn btn-outline-secondary w-100">
									<i className="fas fa-tags"></i>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem onClick={e => this.props.assignLabel(this.props.id, "Promotional")}>Promotional</DropdownItem>
									<DropdownItem onClick={e => this.props.assignLabel(this.props.id, "Social")}>Social</DropdownItem>
									<DropdownItem onClick={e => this.props.assignLabel(this.props.id, "Health")}>Health</DropdownItem>
								</DropdownMenu>
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default EmailActions;
