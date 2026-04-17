import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to, children}) => {
    return (
        <NavLink
              to={to}
              className={({ isActive }) =>
                `btn-soft btn ${isActive ? "btn text-white bg-[#244D3F]" : ""}`
              }
            >
              {children}
            </NavLink>
    );
};

export default MyNavLink;