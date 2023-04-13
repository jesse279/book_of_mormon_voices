import { Link } from "react-router-dom";
import timeline_thumbnail from './images/thumbnails/Timeline_thumbnail.png'
import connections_thumbnail from './images/thumbnails/Connections_thumbnail.png'
import network_diagram_thumbnail from './images/thumbnails/Network_Diagram_thumbnail.png'
import word_cloud_thumbnail from './images/thumbnails/Word_Cloud_thumbnail.png'

const Toolbox = () => {
  return ( 
    <div>
      <h2 style={{paddingLeft: '2.8vw', paddingTop: '1vw'}}>Toolbox</h2>
      <div className="content-toolbox">
        <Link to={ '/toolbox/timeline' }>
          <div className="toolbox-item">
            <h4>Timeline</h4>
            <img src={ timeline_thumbnail } alt="" />
          </div>
        </Link>
        <Link to={ '/toolbox/word-cloud' }>
          <div className="toolbox-item">
            <h4>Word Cloud</h4>
            <img src={ word_cloud_thumbnail } alt="" />
          </div>
        </Link>
        <Link to={ '/toolbox/connections' }>
          <div className="toolbox-item">
            <h4>Connections</h4>
            <img src={ connections_thumbnail } alt="" />
          </div>
        </Link>
        <Link to={ '/toolbox/network-diagram' }>
          <div className="toolbox-item">
            <h4>Network Diagram</h4>
            <img src={ network_diagram_thumbnail } alt="" />
          </div>
        </Link>
      </div>
    </div>
   );
}
 
export default Toolbox;