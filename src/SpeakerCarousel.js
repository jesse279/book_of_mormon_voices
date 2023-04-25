import { Link } from "react-router-dom";
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";
import { useState, useRef, useEffect } from "react";

const SpeakerCarousel = () => {
  let [screenWidth, setScreenWidth] = useState(window.screen.width);

  let inRange = (x, a, b) => { return ((x >= a) && (x <= b)); }

  let speakersInDisplay = 0;
  const calculateSpeakersInDisplay = () => {
    let screenWidth = window.screen.width;
    switch (true) {
      case inRange(screenWidth, 1386, 10000):
        return 8;
      case inRange(screenWidth, 916, 1386):
        return 7;
      case inRange(screenWidth, 600, 916):
        return 6;
      case inRange(screenWidth, 448, 600):
        return 5;
      default:
        return 4;
    }
  }
  speakersInDisplay = calculateSpeakersInDisplay();

  const speakers = data.speakers;
  let [start, setStart] = useState(0);
  let [end, setEnd] = useState(speakersInDisplay);
  let [speakerCarouselPage, setSpeakerCarouselPage] = useState(0);

  const handleResize = () => {
    setScreenWidth(window.screen.width);
    speakersInDisplay = calculateSpeakersInDisplay();
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
              <h2 className='speaker-carousel-label'>{speaker.name}</h2>
            </Link>
          </div>
        ))}
      </div>
      <div className='carousel-btn-container' style={{ display: 'flex', justifyContent: `${start === 0 ? 'flex-end' : ''}` }}>
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
    </div>
  );
};

export default SpeakerCarousel;
