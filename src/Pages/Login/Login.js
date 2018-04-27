import { Loading } from '../../Components/Loading/Loading';
import { login } from '../../services';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { showLoader: false };
  }
  submit = (e) => {
    // this.setState({ showLoader: true });
    const { email, password } = e.target;
    // const value = e.target.name.value;
    // const user = {
    //   email: `${value}@mail.ru`,
    //   login: value,
    //   'first name': 'first name',
    //   'last name': 'last name',
    //   password: 'password'
    // };
    e.preventDefault();
    login({ email: email.value, password: password.value })
      .then((data) => {
        console.log(data, 'login');
        this.props.onLogin(data);
      })
      .catch(console.log);

    // setTimeout(() => {
    //   this.setState({ showLoader: false });
    //   console.log(user);
    //   this.props.onLogin(true, user);
    // }, 5000);
  }
  render() {
    return (
      <React.Fragment >
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
