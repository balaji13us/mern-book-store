import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Footer extends Component {

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
        <h4 align="center">@Copyrights 2018</h4>
        <hr/>
      </div>
    );
  }
}

export default Footer;
