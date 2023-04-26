import IpponSquare from './IpponSquare.svg';
import IpponTextLogo from './IpponText.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={IpponSquare} className="Square-logo-spin" alt="IpponSquare" />
          <br></br>
          <br></br>
        <img src={IpponTextLogo} className="Ippon-logo" alt="IpponWording" />
      </header>
    </div>
  );
}

export default App;
