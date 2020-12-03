import './Header.css';
import {Link} from "react-router-dom";

function Header(){
    return (
        <div className='header-container'>
            <div>
                <Link to='/' className='h1-container'>
                    <h1>Christina Passafaro</h1>
                </Link>
            </div>
            <div className = 'links'>
                <Link to='/aboutme' className='p-links'>
                    <p>About Me</p>
                </Link>
                <p className='p-links'>Projects</p>
                <p><a href='https://www.linkedin.com/in/christina-passafaro-899a63a5/' className='p-links'>LinkedIn</a></p>
                <p><a href='https://github.com/cpassafaro' className='p-links'>Github</a></p>
            </div>
        </div>
    )
}

export default Header;