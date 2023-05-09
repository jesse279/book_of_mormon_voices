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
        <>
            <p className="collapsible-header" {...getToggleProps({onClick: handleOnClick})}>
                { header_text }
            </p>
            <div {...getCollapseProps()}>
                <p className="collapsible-content">
                    { body_text }
                </p>
            </div>
        </>
  );
}

export default Collapsible;