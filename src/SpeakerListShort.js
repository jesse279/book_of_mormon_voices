import { Link } from "react-router-dom";
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";

const SpeakerListShort = ( ) => {

  const speakers = data.speakers

  return ( 
    
    <div className="speaker-list-short">
      
      {speakers.map((speaker) => (
        <div className="blog-preview" key={speaker.id}>
          <Link to={ '/speakers/' + speaker.link }>
            <h2>{ speaker.name }</h2>
            <img src={ImageLoader(speaker.img)} alt="" />
          </Link>



        </div>
      ))}
    </div>
      
   );
}
 
export default SpeakerListShort;