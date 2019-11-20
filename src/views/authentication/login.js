import React from 'react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	CustomInput,
	FormGroup,
	Form,
	Row,
	Col,
	UncontrolledTooltip,
	Button
} from 'reactstrap';
import img1 from '../../assets/images/logo-icon.png';
import img2 from '../../assets/images/background/login-register.jpg';

const sidebarBackground = {
	backgroundImage: "url(" + img2 + ")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "bottom center"
};

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		var elem = document.getElementById('loginform');
		elem.style.transition = "all 2s ease-in-out";
		elem.style.display = "none";
		document.getElementById('recoverform').style.display = "block";
	}
	render() {
		return <div className="">
			{/*--------------------------------------------------------------------------------*/}
			{/*Login Cards*/}
			{/*--------------------------------------------------------------------------------*/}
			<div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={sidebarBackground}>
				<div className="auth-box on-sidebar">
					<div id="loginform">
						<div className="logo">
							<span className="db"><img src={img1} alt="logo" /></span>
							<h5 className="font-medium mb-3">Sign In to Admin</h5>
						</div>
						<Row>
							<Col xs="12">
								<Form className="mt-3" id="loginform" action="/dashbaord">
									<InputGroup className="mb-3">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ti-user"></i>
											</InputGroupText>
										</InputGroupAddon>
										<Input type="text" placeholder="Username" required />
									</InputGroup>
									<InputGroup className="mb-3">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ti-pencil"></i>
											</InputGroupText>
										</InputGroupAddon>
										<Input type="password" placeholder="Password" required />
									</InputGroup>
									<div className="d-flex no-block align-items-center mb-3">
										<CustomInput type="checkbox" id="exampleCustomCheckbox" label="Remember Me" />
										<div className="ml-auto">
											<a href="#recoverform" id="to-recover" onClick={this.handleClick} className="forgot text-dark float-right"><i className="fa fa-lock mr-1"></i> Forgot pwd?</a>
										</div>
									</div>
									<Row className="mb-3">
										<Col xs="12">
											<Button color="primary" size="lg" type="submit" block>Log In</Button>
										</Col>
									</Row>
									<div className="text-center mb-2">
										<div className="social">
											<Button id="UncontrolledTooltipExample1" className="btn-facebook mr-2" color="primary">
												<i aria-hidden="true" className="fab fa-facebook-f"></i>
											</Button>
											<UncontrolledTooltip placement="top" target="UncontrolledTooltipExample1">
												Facebook</UncontrolledTooltip>
											<Button id="UncontrolledTooltipExample2" className="btn-googleplus" color="danger">
												<i aria-hidden="true" className="fab fa-google-plus-g"></i>
											</Button>
											<UncontrolledTooltip placement="top" target="UncontrolledTooltipExample2">
												Google Plus</UncontrolledTooltip>
										</div>
									</div>
									<div className="text-center">
										Don&apos;t have an account? <a href="/authentication/register" className="text-info ml-1"><b>Sign Up</b></a>
									</div>
								</Form>
							</Col>
						</Row>
					</div>
					<div id="recoverform">
						<div className="logo">
							<span className="db"><img src={img1} alt="logo" /></span>
							<h5 className="font-medium mb-3">Recover Password</h5>
							<span>Enter your Email and instructions will be sent to you!</span>
						</div>
						<Row className="mt-3">
							<Col xs="12">
								<Form action="/dashbaord">
									<FormGroup>
										<Input type="text" name="uname" bsSize="lg" id="Name" placeholder="Username" required />
									</FormGroup>
									<Row className="mt-3">
										<Col xs="12">
											<Button color="danger" size="lg" type="submit" block>Reset</Button>
										</Col>
									</Row>
								</Form>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default Login;
