import { useParams, useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";
import Collapsible from "./Collapsible";
import Analysis_Loader from "./Analysis_Loader";
import NotFound from "./NotFound";

const SpeakerDetails = () => {
  const { speaker_tag } = useParams()
  const speakers = data.speakers;
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



  const speakerObject = speakers.reduce((acc, curr) => curr.link === speaker_tag ? curr : acc, null);

  return ( speakerObject ? 
    <div>
      <div>
        <div className="speakerdetail-imgbox">
          
          <img className="speakerdetail-img" src={ImageLoader(speakerObject.img)}></img>
          
        </div>
        <div className="speaker-content">
          <h3 className="speaker-title">
            { speakerObject.name }
          </h3>
          <p className="speaker-description">
            { speakerObject.description }
          </p>
        </div>
      </div>
      <div className="speaker-fact">
        { speaker.fact_1 && speaker.analysis_1 &&  <Collapsible header_text={speaker.fact_1} body_text={<Analysis_Loader id={speaker.analysis_1}/>}/>}
      </div>
      <div className="speaker-fact">
        { speaker.fact_2 && speaker.analysis_2 && <Collapsible header_text={speaker.fact_2} body_text={<Analysis_Loader id={speaker.analysis_2}/>}/>}
      </div>
      
    </div>
  : <NotFound></NotFound>
   );
}
 
export default SpeakerDetails;