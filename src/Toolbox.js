import { Link } from "react-router-dom";
import timeline_thumbnail from './images/thumbnails/Timeline_thumbnail.png'
import connections_thumbnail from './images/thumbnails/Connections_thumbnail.png'
import network_diagram_thumbnail from './images/thumbnails/Network_Diagram_thumbnail.png'
import word_cloud_thumbnail from './images/thumbnails/Word_Cloud_thumbnail.png'

const Toolbox = () => {
  return ( 
    <div className='first-element-spacing main-text'>
      <h2 style={{paddingBottom: '1vw'}}>Toolbox</h2>
      <div className="content-toolbox">
        <Link to={ '/toolbox/timeline' }>
          <div className="toolbox-item">
            <h5>Timeline</h5>
            <img src={ timeline_thumbnail } alt="" />
          </div>
        </Link>
        <Link to={ '/toolbox/word-cloud' }>
          <div className="toolbox-item">
            <h5>Word Cloud</h5>
            <img src={ word_cloud_thumbnail } alt="" />
          </div>
        </Link>
        <Link to={ '/toolbox/connections' }>
          <div className="toolbox-item">
            <h5>Connections</h5>
            <img src={ connections_thumbnail } alt="" />
          </div>
        </Link>
        <Link to={ '/toolbox/network-diagram' }>
          <div className="toolbox-item">
            <h5>Network Diagram</h5>
            <img src={ network_diagram_thumbnail } alt="" />
          </div>
        </Link>
      </div>
    </div>
   );
}
 
export default Toolbox;