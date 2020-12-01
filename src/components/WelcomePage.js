import './WelcomePage.css';
import Picture from '../images/kayaking.JPG'

function WelcomePage(){
    return(
        <div className='welcome-container'>
            <img src={Picture} className ='image'/>
            <div>
                <p>Hey ✌🏼 I'm Christina Passafaro</p>
                <p>A Fullstack Software Engineer with a creative and systematic approach to problem solving is strongly influenced through my experience as an information technician in the Navy for four years and my experience as a social media strategist for my local government.</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default WelcomePage;