import { Link } from "react-router-dom";
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";
import { useState, useRef, useEffect } from "react";

const SpeakerListShort = () => {
  let [screenWidth, setScreenWidth] = useState(window.screen.width);

  let speakersInDisplay = Math.floor(6 * (Math.log(screenWidth)/Math.log(10)) - 10.6 - 0.0002 * screenWidth);

  const speakers = data.speakers;
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(speakersInDisplay);
  let [speakerCarouselPage, setSpeakerCarouselPage] = useState(0);

  const handleResize = () => {
    setScreenWidth(window.screen.width);
    speakersInDisplay = Math.floor(6 * (Math.log(screenWidth)/Math.log(10)) - 10.6 - 0.0002 * screenWidth);
    setStart(0);
    setEnd(speakersInDisplay);
  }

  window.addEventListener('resize', handleResize);

  const handlePrev = () => {
    setStart(start - speakersInDisplay);
    setEnd(end - speakersInDisplay);
    setSpeakerCarouselPage(speakerCarouselPage - 1);
  };

  const handleNext = () => {
    setStart(start + speakersInDisplay);
    setEnd(end + speakersInDisplay);
    setSpeakerCarouselPage(speakerCarouselPage + 1);
  };

  return (
    <div className="speaker-list-short">
      <div className="carousel-container">
        {speakers.slice(start, end).map((speaker) => (
          <div className="speaker-card" key={speaker.id} style={{ width: `calc(100%/${speakersInDisplay})`, margin: '0.6vw'}}>
            <Link to={"/speakers/" + speaker.link}>
              <img
                src={ImageLoader(speaker.img)}
                alt=""
                style={{ width: '100%' }}
              />
              <h2 class='speaker-carousel-label'>{speaker.name}</h2>
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
