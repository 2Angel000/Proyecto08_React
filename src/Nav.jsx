import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="/">
        Home
      </NavLink>
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="/pagina1">
        Pagina1
      </NavLink>
      
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="/pagina2">
        Pagina2
      </NavLink>
      
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="/pagina3">
        Pagina3
      </NavLink>
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="/pagina4/g">
        Pagina4
      </NavLink>
    
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="/atanagildo">
        Rey1
      </NavLink>
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="/ataulfo">
        Rey2
      </NavLink>    
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="/ervigio">
        Rey3
      </NavLink>
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="/leogivildo">
        Rey4
      </NavLink>
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="/recesvinto">
        Rey5
      </NavLink>
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="/sisebuto">
        Rey6
      </NavLink>



      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="reyes/atanagildo">
        Rey1
      </NavLink>
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="reyes/ataulfo">
        Rey2
      </NavLink>    
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="reyes/ervigio">
        Rey3
      </NavLink>
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="reyes/leogivildo">
        Rey4
      </NavLink>
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="reyes/recesvinto">
        Rey5
      </NavLink>
    
      <NavLink
        className={({ isActive }) => (isActive ? "activado" : null)}
        to="reyes/sisebuto">
        Rey6
      </NavLink>
    
    </nav>
  );
}
