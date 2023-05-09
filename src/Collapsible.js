import React, { useState } from 'react';
import { useCollapse } from 'react-collapsed';

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
            <p className="header" {...getToggleProps({onClick: handleOnClick})}>
                { header_text }
            </p>
            <div {...getCollapseProps()}>
                <p className="content">
                    { body_text }
                </p>
            </div>
        </div>
  );
}

export default Collapsible;