import { Link } from 'react-router-dom';
import logo from './images/LogoLockup-cropped.png';




const Navbar = () => {
  return (  
    <nav className="navbar">
      <div className="title">
        <Link to="/">
          <h2>Book of Mormon Voices</h2>
        </Link>
        
      </div>
      
      
      <div className="header-item logo-main">
        <Link to="/">
          <img src={logo} alt="Book of Mormon Voices Logo"/>
        </Link>
          
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/speakers">Speakers</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/toolbox">Toolbox</Link>

      </div>
    </nav>

  );
}
 
export default Navbar;