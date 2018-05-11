import { NavLink } from 'react-router-dom';


export const ComUserNav = ({
  user, setLoginState
}) => {
  if (user) {
    return (
      <React.Fragment >
        <div className="navbar-nav pr-5 dropdown  float-right">
          <a
            className="nav-link dropdown-toggle float-right"
            href="#"
            id={user.id}
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {user.firstName} {user.lastName}
          </a>
          <div className="dropdown-menu float-right pr-5" aria-labelledby={user}>
            <NavLink to="/profile" className="dropdown-item" >
              Profile
            </NavLink>
            <NavLink to="/" className="dropdown-item" onClick={() => setLoginState()} >
              Logout
            </NavLink>
          </div>
        </div>
      </React.Fragment >
    );
  }
  return (
    <div className="navbar-nav pr-5 dropdown  float-right">
      <NavLink to="/registration" className="nav-link" >
        Registration
      </NavLink>
    </div>
  );
};

