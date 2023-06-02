import { Link } from 'react-router-dom';
import logo from './images/SC-Book-Of-Mormon-Central-Favicon-Black-32px.png';
import icon from './images/icon.png';
import { useState } from 'react';
import NavBarExpansion from './NavBarExpansion';
import navHamburgerMenu from './images/hamburger-menu.svg';

const Navbar = () => {
  const reactiveHoverItems = ['navbar-speakers-header', 'navbar-toolbox-header', 'nav-hamburger-container']
  let reactiveHoverStatesObject = {};
  const reactiveHoverStates = reactiveHoverItems.forEach((item) => { reactiveHoverStatesObject[item] = false; });
  const [hoverStates, setHoverStates] = useState(reactiveHoverStatesObject);

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
  ];

  const hamburgerExpandableItems = [
    'Home',
    'About',
    'Speakers',
    'FAQ',
    'Toolbox'
  ];

  const hamburgerExpandableLinks = [
    '/',
    '/about',
    '/speakers',
    '/faq',
    'toolbox'
  ];
  
  const toggleIsHovering = (event) => {
    //console.log(event.currentTarget.id);
    const adjHoverStates = {...hoverStates};
    console.log('EVENT.CURRENTTARGET.ID: ' + event.currentTarget.id);
    //console.log('ADJ HOVERING (SHOULD BE SAME AS ORIGINAL IS HOVERING)')
    //console.log(adjHoverStates);
    //console.log('---------------------------------');
    //console.log('ELEMENT TO CHANGE: (SHOULD BE EQUAL TO THE ID OF THE HEADER)');
    //console.log(event.currentTarget.id);
    //console.log('-----------------------------------');
    adjHoverStates[event.currentTarget.id] = !adjHoverStates[event.currentTarget.id];
    //console.log('ADJUSTED HOVERING (SHOULD REFLECT CHANGE IN EXPANDABLE THAT NEEDS TO OCCUR WITH A TRUE VALUE');
    //console.log(adjHoverStates);
    //console.log('-------------------------------------');
    let filteredHovering = {};
    Object.entries(adjHoverStates).forEach(([key, value]) => key === event.currentTarget.id ? filteredHovering[key] = value : filteredHovering[key] = false);
    //console.log('FILTERED HOVERING (SHOULD CONTAIN THE OPPOSITE VALUE AS PREV IN THE CURRENT TARGET ID AND ALL FALSE OTHERWISE');
    //console.log(filteredHovering);
    //console.log('-------------------------------------')
    setHoverStates(filteredHovering);
    console.log(filteredHovering);
  }

  return (  
    <nav className="navbar">
      <div className="nav-title">
        <Link className='logo-container' to="/">
            <img className='logo' src={logo} alt="Book of Mormon Voices Logo"/>
        </Link>
        <Link>
          <img className='icon' src={icon} alt="Book of Mormon Voices Icon"/>
        </Link>
        <Link className='site-title' to="/">
            <h1>BOOK OF MORMON EXPLORER</h1>
        </Link>
      </div>

      <div className="nav-links">
        <Link to="/" className='nav-header'>Home</Link>
        <Link to="/about" className='nav-header'>About</Link>
        <Link to="/speakers" id={reactiveHoverItems[0]} className='nav-header' onMouseEnter={toggleIsHovering} onMouseLeave={toggleIsHovering}>
          Speakers
          <span className="down-carrot"> &#9660;</span>
          {hoverStates[reactiveHoverItems[0]] && (
          <NavBarExpansion className='navbar-expanded-menu' expandableItems={speakersExpandableItems} expandableLinks={speakersExpandableLinks} style={{width: '28vw', height: '380px', top: '60px', left: '-6.8vw'}}></NavBarExpansion>
        )}
        </Link>
        <Link to="/faq" className='nav-header'>FAQ</Link>
        <Link to="/toolbox" id={reactiveHoverItems[1]} className='nav-header' onMouseEnter={toggleIsHovering} onMouseLeave={toggleIsHovering}>
          Toolbox
          <span className="down-carrot"> &#9660;</span>
          {hoverStates[reactiveHoverItems[1]] && (
          <NavBarExpansion className='navbar-expanded-menu' expandableItems={toolboxExpandableItems} expandableLinks={toolboxExpandableLinks} style={{width: '14vw', top: '60px', left: '-7vw'}}></NavBarExpansion>        
        )}
        </Link>
      </div>
      <div id={reactiveHoverItems[2]} className='nav-hamburger-container'  onMouseEnter={toggleIsHovering} onMouseLeave={toggleIsHovering}>
        <svg className='nav-hamburger-menu' viewBox='0 -13 100 100'>
          <image className='hamburger-svg-image' width='100' height='73' viewbox='0 0 100 100' href={navHamburgerMenu}/>
        </svg>
        {hoverStates[reactiveHoverItems[2]] && (
            <NavBarExpansion className='navbar-expanded-menu' expandableItems={hamburgerExpandableItems} expandableLinks={hamburgerExpandableLinks} style={{position: 'absolute', width: '14vw', height: 'auto', top: 'calc(max(min(36px, 3vw), 16px) + 2vw)', right: '0px', zIndex: 9}}></NavBarExpansion>
          )}
      </div>
    </nav>
  );
}
 
export default Navbar;