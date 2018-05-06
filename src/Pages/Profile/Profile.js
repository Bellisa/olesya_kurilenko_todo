import { ComAddUserForm } from '../../Components/ComAddUserForm';
import { updateUser } from '../../services';


export class Profile extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (data) => {
    console.log(data, 'registration');
    updateUser(data)
      .then((user) => {

      })
      .catch(console.log);
  }

  render() {
    return (
      <React.Fragment >
        <ComAddUserForm user={this.props.user} disabled={['email']} excluded={['id']} />
      </React.Fragment>
    );
  }
}
