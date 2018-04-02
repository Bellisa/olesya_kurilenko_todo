export class ComAddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      surName: '',
      password: '',
      confirmPassword: ''
    };
  }

  onTextChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    return (
      <div className="p-3 mb-3 col-md-6  bg-light rounded">
        <form action="#">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="EMAIL"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="NAME"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="surName"
              placeholder="SURNAME"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="PASSWORD"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              placeholder="CONFIRM PASSWORD"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
