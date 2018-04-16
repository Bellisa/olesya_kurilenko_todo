import './content.scss';
import { Form } from '../Form/';
import { ComAddUserForm } from '../Components/ComAddUserForm';
import { ComEditField } from '../Components/ComEditField';
import { ComTodos } from '../Components/ComTodos';
import { Tabs, Tab } from '../Tabs/';
import { TaskList } from '../TaskList/';

export class Content extends Component {
  tabs = [
    { id: 0, title: 'Tab 1', content: 'Some text is here' },
    { id: 1, title: 'Tab 2', content: 'Another content' },
    { id: 2, title: 'Tab 1', content: 'Third text' }
  ];

  onBlueInput = (value) => {
    console.log(value);
  }
  render() {
    return (
      <div className="my-3 p-3 col-md-12 bg-white rounded box-shadow min-height">
        <Form /><br />
        <ComAddUserForm disabled={['email']} />
        <ComEditField onlose={this.onBlueInput} /><br />
        <ComTodos />
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
<TaskList />

      </div>
    );
  }
}
