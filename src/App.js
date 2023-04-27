import IpponSquare from './IpponSquare.svg';
import IpponTextLogo from './IpponText.svg';
import github from './github.svg';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';
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



        <footer className="App-footer">
            <a href={"https://www.instagram.com/ippon_technologies"}><img src={instagram} alt={"Ippon Instagram"}/></a>
            <p>&nbsp;</p>
            <a href={"https://github.com/ippontech"}><img src={github} alt={"Ippon GitHub"}/></a>
            <p>&nbsp;</p>
            <a href={"https://www.linkedin.com/company/ippon-technology"}><img src={linkedin} alt={"Ippon Linkedin"}/></a>
        </footer>


    </div>

  );
}

export default App;
