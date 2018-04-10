import './content.scss';
import { Form } from '../Form/';
import { ComAddUserForm } from '../Components/ComAddUserForm';
import { ComEditField } from '../Components/ComEditField';
import { ComTodos } from '../Components/ComTodos';
import { Tabs } from '../Tabs/';

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
        <Tabs tabs={this.tabs} />
      </div>
    );
  }
}
