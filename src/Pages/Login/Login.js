import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastr';
import { Loading } from '../../Components/Loading/Loading';
import { authUserAsync } from '../../store';


export class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { showLoader: false };
  }

  submit = (e) => {
    // this.setState({ showLoader: true });
    const { email, password } = e.target;
    e.preventDefault();
    this.props.dispatch(authUserAsync({ email: email.value, password: password.value }));
  }

  render() {
    return (
      <React.Fragment >
        <ToastContainer
          ref={ref => this.container = ref}
          className="toast-top-right"
        />
        <form onSubmit={this.submit}>
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input type="submit" value="Логин" />
        </form>
        <Loading show={this.state.showLoader} />
      </React.Fragment>
    );
  }
}

export const Login = connect()(LoginComponent);
