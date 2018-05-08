import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { Tabs, Tab } from '../../Components/Tabs/';
import { TodoRows } from '../../Components/Todos/';
import { days, NEW_TASK, actions } from '../../constants';
import { getTodos, deleteTask, updateTask } from '../../services';
import { UpdateTask, DeleteTodoById, SetAllTodos } from '../../store';

export class Tasks extends Component {
  constructor(props) {
    super(props);
    let day = this.props.location.search.replace(/\D+/, '') || '';
    if (day === '') {
      day = new Date().getDay();
    }
    this.state = {
      selectedIndex: Number(day)
    };
  }

  onActionsClick = (el, act) => {
    this.setState({
      selectedIndex: Number(el.day)
    });
    if (!confirm(`Are you sure (${act}) '${el.title}'?`)) { return; }

    switch (act) {
      case actions.delete:
        deleteTask(el.id)
          .then(res => this.props.deleteTodoById(res.id));
        break;
      case actions.complete:
      case actions.processing:
        el.done = act === actions.complete;
        updateTask(el)
          .then(res => this.props.updateTask(res));
        break;
    }
  }

  updateTasks = (task, tasks) => tasks.map(day => day.map(ts => (ts.id === task.id ? { ...task } : { ...ts })));

  deleteTask = (task, tasks) => tasks.map(day => day.filter(e => e.id !== task.id).map(ts => ({ ...ts })));

  componentDidMount() {
    getTodos()
      .then((todos) => {
        this.props.setAllTodos(todos);
      })
      .catch();
  }

  render() {
    return (
      <React.Fragment>
        <Tabs selectedIndex={this.state.selectedIndex}>
          {
            (this.props.todos || []).map((todos, index) =>
              (
                <Tab
                  key={index}
                  title={days[index]}
                >
                  {todos.map(task =>
                    (<TodoRows
                      key={task.id}
                      onTodoClick={this.onActionsClick}
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

const mapStateToProps = state => ({
  todos: state.todos
});


const mapDispatchToProps = dispatch => ({
  updateTask(value) {
    dispatch(UpdateTask(value));
  },
  deleteTodoById(value) {
    dispatch(DeleteTodoById(value));
  },
  setAllTodos(tasks) {
    dispatch(SetAllTodos(tasks));
  }
});

export const TaskList = withRouter(connect(mapStateToProps, mapDispatchToProps)(Tasks));
