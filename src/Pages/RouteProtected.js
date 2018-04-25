import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from '../parts/Main';
import { TaskList } from './TaskList/';
import { NotFound } from './NotFound';
import { Profile } from './Profile/Profile';
import { Task } from './Task/';

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
          exact
          component={Main}
        />
        <Route
          path="/profile"
          render={() => <Profile user={this.props.user} />}
        />
        <Route
          path="/tasks"
          exact
          component={TaskList}
        />
        <Route
          path="/tasks/:task"
          component={Task}
        />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

