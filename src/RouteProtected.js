import { Route, Switch, Redirect } from 'react-router-dom';
import { Login } from './Login';

export class RouteProtected extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Switch>
        <Route
          path="/login"
          render={() => <Login onLogin={this.props.setLoginState} />}
        />
        <Redirect to="login" />
      </Switch>
    );
  }
}
