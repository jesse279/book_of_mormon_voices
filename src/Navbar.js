import { Link } from 'react-router-dom';
import logo from './images/LogoLockup-cropped.png';
import { useState, useEffect, useRef } from 'react';
import NavBarExpansion from './NavBarExpansion';

const Navbar = () => {
  const [isHovering, setIsHovering] = useState([false, false]);

  const speakersTitleRef = useRef(null);
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
    'Pahoran',
   ];
  const speakersExpandableStyle = {
    position: 'absolute',
    top: speakersTitleRef.current ? speakersTitleRef.current.getBoundingClientRect().bottom + 10 + 'px' : '0',
    left: speakersTitleRef.current ? speakersTitleRef.current.getBoundingClientRect().left : '0'
  };

  const toolboxTitleRef = useRef(null);
  const toolboxExpandableItems = [
    'Timeline',
    'Word Cloud',
    'Connections',
    'Network Diagram',
    'Audio',
   ];
  const toolboxExpandableStyle = {
    position: 'absolute',
    top: toolboxTitleRef.current ? toolboxTitleRef.current.getBoundingClientRect().bottom + 10 + 'px' : '0',
    left: toolboxTitleRef.current ? toolboxTitleRef.current.getBoundingClientRect().left : '0'
  }
  
  const toggleIsHovering = (index) => {
    console.log('toggleIsHovering');
    const newHovering = [...isHovering];
    newHovering[index] = !newHovering[index];
    setIsHovering(newHovering);
  }

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
        <Link to="/speakers" ref={speakersTitleRef} onMouseEnter={() => toggleIsHovering(0)} onMouseLeave={() => toggleIsHovering(0)}>
          Speakers
          <span className="down-carrot"> &#9660;</span>
          <NavBarExpansion className = {isHovering[0] ? 'navbar-expanded-menu' : 'navbar-expanded-menu hidden'} expandableItems={speakersExpandableItems} style={speakersExpandableStyle}></NavBarExpansion>
        </Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/toolbox" ref={toolboxTitleRef} onMouseEnter={() => toggleIsHovering(1)} onMouseLeave={() => toggleIsHovering(1)}>
          Toolbox
          <span className="down-carrot"> &#9660;</span>
          <NavBarExpansion className = {isHovering[1] ? 'navbar-expanded-menu' : 'navbar-expanded-menu hidden'} expandableItems={toolboxExpandableItems} style={toolboxExpandableStyle}></NavBarExpansion>
        </Link>

      </div>
    </nav>

  );
}
 
export default Navbar;