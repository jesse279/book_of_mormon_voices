import SpeakerListShort from "./SpeakerListShort";
import { Link } from "react-router-dom";

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

  const bannerTextLeftMargin = '5.57281vw';
  const bannerBulletSymbol = '>'

  return ( 
    <div className="home">
      <div className="banner">
        <h2 className='main-banner-text' style={{ marginLeft: bannerTextLeftMargin, marginRight: '23vw', paddingTop: '3.44418537486vw'}}><em>You've read our words. Pondered our stories.</em></h2>
        <h1 className='main-banner-text' style={{ marginLeft: bannerTextLeftMargin, marginRight: '35vw', paddingTop: '3.44418537486vw' }}><em>Now, hear our voice</em></h1>
        <p className='main-banner-text' style={{ marginLeft: bannerTextLeftMargin, marginRight: '43vw', paddingTop: '2.12862362522vw' }}>
          Through careful research, advanced data analyzation, and 
          compelling stylometry, scholars have discovered a fascinating 
          way to help each voice in the Book of Mormon come to life.
        </p>
        <ol className='main-banner-text' style={{ marginLeft: bannerTextLeftMargin, paddingTop: '3.44418537486vw' }}>
          {links.map(([text, url], index) => (
            <Link to={url}>
              <h2 key={index} style={{ paddingTop: '0.25vw', paddingBottom: '0.25vw'}}>{bannerBulletSymbol} {text}</h2>
            </Link>
          ))}
        </ol>
      </div>
      <div>
        <SpeakerListShort/>
      </div>
    </div>
   );
}
 
export default Home;