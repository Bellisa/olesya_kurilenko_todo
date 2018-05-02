import { Redirect } from 'react-router-dom';
import { updateTask, addTask, getTaskById } from '../../services';
import { fullDays, NEW_TASK } from '../../constants';

export class Task extends Component {
  constructor(props) {
    super(props);
    // this.state = Object.assign({}, props.location.state);
    this.state = {
      description: '',
      title: '',
      day: 0,
      id: 0
    };
  }

  componentDidMount() {
    if (this.props.match.params.task === NEW_TASK) {
      const day = this.props.location.search.replace(/\D+/, '') || '';
      console.log(day, 'day');
      this.setState({ day });
      return;
    }
    const id = this.props.match.params.task || 0;

    getTaskById(id)
      .then((task) => {
        console.log(task, 'todos');
        // this.setState(Object.assign({}, task));
        this.setState({ ...task });
      })
      .catch(console.log);
  }

  onSetStateValue = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  save = (e) => {
    const prom = (this.state.id && this.state.id > 0) ? updateTask(this.state) : addTask(this.state);
    e.preventDefault();
    prom
      .then(() => this.props.history.push(`/tasks?day=${this.state.day}`))
      .catch(console.log);
    // if (this.state.id && this.state.id > 0) {
    //   console.log(this.state, 'start update');

    //   updateTask(this.state)
    //     .then((res) => {
    //       console.log(res);
    //       // this.setState(res);
    //       // this.setState({ needRedirect: true });
    //     })
    //     .catch(console.log);
    // } else {
    //   const data = this.getTask();
    //   addTask(data)
    //     .then((res) => {
    //       this.setState(res);
    //       this.setState({ needRedirect: true });
    //     })
    //     .catch(console.log);
    // }
  }
  getTask = () => {
    const task = {};
    if (this.state.id && this.state.id > 0) {
      task.id = this.state.id;
    }
    task.title = this.state.title || '';
    task.description = this.state.description || '';
    task.day = this.state.day || 0;
    if (this.state.done) {
      task.done = this.state.done;
    }
    return task;
  }

  render() {
    return (
      <div className="p-3 mb-3 col-md-6  bg-light rounded">
        {
          this.state.needRedirect && <Redirect to="/tasks" />
        }
        <form onSubmit={this.save} >
          <div className="form-group">
            <p>{fullDays[this.state.day]}</p>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onSetStateValue}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.onSetStateValue}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" >Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
