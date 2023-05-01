import IpponSquare from './IpponSquare.svg';
import IpponTextLogo from './IpponText.svg';
import github from './github.svg';
import instagram from './instagram.svg';
import linkedin from './linkedin.svg';
import facebook from './facebook.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={IpponSquare} className="Square-logo-spin" alt="IpponSquare"/>
          <br></br>
          <br></br>
          <a href="https://us.ippon.tech/"><img src={IpponTextLogo} className="Ippon-logo" alt="IpponWording"/></a>
      </header>



        <footer className="App-footer">
            <a href={"https://www.instagram.com/ippon_technologies"}><img src={instagram} alt={"Ippon Instagram"}/></a>
            <p>&nbsp;</p>
            <a href={"https://github.com/ippontech"}><img src={github} alt={"Ippon GitHub"}/></a>
            <p>&nbsp;</p>
            <a href={"https://www.linkedin.com/company/ippon-technology"}><img src={linkedin} alt={"Ippon Linkedin"}/></a>
            <p>&nbsp;</p>
            <a href={"https://www.facebook.com/IpponUSA"}><img src={facebook} alt={"Ippon Facebook"}/></a>
        </footer>


    </div>

  );
}

export default App;
