import { dispatch } from '@rematch/core';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey: '',
    };
  }

  handleChange = (event) => {
    this.setState({ apiKey: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    dispatch.session.checkApiKey(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to KongUI</h2>
          <p> Please provide your credentials</p>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="loginForm">
            <TextField
              id="apiKey"
              value={this.state.apiKey}
              onChange={this.handleChange}
              label="API Key"
              type="text"
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
