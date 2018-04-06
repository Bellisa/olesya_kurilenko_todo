import './content.scss';
import { Form } from '../Form/';
import { ComAddUserForm } from '../Components/ComAddUserForm';
import { ComEditField } from '../Components/ComEditField';
import { ComTodos } from '../Components/ComTodos';

export class Content extends Component {
  onBlueInput = (value) => {
    console.log(value);
  }
  render() {
    return (
      <div className="my-3 p-3 col-md-12 bg-white rounded box-shadow min-height">
        <Form /><br />
        <ComAddUserForm disabled={['email']} />
        <ComEditField onlose={this.onBlueInput} /><br/>
        <ComTodos />
      </div>
    );
  }
}
