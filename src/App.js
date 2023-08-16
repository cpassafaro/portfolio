import "./App.css";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import { Route, Link } from "react-router-dom";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <nav>
        <Link exact to="/"></Link>
        <Link to="/projects"></Link>
      </nav>
      <main>
        <Header />
        <Route exact path="/" component={WelcomePage} />
        <Route path="/projects" component={Projects} />
      </main>
    </div>
  );
}

export default App;
