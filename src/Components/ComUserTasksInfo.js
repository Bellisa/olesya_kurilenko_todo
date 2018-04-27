import { NavLink } from 'react-router-dom';

export class ComUserTasksInfo extends Component {
  constructor(props) {
    super(props);
    console.log(props.user, 'user');
    this.state = {
      info: props.info
    };
  }


  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.info !== nextProps.info) {
      return { info: nextProps.info };
    }
    return null;
  }

  render() {
    return (
      <div>
        <h5 className="mb-0">
          <a className="text-dark" href="/">Hello, {this.props.user.firstName}</a>
        </h5>
        <div>You have <strong>{this.props.info.total}</strong> tasks</div>
        <div>Done: <strong>{this.props.info.done}</strong></div>
        <div>In progress: <strong>{this.props.info.inProgress}</strong></div>
        <div>Waiting: <strong>{this.props.info.waiting}</strong></div>
        <NavLink to="/tasks" >
          Go to the task list
        </NavLink>
      </div>
    );
  }
}
