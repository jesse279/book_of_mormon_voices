import { Link } from 'react-router-dom';

const NavBarExpansion = ({reference, expandableItems, expandableLinks, style}) => {
    console.log('RENDERING EXPANSION');

    const linkList = expandableItems.map((item, index) => (
        <Link key={index} to={`../${expandableLinks[index]}`} className='nav-expansion'>{item}</Link>
    ));

    let styleWithAbsolutePosition = {...style};
    styleWithAbsolutePosition.position = 'absolute';

    return (
        <div className='navbar-expanded-menu' ref={reference} style={styleWithAbsolutePosition}>
            {linkList}
        </div>
    )
}

export default NavBarExpansion;