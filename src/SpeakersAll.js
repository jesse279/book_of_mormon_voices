import { Link } from "react-router-dom";
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";

const SpeakersAll = ( ) => {

  const speakers = data.speakers

  return ( 
    <div className="speaker-list-all">
      
    {speakers.map((speaker) => (
      <div className="speaker-preview-2" key={speaker.id}>
        <Link to={ '/speakers/' + speaker.link }>
          
          <img className="speakerall-img"   src={ImageLoader(speaker.img)} alt="" />
          <div className="speaker-name-wordcount">
            <h4>{ speaker.name }</h4>
            <h4>Word Count: { speaker.word_count} </h4>
          </div>
        </Link>



      </div>
    ))}
  </div>
      
   );
}
 
export default SpeakersAll;