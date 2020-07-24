import React from 'react';
import "./header.css";
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <nav>
                    <ul className="header-list">

                    <Link to={"/login"}><li>Login</li></Link>
                    <Link to={"/register"}><li>Register</li></Link>
                        {/* <li>Login</li>
                        <li>Register</li> */}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;