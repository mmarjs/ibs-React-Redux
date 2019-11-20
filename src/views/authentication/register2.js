import React from 'react';
import { auth, db } from '../../firebase';
import validators from './validators';
import {
  Input,
  CustomInput,
  FormGroup,
  Form,
  Row,
  Col,
  Label,
  Button
} from 'reactstrap';
import img2 from '../../assets/images/big/auth-bg.jpg';

const sidebarBackground = {
  backgroundImage: 'url(' + img2 + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center'
};

class Register2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      error: null
    };
    this.validators = validators;
    this.onInputChange = this.onInputChange.bind(this);
    this.doRegister = this.doRegister.bind(this);
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
    this.validators[fieldName].rules.forEach(rule => {
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
  isFormValid() {
    let status = true;
    Object.keys(this.validators).forEach(field => {
      if (!this.validators[field].valid) {
        status = false;
      }
    });
    return status;
  }
  showErrors(fieldName) {
    const validator = this.validators[fieldName];
    const result = '';
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return (
          <span className="error" key={index}>
            * {info}
            <br />
          </span>
        );
      });

      return <div className="error mb-2">{errors}</div>;
    }
    return result;
  }
  doRegister(event) {
    const { username, email, password } = this.state;
    auth
      .doCreateUserWithEmailAndPassword(email, password)
      .then(authUser => {
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({
              username: username,
              email: email,
              password: password
            }));
            this.props.history.push('/authentication/login2');
          })
          .catch(error => {
            alert('Something went wrong!');
          });
      })
      .catch(error => {
        alert('Something went wrong!');
      });
    event.preventDefault();
  }
  render() {
    return (
      <div
        className="auth-wrapper  align-items-center d-flex"
        style={sidebarBackground}
      >
        {/*--------------------------------------------------------------------------------*/}
        {/*Login2 Cards*/}
        {/*--------------------------------------------------------------------------------*/}
        <div className="container">
          <div>
            <Row className="no-gutters justify-content-center">
              <Col md="6" lg="4" className="bg-dark text-white">
                <div className="p-4">
                  <h2 className="display-5">
                    Hi,
                    <br /> <span className="text-cyan font-bold">Dude</span>
                  </h2>
                  <p className="op-5 mt-4">
                    This is the Firebase sign-up section. Donec non pharetra
                    ligula, sit amet laoreet arcu.Integer. you can use below
                    username password for login
                  </p>
                  <p className="mt-5">Username: demo@demo.com</p>
                  <p className="align-items-end">Password: demo123</p>
                </div>
              </Col>
              <Col md="6" lg="4" className="bg-white">
                <div className="p-4">
                  <h3 className="font-medium mb-3">Sign Up to Admin</h3>
                  <Form className="mt-3" id="loginform" action="/dashbaord">
                    <FormGroup className="mb-3">
                      <Label for="username" className="font-medium">
                        Username
                      </Label>
                      <Input
                        type="text"
                        value={this.state.username}
                        onChange={this.onInputChange}
                        name="username"
                        id="username"
                        placeholder="Name"
                        bsSize="lg"
                      />
                    </FormGroup>
                    {this.showErrors('username')}
                    <FormGroup className="mb-3">
                      <Label for="email" className="font-medium">
                        Email
                      </Label>
                      <Input
                        type="email"
                        value={this.state.email}
                        onChange={this.onInputChange}
                        name="email"
                        id="email"
                        placeholder="Email"
                        bsSize="lg"
                      />
                    </FormGroup>
                    {this.showErrors('email')}
                    <FormGroup className="mb-3">
                      <Label for="password" className="font-medium">
                        Password
                      </Label>
                      <Input
                        type="password"
                        value={this.state.password}
                        onChange={this.onInputChange}
                        name="password"
                        id="password"
                        placeholder="Password"
                        bsSize="lg"
                      />
                    </FormGroup>
                    {this.showErrors('password')}
                    <CustomInput
                      type="checkbox"
                      id="exampleCustomCheckbox"
                      label="I agree to all Terms"
                    />
                    <Row className="mb-3 mt-3">
                      <Col xs="12">
                        <Button
                          onClick={this.doRegister}
                          className={`text-uppercase ${
                            this.isFormValid() ? '' : 'disabled'
                            }`}
                          color="primary"
                          size="lg"
                          type="submit"
                          block
                        >
                          Sign Up
                        </Button>
                      </Col>
                    </Row>
                    <div className="text-center">
                      Already have an account?{' '}
                      <a
                        href="/authentication/login2"
                        className="text-info ml-1"
                      >
                        <b>Sign In</b>
                      </a>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default Register2;
