import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Error extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }
 
  render() {
   
    return (
      <div class="container">
        <hr/>
        <h1 align="center" color="red">NOT FOUND ERROR</h1>
        <hr/>
      </div>
    );
  }
}

export default Error;
