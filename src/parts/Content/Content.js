import { Redirect } from 'react-router-dom';
import './content.scss';
import { ComAddUserForm } from '../../Components/ComAddUserForm';

// import { Form } from '../Form/';
// import { ComAddUserForm } from '../Components/ComAddUserForm';
// import { ComEditField } from '../Components/ComEditField';
// import { ComTodos } from '../Components/ComTodos';
import { TaskList } from '../../Pages/TaskList/';
import { UsersInfo } from '../../Components/UsersInfo/';

export class Content extends Component {
  state = {
    tasks: false
  }
  render() {
    return (
      <div>
        hello
        <button
        onClick={() => this.setState({ tasks: true })}>
        Tasks
        </button>

        {this.state.tasks && <Redirect to="/tasks" />}
        {/* <Form /><br />
        <ComAddUserForm disabled={['email']} />
        <ComEditField onlose={this.onBlueInput} /><br />
        <ComTodos /> */}
        {/* <Tabs tabs={this.tabs} /> */}
        {/* <Tabs>

          <Tab title='Tab 1'>
            <h1>Title 1</h1>
            <article>Lorem ipsum 1</article>
          </Tab>

          <Tab title='Tab 2'>
            <h1>Title 2</h1>
            <article>Lorem ipsum 2</article>
          </Tab>

          <Tab title='Tab 3'>
            <h1>Title 3</h1>
            <article>Lorem ipsum 3</article>
          </Tab>

        </Tabs> */}
        {/* <TaskList />
        <UsersInfo /> */}
      </div>
    );
  }
}
