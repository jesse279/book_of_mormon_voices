import { Link } from 'react-router-dom';
import logo from './images/SC-Book-Of-Mormon-Central-Favicon-Black-32px.png';
import icon from './images/icon.png';
import { useState } from 'react';
import NavBarExpansion from './NavBarExpansion';
import navHamburgerMenu from './images/hamburger-menu.svg';

const Navbar = () => {
  const [isHovering, setIsHovering] = useState([false, false]);

  const speakersExpandableItems = [
    'Abinadi', 
    'Alma the Younger', 
    'Ammon', 
    'Amulek', 
    'Benjamin', 
    'Captain Moroni', 
    'Giddianhi',
    'Helaman',
    'Jacob',
    'Korihor',
    'Lehi',
    'Mormon',
    'Moroni, Son of Mormon',
    'Mosiah',
    'Nephi, Son of Helaman',
    'Nephi, Son of Lehi',
    'Pahoran'
   ];

   const speakersExpandableLinks = speakersExpandableItems.map(speakerExpandableItem => {
    return `speakers/${speakerExpandableItem.toLowerCase().replace(/[\W_]+/g, '-')}`;
   });

  const toolboxExpandableItems = [
    'Timeline',
    'Word Cloud',
    'Connections',
    'Network Diagram'
   ];

  const toolboxExpandableLinks = [
    '/toolbox/timeline',
    '/toolbox/word-cloud',
    '/toolbox/connections',
    '/toolbox/network-diagram'
  ]
  
  const toggleIsHovering = (index) => {
    const newHovering = [...isHovering];
    newHovering[index] = !newHovering[index];
    setIsHovering(newHovering);
  }

  return (  
    <nav className="navbar">
      <div className="nav-title">
        <Link to="/">
            <img className='logo' src={logo} alt="Book of Mormon Voices Logo"/>
        </Link>
        <Link>
          <img className='icon' src={icon} alt="Book of Mormon Voices Icon"/>
        </Link>
        <Link to="/">
            <h1>BOOK OF MORMON EXPLORER</h1>
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/" className='nav-header'>Home</Link>
        <Link to="/about" className='nav-header'>About</Link>
        <Link to="/speakers" className='nav-header' onMouseEnter={() => toggleIsHovering(0)} onMouseLeave={() => toggleIsHovering(0)}>
          Speakers
          <span className="down-carrot"> &#9660;</span>
          {isHovering[0] && (
          <NavBarExpansion className='navbar-expanded-menu' expandableItems={speakersExpandableItems} expandableLinks={speakersExpandableLinks} style={{width: '14vw'}}></NavBarExpansion>
        )}
        </Link>
        <Link to="/faq" className='nav-header'>FAQ</Link>
        <Link to="/toolbox" className='nav-header' onMouseEnter={() => toggleIsHovering(1)} onMouseLeave={() => toggleIsHovering(1)}>
          Toolbox
          <span className="down-carrot"> &#9660;</span>
          {isHovering[1] && (
          <NavBarExpansion className='navbar-expanded-menu' expandableItems={toolboxExpandableItems} expandableLinks={toolboxExpandableLinks}></NavBarExpansion>        
        )}
        </Link>
      </div>
      <svg className='nav-hamburger-menu'>
        <image className='hamburger-svg' href={navHamburgerMenu}/>
      </svg>
    </nav>
  );
}
 
export default Navbar;