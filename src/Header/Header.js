import './header.scss';
import { Navigation } from '../Navigation/';
import { pages } from '../constants';

export const Header = ({ user, login, setLoginState }) => (
  <header className="header">
    <Navigation pages={pages} user={user} login={login} setLoginState={setLoginState} />
  </header>
);
