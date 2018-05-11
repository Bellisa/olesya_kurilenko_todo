import { connect } from 'react-redux';
import { ComAddUserForm } from '../../Components/ComAddUserForm';
import { updateUserAsyc } from '../../services';


export class ProfileComponent extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = (data) => {
    console.log(data, 'registration');
    this.props.dispatch(updateUserAsyc(data));
    // updateUser(data)
    //   .then((user) => {

    //   })
    //   .catch(console.log);
  }

  render() {
    return (
      <React.Fragment >
        <ComAddUserForm user={this.props.user} disabled={['email']} excluded={['id']} />
      </React.Fragment>
    );
  }
}
export const Profile = connect(({ user }) => ({ user }))(ProfileComponent);
