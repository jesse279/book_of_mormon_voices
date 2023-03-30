import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import NotFound from './NotFound';
import About from './About';
import FAQ from './FAQ';


function App() {


//   a speaker has
// name
// years
// words
// description
// fact
// img
// circle img



  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/faq" element={<FAQ/>}></Route>
            <Route path="/speakers" element={<Home></Home>}></Route>
            <Route path="/speakers/:name" element={<Home></Home>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>

      </div>
    </Router>
    
  );
}

export default App;
