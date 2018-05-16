import { connect } from 'react-redux';
import { ComAddUserForm } from '../../Components/ComAddUserForm';
import { updateUserAsync } from '../../store';


export class ProfileComponent extends Component {
  onSubmit = (data) => {
    this.props.dispatch(updateUserAsync(data));
  }

  render() {
    return (
      <React.Fragment >
        <ComAddUserForm
          user={this.props.user}
          disabled={['email']}
          excluded={['id']}
          skipped={['password', 'repeatPassword']}
          onSubmit={this.onSubmit}
        />
      </React.Fragment>
    );
  }
}
export const Profile = connect(({ user }) => ({ user }))(ProfileComponent);
