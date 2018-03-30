export class ComButton extends Component {
  state = {
    isActive: false
  };

  btnClick = () => {
    this.setState({
      isActive: !this.state.isActive
    });
  }

  render() {
    return (
      <div>
        <button className={`btn btn-primary btn-lg ${this.state.isActive && 'active'}`} onClick={this.btnClick} >
          {
            this.state.isActive ? 'hide' : 'show'
          }
        </button>
        {
          this.state.isActive && <div>Some text</div>
        }
      </div >
    );
  }
}
