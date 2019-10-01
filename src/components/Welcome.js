import React, {Component} from 'react';
import {Link} from '@reach/router';

class Welcome extends Component {
    render(){
        const {userName, logOutUser} = this.props;
        return <div className='text-center'>
            <span className='text-secondary font-weight-bold pl-1'>
                Welcome back, {userName}
            </span>
            <Link to='/login' onClick={e => logOutUser(e)} className='text-primary font-weight-bold pl-1'>Log out</Link>
        </div>
    }
}

export default Welcome;