import { connect } from 'react-redux';
import { logOutUserAsyc } from '../../store';
import './header.scss';
import { Navigation } from '../Navigation/';
import { pages } from './constants';

export class HeaderComponent extends Component {
  setLoginState = () => {
    this.props.dispatch(logOutUserAsyc());
  }

  render() {
    const { user } = this.props;

    return (
      <header className="header">
        <Navigation pages={pages} user={user} setLoginState={this.setLoginState} />
      </header>
    );
  }
}
export const Header = connect(({ user }) => ({ user }))(HeaderComponent);
