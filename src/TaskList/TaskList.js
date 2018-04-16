import { Tabs, Tab } from './Tabs/';
import { tasksInWeek } from './tasksInWeek';

export class TaskList extends Component {
  days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  constructor(props) {
    super(props);
    this.state = {
      tasksWeek: tasksInWeek
    };
  }

  componentDidMount() {
    this.setState({
        tasksWeek: tasksInWeek
      });
  }

  render() {
    return (
      <Tabs>
        {
          this.state.tasksWeek.map((tasks, index) =>
            (
              <Tab
                key={index}
                title={this.days[index]}
              >
                <ol>
                  {tasks.map(task => <li key={task.id} >{task.title}</li>)}
                </ol>
                <button type="button" className="btn btn-primary">Add</button>
              </Tab>))
        }
      </Tabs >
    );
  }
}
