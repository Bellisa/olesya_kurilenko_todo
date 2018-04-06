import { ComTodoRow } from './ComTodoRow';
import { ComFilter } from './ComFilter';

export class ComTodos extends Component {
  constructor(props) {
    super(props);
    this.actions = ['delete', 'complete', 'processing'];
    this.state = {
      todos: [],
      error: null,
      filter: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            todos: result.slice(0, 10).map(el => ({ id: el.id, title: el.title, completed: el.completed }))
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      );
  }

  onActionsClick = (id, extion) => {
    console.log(id, extion);
  }
  onFilterClick = (text) => {
    this.setState({ filter: text });
  }
  render() {
    const { error, filter } = this.state;
    let { todos } = this.state;
    todos = todos.filter(el => el.title.indexOf(filter) >= 0);
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    return (
      <div>
        <ComFilter onFilter={this.onFilterClick} /><br />
        {todos.map(todo => (
          <ComTodoRow onTodoClick={this.onActionsClick} actions={this.actions} key={todo.id} todo={todo} />
        ))}
      </div>
    );
  }
}

