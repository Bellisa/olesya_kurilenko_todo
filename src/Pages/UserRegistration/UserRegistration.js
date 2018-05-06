import { Redirect } from 'react-router-dom';
import { ComAddUserForm } from '../../Components/ComAddUserForm';
import { registration } from '../../services';


export class UserRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = { needRedirect: false };
  }
  onSubmit = (data) => {
    console.log(data, 'registration');
    registration(data)
      .then((user) => {
        this.setState({ needRedirect: true });
      })
      .catch(console.log);
  }
  render() {
    return (
      <React.Fragment >
        {
          this.state.needRedirect && <Redirect from="/registration" to="/success" />
        }
        <ComAddUserForm excluded="id" onSubmit={this.onSubmit} />
      </React.Fragment>
    );
  }
}

