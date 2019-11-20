import React from 'react';
import {
	InputGroup,
	InputGroupAddon,
	InputGroupText,
	Input,
	CustomInput,
	Form,
	Row,
	Col,
	Label,
	Button

} from 'reactstrap';
import { auth } from '../../firebase';
import validators from './validators';

import img2 from '../../assets/images/big/auth-bg.jpg';

const sidebarBackground = {
	backgroundImage: "url(" + img2 + ")",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center center"
};

class Login2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: null,
		};
		this.handleClick = this.handleClick.bind(this);
		this.validators = validators;
		this.onInputChange = this.onInputChange.bind(this);
		this.doLogin = this.doLogin.bind(this);
		this.showErrors = this.showErrors.bind(this);
		this.formValidators = this.formValidators.bind(this);
	}
	onInputChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
		this.formValidators([event.target.name], event.target.value);
	}
	formValidators(fieldName, value) {
		this.validators[fieldName].errors = [];
		this.validators[fieldName].state = value;
		this.validators[fieldName].valid = true;
		this.validators[fieldName].rules.forEach((rule) => {
			if (rule.test instanceof RegExp) {
				if (!rule.test.test(value)) {
					this.validators[fieldName].errors.push(rule.message);
					this.validators[fieldName].valid = false;
				}
			} else if (typeof rule.test === 'function') {
				if (!rule.test(value)) {
					this.validators[fieldName].errors.push(rule.message);
					this.validators[fieldName].valid = false;
				}
			}
		});
	}
	validForm() {
		let status = true;
		Object.keys(this.validators).forEach((field) => {
			if (field === 'email' || field === 'password') {
				if (!this.validators[field].valid) {
					status = false;
				}
			}
		});
		return status;
	}
	showErrors(fieldName) {
		const validator = this.validators[fieldName];
		const result = '';
		if (validator && !validator.valid) {
			const errors = validator.errors.map((info, index) => {
				return <span className="error" key={index}>* {info}<br /></span>
			});
			return (
				<div className="error mb-2">
					{errors}
				</div>
			);
		}
		return result;
	}
	doLogin(event) {
		const {
			email,
			password
		} = this.state;
		auth.doSignInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState(() => ({
					email: email,
					password: password,
				}));
				this.props.history.push("/");
			})
			.catch(error => {
				alert('Invalid login id or password.');
			});
		event.preventDefault();
	}
	handleClick() {
		var elem = document.getElementById('loginform');
		elem.style.transition = "all 2s ease-in-out";
		elem.style.display = "none";
		document.getElementById('recoverform').style.display = "block";
	}
	render() {
		return <div className="auth-wrapper  align-items-center d-flex" style={sidebarBackground}>
			{/*--------------------------------------------------------------------------------*/}
			{/*Login2 Cards*/}
			{/*--------------------------------------------------------------------------------*/}
			<div className="container">
				<div >
					<Row className="no-gutters justify-content-center">
						<Col md="6" lg="4" className="bg-dark text-white">
							<div className="p-4">
								<h2 className="display-5">Hi,<br /> <span className="text-cyan font-bold">Dude</span></h2>
								<p className="op-5 mt-4">This is the Firebase login section. Donec non pharetra ligula, sit amet laoreet arcu.Integer. you can use below username password for login</p>
								<p className="mt-5">Username: demo@demo.com</p>
								<p className="align-items-end">Password: demo123</p>
							</div>

						</Col>
						<Col md="6" lg="4" className="bg-white">
							<div className="p-4">
								<h3 className="font-medium mb-3">Sign In to Admin</h3>
								<Form className="mt-3" id="loginform" action="/dashbaord">
									<Label for="email" className="font-medium">Email</Label>
									<InputGroup className="mb-2" size="lg">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ti-user"></i>
											</InputGroupText>
										</InputGroupAddon>
										<Input type="email" id="email" name="email" value={this.state.email} onChange={this.onInputChange} placeholder="Email" />
									</InputGroup>
									{this.showErrors('email')}
									<Label for="password" className="mt-3 font-medium">Password</Label>
									<InputGroup className="mb-3" size="lg">
										<InputGroupAddon addonType="prepend">
											<InputGroupText>
												<i className="ti-pencil"></i>
											</InputGroupText>
										</InputGroupAddon>
										<Input type="password" id="password" name="password" value={this.state.password} onChange={this.onInputChange} placeholder="Password" />
									</InputGroup>
									{this.showErrors('password')}
									<div className="d-flex no-block align-items-center mb-4 mt-4">
										<CustomInput type="checkbox" id="exampleCustomCheckbox" label="Remember Me" />
									</div>
									<Row className="mb-3">
										<Col xs="12">
											<Button color="primary" onClick={this.doLogin} className={`${this.validForm() ? '' : 'disabled'}`} size="lg" type="submit" block>Log In</Button>
										</Col>
									</Row>
									<div className="text-center">
										Don&apos;t have an account? <a href="/authentication/register2" className="text-info ml-1"><b>Sign Up</b></a>
									</div>
								</Form>
							</div>

						</Col>
					</Row>
				</div>
			</div>
		</div>;
	}
}

export default Login2;
