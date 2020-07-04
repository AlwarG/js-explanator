import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

function NavBar(props = {}) {
  let { routes } = props;
  return (
    <section className="w-1/3 text-right">
      {routes.map(({ name, url }) => {
        return (
          <NavLink
            className={`pr-5 pb-3 block ${
              window.location.href.endsWith(url) ? 'text-black' : ''
            }`}
            to={`/${url}`}
            key={name}
          >
            {name}
          </NavLink>
        );
      })}
    </section>
  );
}

export default NavBar;
