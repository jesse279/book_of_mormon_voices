import { Link } from "react-router-dom";
import data from "./speaker_data.json";
import ImageLoader from "./ImageLoader";
import { useState, useRef, useEffect } from "react";

const SpeakerCarousel = () => {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);

  let inRange = (x, a, b) => { return ((x >= a) && (x <= b)); }

  let speakersInDisplay = 0;
  const calculateSpeakersInDisplay = () => {
    let screenWidth = window.innerWidth;
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
    setWindowWidth(window.innerWidth);
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

  let onLastSpeaker = (end === (Math.ceil(data.speakers.length / speakersInDisplay) * speakersInDisplay));

  return (
    <div className="speaker-list-short">
      <div className="carousel-container">
        {speakers.slice(start, end).map((speaker) => (
          <div className="speaker-card" key={speaker.id} style={{ width: `calc(calc(100% - calc(1.2% * ${speakersInDisplay}))/${speakersInDisplay})`, margin: '0.6%'}}>
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
      <div className='carousel-btn-container' style={{ display: 'flex', justifyContent: `${onLastSpeaker ? 'flex-start' : 'flex-end'}` }}>
        {start > 0 && (
          <button className="carousel-btn" onClick={handlePrev} style={{ marginLeft: `${onLastSpeaker ? '10%' : ''}`, height: '11.25vw' }}>&lt;</button>
        )}
        {end < speakers.length && (
          <button className="carousel-btn" onClick={handleNext} style={{ height: '11.25vw' }}>&gt;</button>
        )}
      </div>
    </div>
  );
};

export default SpeakerCarousel;
