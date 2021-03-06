import React from 'react';
import {Link} from 'react-router-dom'
import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg';


const Header = () => (
    <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
        <div className='options'>
            <Link className='option' to='/login'>
                LOGIN
            </Link>
            <Link className='option' to='/signup'>
               SIGNUP
             </Link>
        </div>


        </div>
)
        

    
    

export default Header;