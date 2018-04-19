import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from './Main';
import { TaskList } from './TaskList/';
import { NotFound } from './app/NotFound';

export class RouteProtected extends Component {
  render() {
    return (
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
        <Route component={NotFound} />
      </Switch>
    );
  }
}

