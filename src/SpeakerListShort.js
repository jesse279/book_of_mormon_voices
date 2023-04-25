import { Link } from "react-router-dom";
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";
import { useState, useRef, useEffect } from "react";

const SpeakerListShort = () => {
  let [screenWidth, setScreenWidth] = useState(window.screen.width);

  let speakersInDisplay = Math.floor(5.9 * (Math.log(0.005 * screenWidth)/Math.log(10)) + 2.5);

  const speakers = data.speakers;
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(speakersInDisplay);

  const handleResize = () => {
    setScreenWidth(window.screen.width);
    speakersInDisplay = Math.floor(5.9 * (Math.log(0.005 * screenWidth)/Math.log(10)) + 2.5);
    setEnd(speakersInDisplay);
  }

  window.addEventListener('resize', handleResize);

  const handlePrev = () => {
    setStart(start - speakersInDisplay);
    setEnd(end - speakersInDisplay);
  };

  const handleNext = () => {
    setStart(start + speakersInDisplay);
    setEnd(end + speakersInDisplay);
  };

  return (
    <div className="speaker-list-short">
      <div className="carousel-container">
        {speakers.slice(start, end).map((speaker) => (
          <div className="speaker-card" key={speaker.id} style={{ width: `calc(83vw/${speakersInDisplay}.2)`, margin: '0.6vw'}}>
            <Link to={"/speakers/" + speaker.link}>
              <img
                src={ImageLoader(speaker.img)}
                alt=""
                style={{ width: '100%' }}
              />
              <h2 style={{ width: "100%", whiteSpace: "normal", wordWrap: "break-word" }}>{speaker.name}</h2>
            </Link>
          </div>
        ))}
      </div>
      {start > 0 && (
        <button className="carousel-btn" onClick={handlePrev}>
          Prev
        </button>
      )}
      {end < speakers.length && (
        <button className="carousel-btn" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
};

export default SpeakerListShort;
