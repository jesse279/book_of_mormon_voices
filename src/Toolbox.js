import { Link } from "react-router-dom";

const Toolbox = () => {
  return ( 
    <div>
      <h2 style={{paddingLeft: '2.8vw', paddingTop: '1vw'}}>Toolbox</h2>
      <div className="content-toolbox">
        <Link to={ '/toolbox/timeline' }>
          <div className="toolbox-item">
            <h4>Timeline</h4>
            <iframe src="https://visiblelanguage.live/timeline/" width={200} height={100} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full" ></iframe>
          </div>
        </Link>
        <Link to={ '/toolbox/word-cloud' }>
          <div className="toolbox-item">
            <h4>Word Cloud</h4>
            <iframe src="https://visiblelanguage.live/PackedBubble/graphs/packedbubbles.html" width={200} height={100} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full" ></iframe>

          </div>
        </Link>
        <Link to={ '/toolbox/connections' }>
          <div className="toolbox-item">
            <h4>Connections</h4>
            <iframe src="https://visiblelanguage.live/connections/" width={200} height={100} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full" ></iframe>

          </div>
        </Link>
        <Link to={ '/toolbox/network-diagram' }>
          <div className="toolbox-item">
            <h4>Network Diagram</h4>
            <iframe src="https://visiblelanguage.live/consensusNetwork/" width={200} height={100} style={{border:"none"}} ></iframe>

          </div>
        </Link>
      </div>
    </div>
   );
}
 
export default Toolbox;