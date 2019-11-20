import React from 'react';
import { connect } from 'react-redux';
import {
	Nav,
	Navbar,
	NavbarBrand,
	Collapse,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import * as data from './data';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logodarkicon from '../../../assets/images/logo-icon.png';
import logolighticon from '../../../assets/images/logo-light-icon.png';
import logodarktext from '../../../assets/images/logo-text.png';
import logolighttext from '../../../assets/images/logo-light-text.png';
import profilephoto from '../../../assets/images/users/1.jpg';
import {NavLink} from "react-router-dom";

const mapStateToProps = state => ({
	...state
});

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.showMobilemenu = this.showMobilemenu.bind(this);
		this.sidebarHandler = this.sidebarHandler.bind(this);
		this.state = {
			isOpen: false
		};
	}
	/*--------------------------------------------------------------------------------*/
	/*To open NAVBAR in MOBILE VIEW                                                   */
	/*--------------------------------------------------------------------------------*/
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	/*--------------------------------------------------------------------------------*/
	/*To open SIDEBAR-MENU in MOBILE VIEW                                             */
	/*--------------------------------------------------------------------------------*/
	showMobilemenu() {
		document.getElementById('main-wrapper').classList.toggle('show-sidebar');
	}
	sidebarHandler = () => {
		let element = document.getElementById('main-wrapper');
		switch (this.props.settings.activeSidebarType) {
			case 'full':
			case 'iconbar':
				element.classList.toggle('mini-sidebar');
				if (element.classList.contains('mini-sidebar')) {
					element.setAttribute('data-sidebartype', 'mini-sidebar');
				} else {
					element.setAttribute(
						'data-sidebartype',
						this.props.settings.activeSidebarType
					);
				}
				break;
			case 'overlay':
			case 'mini-sidebar':
				element.classList.toggle('full');
				if (element.classList.contains('full')) {
					element.setAttribute('data-sidebartype', 'full');
				} else {
					element.setAttribute(
						'data-sidebartype',
						this.props.settings.activeSidebarType
					);
				}
				break;
			default:
		}
	};

	/*--------------------------------------------------------------------------------*/
	/*Verifies if routeName is the one active (in browser input)                      */
	/*--------------------------------------------------------------------------------*/
	activeRoute(routeName) { 
		return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : ''; 
	}

	render() {
		return (
			<header className="topbar navbarbg" data-navbarbg={this.props.settings.activeNavbarBg}>
				<Navbar className={"top-navbar " + (this.props.settings.activeNavbarBg === "skin6" ? 'navbar-light' : 'navbar-dark')} expand="md">
					<div className="navbar-header" id="logobg" data-logobg={this.props.settings.activeLogoBg}>
						{/*--------------------------------------------------------------------------------*/}
						{/* Mobile View Toggler  [visible only after 768px screen]                         */}
						{/*--------------------------------------------------------------------------------*/}
						<span className="nav-toggler d-block d-md-none" onClick={this.showMobilemenu}>
							<i className="ti-menu ti-close" />
						</span>
						{/*--------------------------------------------------------------------------------*/}
						{/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
						{/*--------------------------------------------------------------------------------*/}
						<NavbarBrand href="/">
							<b className="logo-icon">
								<img src={logodarkicon} alt="homepage" className="dark-logo" />
								<img
									src={logolighticon}
									alt="homepage"
									className="light-logo"
								/>
							</b>
							<span className="logo-text">
								<img src={logodarktext} alt="homepage" className="dark-logo" />
								<img
									src={logolighttext}
									className="light-logo"
									alt="homepage"
								/>
							</span>
						</NavbarBrand>
						{/*--------------------------------------------------------------------------------*/}
						{/* Mobile View Toggler  [visible only after 768px screen]                         */}
						{/*--------------------------------------------------------------------------------*/}
						<span className="topbartoggler d-block d-md-none" onClick={this.toggle}>
							<i className="ti-more" />
						</span>
					</div>
					<Collapse className="navbarbg" isOpen={this.state.isOpen} navbar data-navbarbg={this.props.settings.activeNavbarBg} >
						<Nav className="float-left" navbar>
							{/*--------------------------------------------------------------------------------*/}
							{/*--------------------------------------------------------------------------------*/}
							{/* Start Create New Dropdown                                                      */}
							{/*--------------------------------------------------------------------------------*/}
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav>
									Create New <i className="fa fa-angle-down" />
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem className={this.activeRoute("/admin/addClient/iClient")}>
										<NavLink to={"/admin/addClient/iClient"} >
											Individual Client
										</NavLink>
									</DropdownItem>
									<DropdownItem className={this.activeRoute("/admin/addClient/cClient")}>
										<NavLink to={"/admin/addClient/cClient"} >
											Corporate Client
										</NavLink>
									</DropdownItem>
									<DropdownItem className={this.activeRoute("/dashboards/quotes")}>
										<NavLink to={"/dashboards/quotes"} >
											Quote
										</NavLink>
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							{/*--------------------------------------------------------------------------------*/}
							{/* End Create New Dropdown                                                        */}
							{/*--------------------------------------------------------------------------------*/}
						</Nav>
						<Nav className="ml-auto float-right" navbar>
							{/*--------------------------------------------------------------------------------*/}
							{/* Start Notifications Dropdown                                                   */}
							{/*--------------------------------------------------------------------------------*/}
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									<i className="mdi mdi-bell font-24" />
								</DropdownToggle>
								<DropdownMenu right className="mailbox">
									<span className="with-arrow">
										<span className="bg-primary" />
									</span>
									<div className="d-flex no-block align-items-center p-3 bg-primary text-white mb-2">
										<div className="">
											<h4 className="mb-0">4 New</h4>
											<p className="mb-0">Notifications</p>
										</div>
									</div>
									<div className="message-center notifications">
										{/*<!-- Message -->*/}
										{data.notifications.map((notification, index) => {
											return (
												<span href="" className="message-item" key={index}>
													<span className={"btn btn-circle btn-" + notification.iconbg}>
														<i className={notification.iconclass} />
													</span>
													<div className="mail-contnet">
														<h5 className="message-title">{notification.title}</h5>
														<span className="mail-desc">
															{notification.desc}
														</span>
														<span className="time">{notification.time}</span>
													</div>
												</span>
											);
										})}
									</div>
									<a className="nav-link text-center mb-1 text-dark" href=";">
										<strong>Check all notifications</strong>{' '}
										<i className="fa fa-angle-right" />
									</a>
								</DropdownMenu>
							</UncontrolledDropdown>
							{/*--------------------------------------------------------------------------------*/}
							{/* End Notifications Dropdown                                                     */}
							{/*--------------------------------------------------------------------------------*/}
							{/*--------------------------------------------------------------------------------*/}
							{/* Start Profile Dropdown                                                         */}
							{/*--------------------------------------------------------------------------------*/}
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret className="pro-pic">
									<img
										src={profilephoto}
										alt="user"
										className="rounded-circle"
										width="31"
									/>
								</DropdownToggle>
								<DropdownMenu right className="user-dd">
									<span className="with-arrow">
										<span className="bg-primary" />
									</span>
									<div className="d-flex no-block align-items-center p-3 bg-primary text-white mb-2">
										<div className="">
											<img
												src={profilephoto}
												alt="user"
												className="rounded-circle"
												width="60"
											/>
										</div>
										<div className="ml-2">
											<h4 className="mb-0">Kaki Gondi</h4>
											<p className=" mb-0">kaki@ibske.com</p>
										</div>
									</div>
									<DropdownItem>
										<i className="ti-user mr-1 ml-1" /> Profile
                  					</DropdownItem>

									<DropdownItem divider />
									<DropdownItem>
										<i className="ti-settings mr-1 ml-1" />
										<NavLink to={"/admin/companysetup"} >
											Company Setup
										</NavLink>
                  					</DropdownItem>
									<DropdownItem divider />
									<DropdownItem href="/pages/login">
										<i className="fa fa-power-off mr-1 ml-1" /> Logout
                  					</DropdownItem>

								</DropdownMenu>
							</UncontrolledDropdown>
							{/*--------------------------------------------------------------------------------*/}
							{/* End Profile Dropdown                                                           */}
							{/*--------------------------------------------------------------------------------*/}
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		);
	}
}
export default connect(mapStateToProps)(Header);
