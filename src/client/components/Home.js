import React, {Component, PropTypes} from 'react';

import Annotator from '../containers/Annotator';

export default class Home extends Component {
  
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div>
        <h3>Hello {this.props.username}</h3>
        <Annotator />
      </div>
    );
  }
}