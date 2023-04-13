import { Link } from 'react-router-dom';

const NavBarExpansion = ({className, expandableItems, expandableLinks, style}) => {
    const itemsList = [...expandableItems];
    const linksList = [...expandableLinks]
    
    const divList = itemsList.map((item, index) => (
        <Link to={linksList[index]} className='nav-expansion'>
            <div key={index}>
                {item}
            </div>
        </Link>
        
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