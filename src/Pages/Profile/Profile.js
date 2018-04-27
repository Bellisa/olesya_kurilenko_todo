import { ComAddUserForm } from '../../Components/ComAddUserForm';

export const Profile = ({ user }) => (
  <React.Fragment >
    <ComAddUserForm user={user} disabled={['email']} excluded={['id']} />
  </React.Fragment>
);
