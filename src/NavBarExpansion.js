const NavBarExpansion = ({className, expandableItems, style}) => {
    const itemsList = [...expandableItems];
    
    const divList = itemsList.map((item, index) => (
        <div key={index}>{item}</div>
    ));

    const additionalComponentStyles = {};
    const mergedStyles = { ...style, ...additionalComponentStyles };

    return (
        <div className={className} style={mergedStyles}>
            {divList}
        </div>
    )
}

export default NavBarExpansion;