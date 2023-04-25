import { Link } from "react-router-dom";
import thumbnail from './images/capt_moroni.jpg';

const SpeakerList = ( ) => {
  const speakers = [
    { name: "Captain Moroni", link: "captain_moroni", id: 1, year: "100BC-56BC", word_count: 3067, description: "Most of Captain Moroni’s adult life was spent defending the Nephites against the Lamanites. He was only twenty-five years old when he was appointed chief captain of the Nephite armies, and he was responsible for many astounding victories over the Lamanites due to his revolutionary defensive tactics and striking military strategies. Moroni was also well-read in scripture and prophecy, and his faith and dedication to the Lord inspired him to raise the Title of Liberty. In fact, Moroni received many revelations from the Lord that instructed him how to protect the Nephites from both oppression and tyranny. He not only defended the Nephites against numerous attempted Lamanite conquests, but he also stopped four different rebellions to destroy the freedom of the Nephites. Moroni appears to have died before reaching the age of fifty, which may have been caused by the many wounds he was recorded to have received in battle.", img: "none"},
    { name: "Captain Moroni", link: "captain_moroni", sid: 2, year: "100BC-56BC", word_count: 3067, description: "Most of Captain Moroni’s adult life was spent defending the Nephites against the Lamanites. He was only twenty-five years old when he was appointed chief captain of the Nephite armies, and he was responsible for many astounding victories over the Lamanites due to his revolutionary defensive tactics and striking military strategies. Moroni was also well-read in scripture and prophecy, and his faith and dedication to the Lord inspired him to raise the Title of Liberty. In fact, Moroni received many revelations from the Lord that instructed him how to protect the Nephites from both oppression and tyranny. He not only defended the Nephites against numerous attempted Lamanite conquests, but he also stopped four different rebellions to destroy the freedom of the Nephites. Moroni appears to have died before reaching the age of fifty, which may have been caused by the many wounds he was recorded to have received in battle.", img: "none"}
    
  ];
  

  return ( 
    
    <div className="speaker-list-short">
      
      {speakers.map((speaker) => (
        <div className="blog-preview" key={speaker.id}>
          <Link to={ '/speakers/' + speaker.link }>
            <h2>{ speaker.name }</h2>
            <img src={thumbnail} alt="" />
            <p>Words: {speaker.word_count}</p>
          </Link>



        </div>
      ))}
    </div>
      
   );
}
 
export default SpeakerList;