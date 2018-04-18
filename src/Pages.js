import { Route, Switch, Redirect } from 'react-router-dom';

import { TaskList } from './TaskList/';
import { Main } from './Main';
import { Login } from './Login';

export class Pages extends Component {
  render() {
    return this.props.login ?
      (
        <Switch>
          <Redirect from="/login" to="/" />
          <Route
            path="/"
            exact
            component={Main}
          />
          <Route
            path="/home"
            exactm
            component={Main}
          />
          <Route
            path="/tasks"
            component={TaskList}
          />
          <Route
            render={props => <h1>404 Page {props.location.pathname.replace('/', '')} not found</h1>}
          />
        </Switch>
      ) :
      (
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
