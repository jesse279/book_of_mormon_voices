import SpeakerListShort from "./SpeakerListShort";
import { Link } from "react-router-dom";

const Home = () => {
  return ( 
    <div className="home">
      <div className="banner">
        <div className="banner-image">
          <div className="row">
            <h2>You've read our words. Pondered our stories.</h2>
            <h1>Now, hear our voice</h1>
            <p>
              Through careful research, advanced data analyzation, and 
              compelling stylometry, scholars have discovered a fascinating 
              way to help each voice in the Book of Mormon come to life.
            </p>
          </div>
        </div>
      </div>
      <div>
        <SpeakerListShort/>
      </div>
    </div>
   );
}
 
export default Home;