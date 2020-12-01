import './Header.css';

function Header(){
    return (
        <div className='header-container'>
            <div className = 'h1-container'>
                <h1>Christina Passafaro</h1>
            </div>
            <div className = 'links'>
                <p>About Me</p>
                <p>LinkedIn</p>
                <p>Github</p>
            </div>
        </div>
    )
}

export default Header;