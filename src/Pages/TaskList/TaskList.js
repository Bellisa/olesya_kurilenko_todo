import { NavLink } from 'react-router-dom';
import { Tabs, Tab } from '../../Components/Tabs/';
import { TodoRows } from '../../Components/Todos/';
import { days, NEW_TASK } from '../../constants';
import { getTodos } from '../../services';

export class TaskList extends Component {
  actions = ['delete', 'complete', 'processing'];
  constructor(props) {
    super(props);
    let day = this.props.location.search.replace(/\D+/, '') || '';
    if (day === '') {
      day = new Date().getDay();
    }
    console.log(day);
    this.state = {
      todos: [],
      selectedIndex: Number(day)
    };
  }

  onActionsClick = (id, extion) => {
    switch (extion) {
      case 'delete':
        break;
      case 'complete':
        break;
      case 'processing':
        break;
    }
    console.log(id, extion);
  }
  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (prevState.todos !== nextProps.todos) {
  //     return { todos: nextProps.todos };
  //   }
  //   return null;
  // }
  componentDidMount() {
    getTodos()
      .then((todos) => {
        console.log(todos, 'todos');
        this.setState({
          todos
        });
      })
      .catch();
  }

  render() {
    return (
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
    );
  }
}
