import Abinadi from "./images/Abinadi.jpg"
import Alma_the_Younger from "./images/Alma the Younger.jpg"
import Ammon from "./images/Ammon.jpg"
import Amulek from "./images/Amulek.jpg"
import Benjamin from "./images/Benjamin.jpg"
import Captain_Moroni from "./images/Captain Moroni.jpg"
import Giddianhi from "./images/Giddianhi.jpg"
import Helaman from "./images/Helaman.jpg"
import Jacob from "./images/Jacob.jpg"
import Korihor from "./images/Korihor.jpg"
import Lehi from "./images/Lehi.jpg"
import Mormon from "./images/Mormon.jpg"
import Moroni from "./images/Moroni.jpg"
import Mosiah from "./images/Mosiah.jpg"
import Nephi_son_of_Helaman from "./images/Nephi Son of Helaman.jpg"
import Nephi from "./images/Nephi.jpg"
import Pahoran from "./images/Pahoran.jpg"



const ImageLoader = name => {
  if (name === null) {
    return "none";
  }

  const networkArray = {
    './images/Abinadi.jpg': Abinadi,
    './images/Alma the Younger.jpg': Alma_the_Younger,
    './images/Ammon.jpg': Ammon,
    './images/Amulek.jpg': Amulek,
    './images/Benjamin.jpg': Benjamin,
    './images/Captain Moroni.jpg': Captain_Moroni,
    './images/Giddianhi.jpg': Giddianhi,
    './images/Helaman.jpg': Helaman,
    './images/Jacob.jpg': Jacob,
    './images/Korihor.jpg': Korihor,
    './images/Lehi.jpg': Lehi,
    './images/Mormon.jpg': Mormon,
    './images/Moroni.jpg': Moroni,
    './images/Mosiah.jpg': Mosiah,
    './images/Nephi Son of Helaman.jpg': Nephi_son_of_Helaman,
    './images/Nephi.jpg': Nephi,
    './images/Pahoran.jpg': Pahoran
    
  };

  return networkArray[name];
}
 
export default ImageLoader;