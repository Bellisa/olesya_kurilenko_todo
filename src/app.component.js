import { Route } from 'react-router-dom';
import 'bootstrap';
import 'jquery';
import './app.scss';
import { Header } from './Header';
import { Pages } from './Pages';

// import { Footer } from './Footer';

export class App extends Component {
  state = {
    login: false,
    user: ''
  }

  setLoginState = (login, user) => {
    this.setState({ login, user });
  }
  render() {
    const { login, user } = this.state;

    return (
      <React.Fragment >
        <Header
          login={login}
          user={user}
          setLoginState={this.setLoginState}
        />
        <main role="main" className="container container-padding">
          <div className="row ">
            <div className="my-3 p-3 col-md-12 bg-white rounded box-shadow min-height">
              <Pages
                login={login}
                setLoginState={this.setLoginState}
              />
            </div>
          </div>
        </main>
      </React.Fragment >
    );
  }
}
