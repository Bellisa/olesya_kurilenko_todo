import { NavLink } from 'react-router-dom';
import { Tabs, Tab } from '../../Components/Tabs/';
import { TodoRows } from '../../Components/Todos/';
import { days } from '../../constants';
import { getTodos } from '../../services';

export class TaskList extends Component {
  actions = ['delete', 'complete', 'processing'];
  constructor(props) {
    super(props);

    this.state = {
      todos: []
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
      <Tabs selectedIndex={new Date().getDay()}>
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

                  to={{
                    pathname: '/tasks/new',
                    state: {
                      id: 0,
                      day: index,
                      title: ''
                    }
                  }}
                >
                  Add
                </NavLink>
              </Tab>))
        }
      </Tabs >
    );
  }
}
