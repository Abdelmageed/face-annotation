import React, {Component} from 'react';

import AuthForm from '../containers/AuthForm';

export default class LoginPage extends Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {

    return (
  
      <div className="container">
        <h3>Signup</h3>
        <AuthForm/>
      </div>
    );
  }
}