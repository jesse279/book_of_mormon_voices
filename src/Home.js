import SpeakerCarousel from "./SpeakerCarousel";
import { Link } from "react-router-dom";
import homeImage2 from './images/homepage_images/home-image-2.jpg';

const Home = () => {

  const links = 
  [  
    ['Speakers', '/speakers'],
    ['Timeline', '/toolbox/timeline'],
    ['Word Cloud', '/toolbox/word-cloud'],
    ['Connections', '/toolbox/connections'],
    ['Network Diagram', '/toolbox/network-diagram'],
    ['Audio', '/toolbox/audio']
];

  const defaultIndent = '4.3810714734vw';
  const bannerBulletSymbol = '>'

  return ( 
    <>
      <div className="banner" style={{ marginBottom: '0.2vw' }}>
        <h1 className='first-element-spacing main-text' style={{ marginRight: '30vw', lineHeight: '0.55' }}><em>You've read our words. Pondered our stories.</em></h1>
        <h1 className='main-banner-text main-text' style={{ marginRight: '35vw', lineHeight: '0.55' }}><em>Now, hear our voice</em></h1>
        <p className='main-banner-text main-text'>
          Through careful research, advanced data analyzation, and 
          compelling stylometry, scholars have discovered a fascinating 
          way to help each voice in the Book of Mormon come to life.
        </p>
        <p className='backup-banner-text main-banner-text'>
          Helping each voice in the Book of Mormon come to life through research and data analysis
        </p>
        <ol className='main-banner-text main-text' style={{paddingTop: '1.31556174964vw'}}>
          {links.map(([text, url], index) => (
            <Link to={url} key={index}>
              <h2 className='main-banner-link'>{bannerBulletSymbol} {text}</h2>
            </Link>
          ))}
        </ol>
      </div>
      <SpeakerCarousel/>
      <hr style={{ marginTop: '2vw' }}></hr>
      <h2 style={{ textAlign: 'center', paddingTop: '2vw', paddingBottom: '2.5vw' }}><em>Experience the Book of Mormon</em></h2>
      <h1 style={{ textAlign: 'center', fontSize: '3vw', fontWeight: '100' }}><em>like you never have before.</em></h1>
      <div style={{margin: defaultIndent, display: 'flex', flexDirection: 'row', justifyItems: 'space-around'}}>
        <div id='home-size-image-container'>
          <img id='home-side-image' src={homeImage2} style={{ width: `calc(calc(51vw - ${parseFloat(defaultIndent)}vw))`, height: '100%', marginRight: '2.5vw'}}></img>
        </div>
        <div>
          <p style={{ width: `calc(calc(50vw - ${parseFloat(defaultIndent)}vw))`, padding: '1vw', boxSizing: 'border-box' }}>Did you know there are 106 individuals that spoke in the Book of Mormon, with 24 primary voices? Each one unique, each one a real living, breathing human being.</p>
          <p style={{ width: `calc(calc(50vw - ${parseFloat(defaultIndent)}vw))`, padding: '1vw', boxSizing: 'border-box' }}>Analyzing the data of their word and language patterns brings these speakers to life in an unprecedented way.</p>
          <p style={{ width: `calc(calc(50vw - ${parseFloat(defaultIndent)}vw))`, padding: '1vw', boxSizing: 'border-box' }}>Now, you get a chance to be part of this “getting to know you” exploration of people in the Book of Mormon. Come, listen and discover their captivating, untold stories.</p>
          <button style={{ width: 'auto', padding: '1vw', boxSizing: 'border-box', marginLeft: '1vw', marginTop: '1vw', backgroundColor: 'gold', borderRadius: '2vw', borderWidth: '0px' }}>
            <Link to="/Speakers">
              <p style={{ fontSize: 'max(1.1vw, 10px)' }}>LISTEN AND DISCOVER {bannerBulletSymbol}</p>
            </Link>
            </button>
        </div>
      </div>
    </>
   );
}
 
export default Home;