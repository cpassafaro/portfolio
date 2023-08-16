import "./Header.css";
import Projects from "./Projects";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div>
        <Link to="/" className="h1-container">
          <h1>
            Christina Passafaro<span class="txt-about-me"> | About Me</span>
          </h1>
        </Link>
      </div>
      <div className="links">
        <Link to="/projects" className="p-links">
          <p>Projects</p>
        </Link>
        <p>
          <a
            href="https://www.linkedin.com/in/christina-passafaro-899a63a5/"
            target="_blank"
            className="p-links"
          >
            LinkedIn
          </a>
        </p>
        <p>
          <a
            href="https://github.com/cpassafaro"
            target="_blank"
            className="p-links"
          >
            Github
          </a>
        </p>
      </div>
    </div>
  );
}

export default Header;
