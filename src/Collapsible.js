import React from 'react';
import useCollapse from 'react-collapsed';
import './App.css';
function Collapsible(props) {
    const config = {
        duration: 2000,
        onExpandStart: () => {
            console.log('INFO: onExpandStart triggered.');
        },
        onExpandEnd: () => {
            console.log('INFO: onExpandEnd triggered.');
        },
        onCollapseStart: () => {
            console.log('INFO: onCollapseStart triggered.');
        },
        onCollapseEnd: () => {
            console.log('INFO: onCollapseEnd triggered.');
        }
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
return (
    <div className="collapsible">
        <div className="header" {...getToggleProps()}>
            {isExpanded ? 'Collapse' : 'Expand'}
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
    );
}
function App() {
    return (
    <Collapsible>
        Now you can see the hidden content. <br/><br/>
        Click again to hide ...
    </Collapsible>
    );
}
export default App;