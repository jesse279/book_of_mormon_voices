import { Link } from 'react-router-dom';

const NavBarExpansion = ({className, expandableItems, expandableLinks, style}) => {
    const itemsList = [...expandableItems];
    const linksList = [...expandableLinks]
    
    const divList = itemsList.map((item, index) => (
        <Link key={index} to={`../${linksList[index]}`} className='nav-expansion' style={{padding: '0.3vw', margin: '0px'}}>{item}</Link>
    ));
    
    console.log('DIVLIST');
    console.log(divList);

    const additionalComponentStyles = {};
    const mergedStyles = { ...style, ...additionalComponentStyles };

    return (
        <div className={className} style={mergedStyles}>
            {divList}
        </div>
    )
}

export default NavBarExpansion;