import { useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";


const SpeakerDetails = () => {
  const { speaker_tag } = useParams()
  const speakers = data.speakers
  const history = useNavigate();
  const [speaker, setSpeaker] = useState(speakers[0]);
  
  useEffect(() => {
    const currentSpeaker = speakers.filter((speaker) => {
      return speaker.link === speaker_tag;
    });
    
    if (currentSpeaker.length > 0) {
      setSpeaker(currentSpeaker[0]);

    }
    else {
      history.push('/Home');
    }
    
    // console.log(currentSpeaker);
  }, []);



  return ( 
    <div>
      <div>
        <div className="speakerdetail-imgbox">
          
          <img className="speakerdetail-img" src={ImageLoader(speaker.img)}></img>
          
        </div>
        <div className="speaker-content">
          <h3 className="speaker-title">
            { speaker.name }
          </h3>
          <p className="speaker-description">
            { speaker.description }
          </p>
        </div>
      </div>
      <div className="speaker-fact">
        { speaker.fact }
      </div>
    </div>

   );
}
 
export default SpeakerDetails;