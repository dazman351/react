import './../../../App.scss';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className='nav__menu'>
                <a href='/' className='nav__link'>Home</a>
                <a href='#' className='nav__link'>News</a>
                <a href='/dialogs' className='nav__link'>Messages</a>
                <a href='#' className='nav__link'>Groups</a>
                <a href='#' className='nav__link'>Settings</a>
            </div>
            <div className='nav__enter'>
                <a href='#' className='nav__link'>Sign In</a>
                <a href='#' className='nav__link'>Sign Up</a>
            </div>
        </nav>
    );
}

export default Nav;