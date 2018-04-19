import { Loading } from '../Loading/Loading';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { showLoader: false };
  }
  submit = (e) => {
    this.setState({ showLoader: true });
    const value = e.target.name.value;
    const user = {
      email: `${value}@mail.ru`,
      login: value,
      'first name': 'first name',
      'last name': 'last name',
      password: 'password'
    };
    e.preventDefault();

    setTimeout(() => {
      this.setState({ showLoader: false });
      console.log(user);
      this.props.onLogin(true, user);
    }, 5000);
  }
  render() {
    return (
      <React.Fragment >
        <form onSubmit={this.submit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="password"
            placeholder="Password"
            required
          />
          <input type="submit" value="Логин" />
        </form>
        <Loading show={this.state.showLoader} />
      </React.Fragment>
    );
  }
};
