import './WelcomePage.css';
import Picture from '../images/kayaking.JPG';
import {Link} from "react-router-dom";

function WelcomePage(){
    return(
        <div className='welcome-container'>
            <img src={Picture} className ='image'/>
            <div className='writing'>
                <p className='hey'>Hey ✌🏼</p>
                <p className='hey'>I'm Christina Passafaro</p>
                <p className='description'>A Fullstack Software Engineer with a creative and systematic approach to problem solving is strongly influenced through my experience as an information technician in the Navy for four years and my experience as a social media strategist for my local government.</p>
                <p className='description'>Reach Out at: christinapassafaro@gmail.com</p>
                <div className='button-area'>
                    <Link to='/aboutme'>
                        <button>Learn More</button>
                    </Link>
                    <button><a href='https://docs.google.com/document/d/1iobIATNAUMyjslP0g1aDJRg8yGrmTECEfmX9ie_xt1w/edit?usp=sharing' target="_blank" className='resume'>Resume</a></button>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage;