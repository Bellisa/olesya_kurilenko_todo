import './content.scss';
import { Form } from '../Form/';
// import { ComClock } from '../Components/ComClock';
// import { ComAddUserForm } from '../Components/ComAddUserForm';

export class Content extends Component {
  render() {
    return (
      <div className="my-3 p-3 col-md-12 bg-white rounded box-shadow min-height">
        <Form /><br />

      </div>
    );
  }
}
