import './../../../App.scss';
import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='nav__menu'>
                <Link to="/" className='nav__link'>Home</Link>
                <Link to='#' className='nav__link'>News</Link>
                <Link to='/dialogs' className='nav__link'>Messages</Link>
                <Link to='/friends' className='nav__link'>Friends</Link>
                <Link to='#' className='nav__link'>Settings</Link>
            </div>
            <div className='nav__enter'>
                <Link to='#' className='nav__link'>Sign In</Link>
                <Link to='#' className='nav__link'>Sign Up</Link>
            </div>
        </nav>
    );
}

export default Nav;