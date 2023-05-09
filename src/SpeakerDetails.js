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
    <article className='speaker-details'>
      <img className="speaker-detail-img" src={ImageLoader(speakerObject.img)}></img>
      <h3 style={{marginBottom: '1.03423086758vw'}}>
        { speakerObject.name }
      </h3>
      <p className="speaker-description" style={{marginBottom: '1.03423086758vw'}}>
        { speakerObject.description }
      </p>
      { speakerObject.fact_1 && speakerObject.analysis_1 &&  <Collapsible className='collapsible' header_text={speakerObject.fact_1} body_text={<Analysis_Loader id={speakerObject.analysis_1}/>}/>}
      { speakerObject.fact_2 && speakerObject.analysis_2 && <Collapsible className='collapsible' header_text={speakerObject.fact_2} body_text={<Analysis_Loader id={speakerObject.analysis_2}/>}/>}
    </article>
  : <NotFound></NotFound>
   );
}
 
export default SpeakerDetails;