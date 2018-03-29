export class ComGeolocation extends Component {
  state = {
    latitude: 0,
    longitude: 0,
    error: ''
  };
  GetGeolocaClick = () => {
    if (navigator.geolocation) {
      this.setState({ error: '' });
      navigator.geolocation.watchPosition(position => this.setState({
        latitude: position.coords.latitude, longitude: position.coords.longitude
      }));
    } else {
      this.setState({ error: 'Geolocation is not supported by this browser.' });
    }
  }

  render() {
    return (
      <div>
        <button className="btn btn-outline-primary" onClick={this.GetGeolocaClick} >Geolocation</button>
        <div>latitude: {this.state.latitude}</div>
        <div>longitude: {this.state.longitude}</div>
        {
          this.state.error && <p>{this.state.error}</p>
        }
      </div >
    );
  }
}
