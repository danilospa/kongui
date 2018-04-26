import { dispatch } from '@rematch/core';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apikey: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ apikey: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    dispatch.session.checkApiKey(this.state);
  }

  apiIsReachable() {
    if (this.props.session.reachable === true) {
      return (<div> TRUE </div>);
    }
    return (<div> FALSE </div>);
  }

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to KongUI</h2>
          <p> Please provide your credentials</p>
          <p>Api is reachable? {this.apiIsReachable()}</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="loginForm">
            <TextField
              id="password-input"
              value={this.state.apikey}
              onChange={this.handleChange}
              label="API Key"
              type="text"
              autoComplete="current-password"
              fullWidth
              margin="normal"
            />
            <div>
              <Button variant="raised" type="submit" className="button" color="primary">
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapState = state => (
  { session: state.session }
);

export default connect(mapState, null)(Login);
