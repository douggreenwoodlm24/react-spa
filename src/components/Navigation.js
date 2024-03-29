import React, {Component} from 'react';
import {FaUsers} from 'react-icons/fa';
import {Link} from '@reach/router';

class Navigation extends Component {
    render(){
        const {user, logOutUser} = this.props;
        return <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <Link to="/code/reactspa/" className="navbar-brand">
            <FaUsers /> Meeting Log
          </Link>
          <div className="navbar-nav ml-auto">
              { user && (
                  <Link className="nav-item nav-link" to="/code/reactspa/meetings">
                  meetings
                </Link>
              )}
              { !user && (
                  <Link className="nav-item nav-link" to="/code/reactspa/login">
                  log in
                </Link>
              )}
              { !user && (
                  <Link className="nav-item nav-link" to="/code/reactspa/register">
                  register
                </Link>
              )}
              { user && (
                  <Link className="nav-item nav-link" to="/code/reactspa/login" onClick={e => logOutUser(e)}>
                  log out
                </Link>
              )}
          </div>
        </div>
      </nav>
    }
}

export default Navigation;