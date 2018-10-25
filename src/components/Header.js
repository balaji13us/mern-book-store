import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { withRouter } from 'react-router'
import { BrowserRouter, Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../../node_modules/bootstrap/js/';


class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  logout = () => {
    localStorage.removeItem('jwtToken');

    this.props.history.push("/login");
    //window.location.reload();
  }

  login = () => {
    localStorage.removeItem('jwtToken');
    this.props.history.push("/login");
  }
  home = () => {
    this.props.history.push("/");
  }
  render() {

    return (
      <BrowserRouter>
        <div class="container">
          <div class="panel-title" >
            <div>
              <h1 align="center">Online Book Store</h1>
            </div>
            <div>
              <span align="left" class="glyphicon glyphicon-home" onClick={this.home}>Home</span>

              <h3 align="right">
                <span class="glyphicon glyphicon-user"></span>
                {localStorage.getItem('jwtToken') &&
                  <div>
                    <a>
                      <span class="glyphicon glyphicon-log-out" onClick={this.logout}>Logout</span>
                    </a>
                  </div>
                }
                {!localStorage.getItem('jwtToken') &&
                  <div>
                    <a>
                      <span class="glyphicon glyphicon-log-in" onClick={this.login}>Login</span>
                    </a>
                  </div>
                } 
              </h3>
            </div>

          </div>
          <hr />
        </div>

      </BrowserRouter>
    );
  }
}

//export default Header;
export default withRouter(Header);
