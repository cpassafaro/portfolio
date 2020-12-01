import './App.css';
import Header from './components/Header'
import WelcomePage from './components/WelcomePage'

function App() {
  return (
    <div>
      <Header/>
      <div className = 'app'>
        <WelcomePage/>
      </div>
    </div>
  );
}

export default App;
