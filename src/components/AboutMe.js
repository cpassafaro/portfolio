import './AboutMe.css'
import Picture from '../images/dolomites.jpg'

function AboutMe(){
    return(<div>
        <div className='image-container'>
            <div className='about-me'>
                <h1>Hello!</h1>
                <p>Thanks for visiting my webpage!</p>
                <p>My name is Christina Passafaro and I am Fullstack Software Engineer that is experienced in creating and designing interactive and responsive web pages that meet customer needs and expectations.</p>
                <p>My ability to effectively communicate with customers comes from  my experience with communal outreach platforms fortified my strong communication skills and a passion for customer relations. These skills facilitate my excellent communication skills with customers to meet expectations. My technical foundation was built from four year’s extensive computer science experience as an Information Technician in the United States Navy. These combined experiences in computer science and customer relations forged an exemplary foundation for being a web developer that is able to meet customer expectations. </p>
            </div>
            <img src ={Picture} className='triangle'/>
        </div>
        </div>
    )
}

export default AboutMe;