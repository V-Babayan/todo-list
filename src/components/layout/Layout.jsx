import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

import { StyledSvg, StyledHeader, StyledTitle } from "./Layout.styled";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <StyledHeader>
        <StyledTitle>{location.pathname.slice(1)}</StyledTitle>
        <NavLink to={"/general"}>
          <StyledSvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M17 2h3a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3V0h2v2h6V0h2v2zM7 8v2h10V8H7zm0 4v2h10v-2H7z'
              stroke='none'
            />
          </StyledSvg>
        </NavLink>
        <NavLink to={"/archive"}>
          <StyledSvg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
            <path d='M26,18V29.2l2.6-2.6a2,2,0,0,1,3.1.2,2.2,2.2,0,0,1-.4,2.7l-5.9,5.9a1.9,1.9,0,0,1-2.8,0l-5.9-5.9a2.2,2.2,0,0,1-.4-2.7,2,2,0,0,1,3.1-.2L22,29.2V18H4V40a4,4,0,0,0,4,4H40a4,4,0,0,0,4-4V18Z' />
            <path d='M43.9,14H4.1a3.6,3.6,0,0,1,.7-1.7l5-6.7A3.9,3.9,0,0,1,13,4H35a3.9,3.9,0,0,1,3.2,1.6l5,6.7A3.6,3.6,0,0,1,43.9,14Z' />
          </StyledSvg>
        </NavLink>
        <NavLink to={"/trash"}>
          <StyledSvg viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M12 4h3c.6 0 1 .4 1 1v1H3V5c0-.6.5-1 1-1h3c.2-1.1 1.3-2 2.5-2s2.3.9 2.5 2zM8 4h3c-.2-.6-.9-1-1.5-1S8.2 3.4 8 4zM4 7h11l-.9 10.1c0 .5-.5.9-1 .9H5.9c-.5 0-.9-.4-1-.9L4 7z'
              stroke='none'
            />
          </StyledSvg>
        </NavLink>
      </StyledHeader>

      <Outlet />
    </>
  );
};

export default Layout;
