export class ComUserTasksInfo extends Component {
  state = {
    userId: 1,
    name: 'UserName',
    done: 1,
    inProgress: 1,
    waiting: 1
  }
  constructor({
    userId = 1, name = 'UserName', done = 1, inProgress = 1, waiting = 1
  }) {
    super();
    this.setState({
      userId, name, done, inProgress, waiting
    });
  }

  render() {
    return (
      <div key={this.state.userId}>
        <h5 className="mb-0">
          <a className="text-dark" href="/">Hello, {this.state.name}</a>
        </h5>
        <div>You have <strong>{this.state.done + this.state.inProgress + this.state.waiting}</strong> tasks</div>
        <div>Done: <strong>{this.state.done}</strong></div>
        <div>In progress: <strong>{this.state.inProgress}</strong></div>
        <div>Waiting: <strong>{this.state.waiting}</strong></div>
        <a href="/">Go to the task list</a>
      </div>
    );
  }
}
