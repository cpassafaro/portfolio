import "./WelcomePage.css";
import Picture from "../images/kayaking.JPG";
import { Link } from "react-router-dom";

function WelcomePage() {
  return (
    <div>
      <div className="container-welcome">
        <img src={Picture} className="image" />
        <div className="writing">
          <p className="hey">Hey ✌🏼</p>
          <p className="hey">I'm Christina Passafaro</p>
          <p className="description">
            I am a highly skilled Fullstack Software Engineer with over 4+ years
            of experience in creating innovative engineering solutions. I have
            successfully designed responsive educational games, managed database
            systems, and set up and maintained application environments. My
            expertise in team collaboration has allowed me to handle and resolve
            conflicts that may arise within repositories and application
            environments. I also spent 4 years in the Navy as an information
            technician working on ship-to-shore network communications. This
            experience forged my diverse technical skills from software
            engineering to server-side troubleshooting. Furthermore, my
            extensive experience in communal outreach positions with the Forest
            Service and local county government has further honed my
            communication skills. With my concise communication and technical
            expertise, I am confident that I would be an asset to any team.
          </p>
          <div class="container-tools">
            <p>
              <span>Languages: </span>Javascript, Python, PHP
            </p>
            <p>
              <span>Frameworks: </span>Vue, Angular, React, Laravel,
              Node.js, Express
            </p>
            <p>Reach Out at: christinapassafaro@gmail.com</p>
          </div>
          <div className="button-area">
            <button>
              <a
                href="https://docs.google.com/document/d/1iobIATNAUMyjslP0g1aDJRg8yGrmTECEfmX9ie_xt1w/edit?usp=sharing"
                target="_blank"
                className="resume"
              >
                Resume
              </a>
            </button>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
