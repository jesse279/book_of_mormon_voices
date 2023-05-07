import { Link } from "react-router-dom";
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";

const SpeakersAll = ( ) => {

  const speakers = data.speakers

  return ( 
    <div className="speaker-list-all">
      
    {speakers.map((speaker) => (
        <Link key={speaker.id} className="speaker-list-all-card" to={ '/speakers/' + speaker.link }>
          <img className="speakerall-img" src={ImageLoader(speaker.img)} alt="" />
          <h5>{ speaker.name }</h5>
          <h5>Word Count: { speaker.word_count} </h5>
        </Link>
    ))}
  </div>
      
   );
}
 
export default SpeakersAll;