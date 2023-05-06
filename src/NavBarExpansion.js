import { Link } from 'react-router-dom';

const NavBarExpansion = ({reference, expandableItems, expandableLinks, style}) => {

    const linkList = expandableItems.map((item, index) => (
        <Link key={index} to={`../${expandableLinks[index]}`} className='nav-expansion' style={{ padding: '0.35vw' }}>{item}</Link>
    ));

    let styleWithAbsolutePosition = {...style};
    styleWithAbsolutePosition.position = 'absolute';

    console.log(styleWithAbsolutePosition);

    return (
        <div className='navbar-expanded-menu' ref={reference} style={styleWithAbsolutePosition}>
            {linkList}
            </div>
    )
}

export default NavBarExpansion;