import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import React, { Component } from 'react';
import './login.css';

export default class Login extends Component {
  state={}
  render() {
    return (
      <div>
        <h2>Welcome to KongUI</h2>
        <p> Please provide your credentials</p>
        <div className="loginForm">
          <TextField
            id="password-input"
            label="Username"
            type="text"
            fullWidth
            autoComplete="current-password"
            margin="normal"
          />
          <TextField
            id="password-input"
            label="API Key"
            type="text"
            autoComplete="current-password"
            fullWidth
            margin="normal"
          />
          <TextField
            id="password-input"
            label="Kong API Loopback"
            type="text"
            autoComplete="current-password"
            fullWidth
            margin="normal"
          />
          <div>
            <Button variant="raised" className="button" color="primary">
        Login
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
