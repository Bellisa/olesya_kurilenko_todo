import { Route } from 'react-router-dom';
import 'bootstrap';
import 'jquery';
import './app.scss';
import { Header } from './parts/Header';
import { Pages } from './Pages/Pages';
import { checkUser } from './services';

// import { Footer } from './Footer';

export class App extends Component {
  state = {
    user: undefined,
    loadCookies: false
  }
  componentDidMount() {
    checkUser()
      .then((data) => {
        !data.error ?
          this.setLoginState(data) :
          console.log(data.error);

        this.setState({ loadCookies: true });
      })
      .catch((err) => {
        this.setLoginState(null);
        console.log('Can\'t login', err);
      });
  }

  setLoginState = (user) => {
    console.log('user', user);
    this.setState({ user });
  }
  render() {
    const { user, loadCookies } = this.state;

    return (
      <React.Fragment >
        <Header
          user={user}
          setLoginState={this.setLoginState}
        />
        <main role="main" className="container container-padding">
          <div className="row ">
            <div className="my-3 p-3 col-md-12 bg-white rounded box-shadow min-height">
              {
                loadCookies ?
                  <Pages
                    setLoginState={this.setLoginState}
                    user={user}
                  /> : '1'
              }
            </div>
          </div>
        </main>
      </React.Fragment >
    );
  }
}
