import React from 'react';
import {
  Row,
  Col,
  Button,
  FormGroup,
  Card,
  CardBody,
  CardTitle,
  CustomInput
} from 'reactstrap';

import Input from 'react-validation/build/input';
import Form from 'react-validation/build/form';
import { isEmail } from 'validator';

const required = (value, props) => {
  if (!value || (props.isCheckable && !props.checked)) {
    return <span className="text-danger is-visible">Please Fill the above field</span>;
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return <span className="text-danger is-visible">{value} is not a valid email.</span>;
  }
};

const isEqual = (value, props, components) => {
  const bothUsed =
    components.password[0].isUsed && components.confirm[0].isUsed;
  const bothChanged =
    components.password[0].isChanged && components.confirm[0].isChanged;

  if (
    bothChanged &&
    bothUsed &&
    components.password[0].value !== components.confirm[0].value
  ) {
    return (
      <span className="text-danger is-visible">Passwords are not equal.</span>
    );
  }
};

class FormValidate extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      email: '',
      firstname: '',
      lastname: '',
      username: '',
      password: '',
      confirm: ''
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleClick() {
    this.form.validateAll();
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(event);
  }
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardTitle className="p-3 border-bottom mb-0">
              <i className="mdi mdi-alert-box mr-2" />
              Ordinary Validation
            </CardTitle>
            <CardBody>
              <Form
                ref={c => {
                  this.form = c;
                }}
                onSubmit={this.handleSubmit}
              >
                <FormGroup>
                  <label className="control-label" htmlFor="fname">
                    First name *
                  </label>
                  <div className="mb-2">
                    <Input
                      placeholder="Firstname"
                      type="text"
                      name="firstname"
                      validations={[required]}
                      onChange={this.onChange}
                      className={
                        this.state.firstname === ''
                          ? 'form-control'
                          : 'form-control'
                      }
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <label className="control-label" htmlFor="lname">
                    Last name *
                  </label>
                  <div className="mb-2">
                    <Input
                      placeholder="Lastname"
                      type="text"
                      name="lastname"
                      validations={[required]}
                      onChange={this.onChange}
                      className={
                        this.state.lastname === ''
                          ? 'form-control'
                          : 'form-control'
                      }
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <label className="control-label" htmlFor="uname">
                    Username *
                  </label>
                  <div className="mb-2">
                    <Input
                      placeholder="username"
                      type="text"
                      name="username"
                      validations={[required]}
                      onChange={this.onChange}
                      className={
                        this.state.username === ''
                          ? 'form-control'
                          : 'form-control'
                      }
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <label className="control-label" htmlFor="uemail">
                    Email *
                  </label>

                  <div className="mb-2">
                    <Input
                      placeholder="Email"
                      type="email"
                      name="email"
                      validations={[required, email]}
                      onChange={this.onChange}
                      className={
                        this.state.email === ''
                          ? 'form-control'
                          : 'form-control'
                      }
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <label className="control-label" htmlFor="upassword">
                    Password *
                  </label>
                  <div className="mb-2">
                    <Input
                      placeholder="Password"
                      type="password"
                      name="password"
                      validations={[required, isEqual]}
                      onChange={this.onChange}
                      className={
                        this.state.password === ''
                          ? 'form-control'
                          : 'form-control'
                      }
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <label className="control-label" htmlFor="uconfirm_password">
                    Confirm password *
                  </label>
                  <div className="mb-2">
                    <Input
                      placeholder="Confirm password"
                      type="password"
                      name="confirm"
                      validations={[required, isEqual]}
                      onChange={this.onChange}
                      className={
                        this.state.confirm === ''
                          ? 'form-control'
                          : 'form-control'
                      }
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <div className="checkbox">
                    <CustomInput
                      type="checkbox"
                      validations={[required]}
                      name="policy"
                      id="exampleCustomCheckbox"
                      label="Check Me Out!"
                    />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Button className="button" onClick={this.handleClick}>
                    Sign up
                  </Button>
                </FormGroup>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default FormValidate;
