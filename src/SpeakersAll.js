import { Link } from "react-router-dom";
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";

const SpeakersAll = ( ) => {

  const speakers = data.speakers

  return ( 
    <div className="speaker-list-all first-element-spacing">
      
    {speakers.map((speaker) => (
        <Link key={speaker.id} className="speaker-list-all-card" to={ '/speakers/' + speaker.link }>
          <img className="speakerall-img" src={ImageLoader(speaker.img)} alt="" />
          <h4>{ speaker.name }</h4>
          <h4>Word Count: { speaker.word_count} </h4>
        </Link>
    ))}
  </div>
      
   );
}
 
export default SpeakersAll;