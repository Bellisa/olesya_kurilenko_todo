import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Tabs, Tab } from '../../Components/Tabs/';
import { TodoRows } from '../../Components/Todos/';
import { days, NEW_TASK, actions } from '../../constants';
import { UpdateTodoAsync, DeleteTodoByIdAsync, GetAllTodosAsync } from '../../store';

export class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: new Date().getDay()
    };
  }

  onActionsClick = (el, act) => {
    this.setState({
      selectedIndex: Number(el.day)
    });
    switch (act) {
      case actions.delete:
        this.props.deleteTodoById(el.id);
        break;
      case actions.complete:
      case actions.processing:
        el.done = act === actions.complete;
        this.props.updateTask(el);
        break;
    }
  }

  componentDidMount() {
    this.props.getAllTodos();
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
    dispatch(UpdateTodoAsync(value));
  },
  deleteTodoById(value) {
    dispatch(DeleteTodoByIdAsync(value));
  },
  getAllTodos() {
    dispatch(GetAllTodosAsync());
  }
});

export const TaskList = connect(mapStateToProps, mapDispatchToProps)(Tasks);
// ({user}) =>({user})
