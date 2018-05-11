import { NavLink } from 'react-router-dom';

export class ComUserTasksInfo extends Component {

  render() {
    const { user } = this.props || {};
    const { info } = this.props || {};
    return (
      <div>
        <h5 className="mb-0">
          <a className="text-dark" href="/">Hello, {user.firstName}</a>
        </h5>
        <div>You have <strong>{info.total}</strong> tasks</div>
        <div>Done: <strong>{info.done}</strong></div>
        <div>In progress: <strong>{info.inProgress}</strong></div>
        <div>Waiting: <strong>{info.waiting}</strong></div>
        <NavLink to="/tasks" >
          Go to the task list
        </NavLink>
      </div>
    );
  }
}
