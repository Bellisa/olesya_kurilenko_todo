import { ComAddUserForm } from '../Components/ComAddUserForm';

export const UserRegistration = () => (
  <React.Fragment >
    <ComAddUserForm disabled={['email']} />
  </React.Fragment>
);

