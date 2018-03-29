export class ComUserTasksInfo extends Component {
  constructor({
    userId = 1, name = 'UserName', done = 1, inProgress = 1, waiting = 1
  }) {
    super();
    this.userId = userId;
    this.name = name;
    this.done = done;
    this.inProgress = inProgress;
    this.waiting = waiting;
  }

  render() {
    return (
      <div>
        <h5 className="mb-0">
          <a className="text-dark" href="/">Hello, {this.name}</a>
        </h5>
        <div>You have <strong>{this.done + this.inProgress + this.waiting}</strong> tasks</div>
        <div>Done: <strong>{this.done}</strong></div>
        <div>In progress: <strong>{this.inProgress}</strong></div>
        <div>Waiting: <strong>{this.waiting}</strong></div>
        <a href="/">Go to the task list</a>
      </div>
    );
  }
}
