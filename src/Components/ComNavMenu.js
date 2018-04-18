import { NavLink } from 'react-router-dom';

export const ComNavMenu = ({ pages }) => (
  <ul className="navbar-nav mr-auto">
    {
      (pages || [])
        .map(page => (
          <li className="nav-item" key={page}>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={`/${page.toLowerCase()}`}
            >
              {page}
            </NavLink>
          </li>
        ))
    }
  </ul>
);

