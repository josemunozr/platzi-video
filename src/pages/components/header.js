import React, { Component } from 'react';
import './header.css';
import { Link, NavLink } from 'react-router-dom';

import logo from '../../../images/logo.png';

class Header extends Component {
  render() { 
    return (
      <header className="Header">
        <img src={logo} width={250}/>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="is-selected">
                Inicio
              </NavLink>
              <NavLink to="/videos" activeClassName="is-selected">
                Videos
              </NavLink>
              <NavLink to="/contacto" activeClassName="is-selected">
                Contacto
              </NavLink>
              <NavLink to="/perfil" activeClassName="is-selected">
                Perfil
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
 
export default Header;