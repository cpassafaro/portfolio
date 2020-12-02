import './Header.css';
import {Link} from "react-router-dom";

function Header(){
    return (
        <div className='header-container'>
            <div className = 'h1-container'>
                <Link to='/' className='h1-container'>
                    <h1>Christina Passafaro</h1>
                </Link>
            </div>
            <div className = 'links'>
                <Link to='/aboutme' className='p-links'>
                    <p className='p-links'>About Me</p>
                </Link>
                <p className='p-links'>Projects</p>
                <p className='p-links'>LinkedIn</p>
                <p className='p-links'>Github</p>
            </div>
        </div>
    )
}

export default Header;