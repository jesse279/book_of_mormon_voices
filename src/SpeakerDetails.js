import { useParams } from "react-router-dom";
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";
import Analysis_Loader from "./Analysis_Loader";
import Collapsible from './Collapsible.js';


const SpeakerDetails = () => {
  const { speaker_tag } = useParams()
  const speakers = data.speakers;

  const speakerObject = speakers.reduce((acc, curr) => curr.link === speaker_tag ? curr : acc, null);

  return ( 
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

   );
}
 
export default SpeakerDetails;