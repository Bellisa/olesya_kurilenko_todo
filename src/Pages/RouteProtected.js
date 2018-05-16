import { Route, Switch, Redirect } from 'react-router-dom';
import { Main } from '../parts/Main';
import { TaskList } from './TaskList/';
import { NotFound } from './NotFound';
import { Profile } from './Profile/Profile';
import { Task } from './Task/';

export const RouteProtected = () => (
  <Switch>
    <Redirect from="/login" to="/" />

    <Route path="/" exact component={Main} />

    <Route path="/home" exact component={Main} />

    <Route path="/profile" component={Profile} />

    <Route path="/tasks" exact component={TaskList} />

    <Route path="/tasks/:task" component={Task} />

    <Route component={NotFound} />
  </Switch>
);

