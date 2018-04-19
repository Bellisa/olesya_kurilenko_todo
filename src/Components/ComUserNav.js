import { NavLink } from 'react-router-dom';

export const ComUserNav = ({
  user, setLoginState, login
}) => {
  if (login) {
    return (
      <React.Fragment >
        <div className="navbar-nav pr-5 dropdown  float-right">
          <a
            className="nav-link dropdown-toggle float-right"
            href="#"
            id={user}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {user}
          </a>
          <div className="dropdown-menu float-right pr-5" aria-labelledby={user}>
            <NavLink to="/profile" className="dropdown-item" >
              Profile
            </NavLink>
            <NavLink to="/" className="dropdown-item" onClick={() => setLoginState(false, '')} >
              Logout
            </NavLink>
          </div>
        </div>
      </React.Fragment >
    );
  }
  return (
    <div className="navbar-nav pr-5 dropdown  float-right">
      <NavLink to="/registration" className="" >
        Registration
      </NavLink>
    </div>
  );
};

