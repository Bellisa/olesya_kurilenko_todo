import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './Login';
import { UserRegistration } from './UserRegistration/UserRegistration';

export class RoutePublic extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/login"
          render={() => <Login onLogin={this.props.setLoginState} />}
        />
        <Route
          path="/registration"
          component={UserRegistration}
        />
        <Redirect to="login" />
      </Switch>
    );
  }
}
