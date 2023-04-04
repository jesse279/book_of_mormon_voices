import { Link } from 'react-router-dom';
import logo from './images/SC-Book-Of-Mormon-Central-Favicon-Black-32px.png';
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
    top: speakersTitleRef.current ? speakersTitleRef.current.getBoundingClientRect().bottom : '0',
    left: speakersTitleRef.current ? speakersTitleRef.current.getBoundingClientRect().left : '0',
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
    top: toolboxTitleRef.current ? toolboxTitleRef.current.getBoundingClientRect().bottom : '0',
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
      <div className="header-item logo-main flex-wrap">
        <Link to="/">
          <img className='logo' src={logo} alt="Book of Mormon Voices Logo"/>
        </Link>
        <h1>Book of Mormon Explorer</h1>
      </div>

      <div className="links">
        <Link to="/" className='nav-header'>Home</Link>
        <Link to="/about" className='nav-header'>About</Link>
        <Link to="/speakers" className='nav-header' ref={speakersTitleRef} onMouseEnter={() => toggleIsHovering(0)} onMouseLeave={() => toggleIsHovering(0)}>
          Speakers
          <span className="down-carrot"> &#9660;</span>
          {isHovering[0] && (
            <NavBarExpansion className = 'navbar-expanded-menu nav-header' expandableItems={speakersExpandableItems} style={speakersExpandableStyle}></NavBarExpansion>
          )}
        </Link>
        <Link to="/faq" className='nav-header'>FAQ</Link>
        <Link to="/toolbox" className='nav-header' ref={toolboxTitleRef} onMouseEnter={() => toggleIsHovering(1)} onMouseLeave={() => toggleIsHovering(1)}>
          Toolbox
          <span className="down-carrot nav-header"> &#9660;</span>
          {isHovering[1] && (
              <NavBarExpansion className = 'navbar-expanded-menu nav-header' expandableItems={toolboxExpandableItems} style={toolboxExpandableStyle}></NavBarExpansion>        
          )}
        </Link>

      </div>
    </nav>

  );
}
 
export default Navbar;