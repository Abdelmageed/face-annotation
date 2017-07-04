import React, {Component, PropTypes} from 'react';
import * as Bootstrap from 'react-bootstrap';
import {IndexLink} from 'react-router';

import LogoutButton from '../containers/LogoutButton';
import AuthForm from '../containers/AuthForm';

export default class Nav extends Component{
  constructor(props){
    super(props);
  }
  
  render(){
      return (
        <Bootstrap.Navbar>
        <Bootstrap.Navbar.Header>
          <Bootstrap.Navbar.Brand>
            <IndexLink style={{cursor:'pointer'}} to="/">React-Slingshot</IndexLink>
          </Bootstrap.Navbar.Brand>
        </Bootstrap.Navbar.Header>
        
           {(!this.props.authenticated)?
            null :
            
         <Bootstrap.Nav
           pullRight>
            <LogoutButton username={this.props.username} />
           
         </Bootstrap.Nav>
           }
        </Bootstrap.Navbar>
      );
    }
}

Nav.propTypes = {
  authenticated: PropTypes.bool,
  username: PropTypes.string,
  logout: PropTypes.func
};