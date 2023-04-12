import { Link } from "react-router-dom";
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";
import { useState, useRef, useEffect } from "react";

const SpeakerListShort = () => {
  const speakers = data.speakers;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);

  const handlePrev = () => {
    setStart(start - 8);
    setEnd(end - 8);
  };

  const handleNext = () => {
    setStart(start + 8);
    setEnd(end + 8);
  };

  return (
    <div className="speaker-list-short">
      <div className="carousel-container">
        {speakers.slice(start, end).map((speaker) => (
          <div className="speaker-card" key={speaker.id} style={{ width: 'calc(80vw/8)', margin: '0.6vw'}}>
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
