import SpeakerListShort from "./SpeakerListShort";
import { Link } from "react-router-dom";

const Home = () => {
  return ( 
    <div className="home">
      <div className="banner">
        <h2 className='main-banner-text' style={{ marginRight: '23vw', paddingTop: '2.12862362522vw'}}><em>You've read our words. Pondered our stories.</em></h2>
        <h1 className='main-banner-text' style={{ marginRight: '35vw', paddingTop: '3.44418537486vw' }}><em>Now, hear our voice</em></h1>
        <p className='main-banner-text' style={{ marginRight: '37vw', paddingTop: '2.12862362522vw' }}>
          Through careful research, advanced data analyzation, and 
          compelling stylometry, scholars have discovered a fascinating 
          way to help each voice in the Book of Mormon come to life.
        </p>
      </div>
      <div>
        <SpeakerListShort/>
      </div>
    </div>
   );
}
 
export default Home;