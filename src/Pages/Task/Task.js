import { updateTask, addTask } from '../../services';
import { fullDays } from '../../constants';

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props.location.state);
  }

  onSetStateValue = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  save = (e) => {
    const data = this.getTest();
    e.preventDefault();
    if (this.state.id && this.state.id > 0) {
      updateTask(data)
        .then(res => this.setState(res))
        .catch(console.log);
    } else {
      addTask(data)
        .then(res => this.setState(res))
        .catch(console.log);
    }
  }
  getTest = () => {
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
