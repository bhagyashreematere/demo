import react from 'react';
import styled from 'styled-components';
import {FaSearch,FaBell,FaUserCircle} from  'react-icons/fa'

const Header = () => {

    return(
        <Nav>
            
        <Logo src="logo.png" alt="Netflix"></Logo>
        <NavMenu>
            <span>HOME</span>
            <span>TV Shows</span>
            <span>Movies</span>
            <span>Latest </span>
            <span>My List</span>
        </NavMenu>
        <NavIcons>
            <FaSearch />
            <FaBell />
            <FaUserCircle />
        </NavIcons>

        </Nav>
    );

};

const Nav = styled.div`
    display:flex;
    justigy-content:cspace-between;
    padding: 20px;
    background-color: #111;
`;

const Logo = styled.img`width:10px;`

const NavMenu = styled.div`
    display:flex;
    gap:20px;
    color:white`;

export default Header;