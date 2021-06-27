import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu=()=>{
    return(
        <nav>
            <ul className="main-menu row">
                <li >
                <NavLink exact to="/"  activeClassName="menu-active">Home</NavLink>
                </li>
                <li >
                <NavLink  to="/about"  activeClassName="menu-active">About</NavLink>
                </li>
                <li >
                <NavLink  to="/services"  activeClassName="menu-active">Services</NavLink>
                </li>
                <li >
                <NavLink  to="/contact"  activeClassName="menu-active">Contact</NavLink>
                </li> <li >
                {/* <NavLink  to="/sdetails/id"  activeClassName="menu-active">Contact</NavLink> */}
                </li>
                </ul>
</nav>        
    )

}
export default Menu