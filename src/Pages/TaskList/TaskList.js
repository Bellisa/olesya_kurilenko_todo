import { Tabs, Tab } from '../../Components/Tabs/';
import { tasksInWeek } from './tasksInWeek';
import { TodoRows } from '../../Components/Todos/';
import { days } from './constants';

export class TaskList extends Component {
  actions = ['delete', 'complete', 'processing'];
  constructor(props) {
    super(props);
    this.state = {
      tasksWeek: tasksInWeek
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

  componentDidMount() {
    // this.setState({
    //   tasksWeek: tasksInWeek
    // });
  }

  render() {
    return (
      <Tabs selectedIndex={new Date().getDay()}>
        {
          this.state.tasksWeek.map((tasks, index) =>
            (
              <Tab
                key={index}
                title={days[index]}
              >
                {tasks.map(task =>
                  (<TodoRows
                    key={task.id}
                    onTodoClick={this.onActionsClick}
                    actions={this.actions}
                    todo={task}
                  />))}
                <button type="button" className="btn btn-primary">Add</button>
              </Tab>))
        }
      </Tabs >
    );
  }
}
