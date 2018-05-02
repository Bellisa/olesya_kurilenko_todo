import { NavLink } from 'react-router-dom';
import { Tabs, Tab } from '../../Components/Tabs/';
import { TodoRows } from '../../Components/Todos/';
import { days, NEW_TASK } from '../../constants';
import { getTodos, deleteTask, updateTask } from '../../services';

export class TaskList extends Component {
  actions = ['delete', 'complete', 'processing'];
  constructor(props) {
    super(props);
    let day = this.props.location.search.replace(/\D+/, '') || '';
    if (day === '') {
      day = new Date().getDay();
    }
    this.state = {
      todos: [],
      selectedIndex: Number(day)
    };
  }

  onActionsClick = (el, extion) => {
    this.setState({
      selectedIndex: Number(el.day)
    });
    if (!confirm(`Are you sure (${extion}) '${el.title}'?`)) { return; }

    switch (extion) {
      case 'delete':
        deleteTask(el.id)
          .then(res => this.needUpdateState(this.deleteTask(res, this.state.todos)));
        break;
      case 'complete':
      case 'processing':
        el.done = extion === 'complete';
        updateTask(el)
          .then(res => this.needUpdateState(this.updateTasks(res, this.state.todos)));
        break;
    }
  }

  updateTasks = (task, tasks) => tasks.map(day => day.map(ts => ((ts.id === task.id) ? { ...task } : ts)));

  deleteTask = (task, tasks) => tasks.map(day => day.filter(e => e.id !== task.id));

  needUpdateState = (todos) => {
    this.setState({
      todos
    });
  }

  componentDidMount() {
    getTodos()
      .then((todos) => {
        this.needUpdateState(todos);
      })
      .catch();
  }

  render() {
    return (
      <React.Fragment>
        <Tabs selectedIndex={this.state.selectedIndex}>
          {
            this.state.todos.map((todos, index) =>
              (
                <Tab
                  key={index}
                  title={days[index]}
                >
                  {todos.map(task =>
                    (<TodoRows
                      key={task.id}
                      onTodoClick={this.onActionsClick}
                      actions={this.actions}
                      todo={task}
                    />))}
                  <NavLink
                    className="btn btn-primary"

                    to={`/tasks/${NEW_TASK}?day=${index}`}
                  >
                    Add
                  </NavLink>
                </Tab>))
          }
        </Tabs >
      </React.Fragment>
    );
  }
}
