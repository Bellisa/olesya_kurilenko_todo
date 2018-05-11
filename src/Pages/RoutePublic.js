import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './Login';
import { UserRegistration } from './UserRegistration/UserRegistration';
import { Success } from './Success';

export class RoutePublic extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/login"
          render={() => <Login />}
        />
        <Route
          path="/registration"
          component={UserRegistration}
        />
        <Route
          path="/Success"
          exact
          component={Success}
        />
        <Redirect to="login" />
      </Switch>
    );
  }
}
