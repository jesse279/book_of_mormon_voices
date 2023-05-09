import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import NotFound from './NotFound';
import About from './About';
import FAQ from './FAQ';
import SpeakersAll from './SpeakersAll';
import SpeakerDetails from './SpeakerDetails';
import Toolbox from './Toolbox';
import Timeline from './Timeline';
import WordCloud from './WordCloud';
import Connections from './Connections'
import NetworkDiagram from './NetworkDiagram';


function App() {


//   a speaker has
// name
// years
// words
// description
// fact
// img
// circle img

// function to display expanded menu on nav hover
const handleNavHoverMenuExpansion = () => {
  console.log('hovering on nav element!');
}

  return (
    <Router>
        <Navbar className='nav-bar'></Navbar>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/faq" element={<FAQ/>}></Route>
            <Route path="/speakers" element={<SpeakersAll/>}></Route>
            <Route path="/speakers/:speaker_tag" element={<SpeakerDetails/>}></Route>
            <Route path="/toolbox" element={<Toolbox/>}></Route>
            <Route path="/toolbox/timeline" element={<Timeline/>}></Route>
            <Route path="/toolbox/word-cloud" element={<WordCloud/>}></Route>
            <Route path="/toolbox/connections" element={<Connections/>}></Route>
            <Route path="/toolbox/network-diagram" element={<NetworkDiagram/>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
    </Router>
    
  );
}

export default App;
