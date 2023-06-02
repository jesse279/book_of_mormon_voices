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
        <Link className='toolbox-container' to={ '/toolbox/timeline' }>
          <div className="toolbox-item">
            <h4 className='toolbox-item-label'>Timeline</h4>
            <img src={ timeline_thumbnail } alt="" />
          </div>
        </Link>
        <Link className='toolbox-container' to={ '/toolbox/word-cloud' }>
          <div className="toolbox-item">
            <h4 className='toolbox-item-label'>Word Cloud</h4>
            <img src={ word_cloud_thumbnail } alt="" />
          </div>
        </Link>
        <Link className='toolbox-container' to={ '/toolbox/connections' }>
          <div className="toolbox-item">
            <h4 className='toolbox-item-label'>Connections</h4>
            <img src={ connections_thumbnail } alt="" />
          </div>
        </Link>
        <Link className='toolbox-container' to={ '/toolbox/network-diagram' }>
          <div className="toolbox-item">
            <h4 className='toolbox-item-label'>Network Diagram</h4>
            <img src={ network_diagram_thumbnail } alt="" />
          </div>
        </Link>
      </div>
    </div>
   );
}
 
export default Toolbox;