export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props.location.state);
    //{

    // title: props.match.params.task,
    // description: '',
    // day: props.location.search.replace(/\D+/, '')
    //};
  }
  onSetStateValue = ({ target }) => {
    // this.setState({ target[name]: target.value });
  }
  onActionsClick = (id, extion) => {
    console.log(id, extion);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="p-3 mb-3 col-md-6  bg-light rounded">
        <form onSubmit={this.save} >
          <div className="form-group">
            <p>{this.state.day}</p>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="title"
              value={this.state.title}
              // require
              onChange={this.onSetStateValue}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.onSetStateValue}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary" >Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
