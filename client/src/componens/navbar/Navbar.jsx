import React, {useContext} from 'react';

import './navbar.css'
import { AuthContext } from './../../context/AuthContext';

const Navbar = () => {
    const { logout, isLogin } = useContext(AuthContext);
    return (
        <nav>
            <div className="nav-wrapper navbar black">
                <a href="/" className="brand-logo">Aleska Interprice</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        {
                        isLogin ? 
                        <a href="/" onClick={logout}>Выйти</a>   :
                        <a href="/">Войти</a>
                        }
                    </li>
                    {isLogin}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
