import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';
import { useParams} from "react-router-dom";

const Collapsible = ({header_text, body_text}) => {
  const [ isExpanded, setExpanded ] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  function handleOnClick() {
      // Do more stuff with the click event!
      // Or, set isExpanded conditionally 
      setExpanded(!isExpanded);
  }

  return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                { header_text }
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    { body_text }
                </div>
            </div>
        </div>
  );
}

export default Collapsible;