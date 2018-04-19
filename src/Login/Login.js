import { Loading } from '../Loading/Loading';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { showLoader: false };
  }
  submit = (e) => {
    this.setState({ showLoader: true });
    const value = e.target.name.value;
    e.preventDefault();

    setTimeout(() => {
      this.setState({ showLoader: false });
      this.props.onLogin(true, value);
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
