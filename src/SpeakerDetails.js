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
        { speakerObject.fact_1 && speakerObject.analysis_1 &&  <Collapsible header_text={speakerObject.fact_1} body_text={<Analysis_Loader id={speakerObject.analysis_1}/>}/>}
      </div>
      <div className="speaker-fact">
        { speakerObject.fact_2 && speakerObject.analysis_2 && <Collapsible header_text={speakerObject.fact_2} body_text={<Analysis_Loader id={speakerObject.analysis_2}/>}/>}
      </div>
      
    </div>
  : <NotFound></NotFound>
   );
}
 
export default SpeakerDetails;