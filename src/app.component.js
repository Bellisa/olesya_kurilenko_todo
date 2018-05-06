import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastr';
import 'bootstrap';
import 'jquery';
import './app.scss';
import { Header } from './parts/Header';
import { Pages } from './Pages/Pages';
import { checkUser, errObserver } from './services';
import { SetUser } from './store';

// import { Footer } from './Footer';

export class AppComponent extends Component {

  componentDidMount() {
    errObserver.addObserver((err = 'Something wrong') =>
      this.state.user !== false && this.container.error(<strong>{err}</strong>, <em>Error</em>));

    checkUser()
      .then((data) => {
        this.setLoginState(data);
      })
      .catch((err) => {
        this.setLoginState(null);
        console.log('Can\'t login', err);
      });
  }

  setLoginState = (data) => {
    console.log('user', data);
    this.props.dispatch(SetUser(data));
  }
  render() {
    const { user } = this.props;

    return (
      <React.Fragment >
        <Header
          user={user}
          setLoginState={this.setLoginState}
        />

        <main role="main" className="container container-padding">
          <ToastContainer
            ref={ref => this.container = ref}
            className="toast-top-right"
          />
          <div className="row ">
            <div className="my-3 p-3 col-md-12 bg-white rounded box-shadow min-height">
              {
                <Pages
                  setLoginState={this.setLoginState}
                  user={user}
                />
              }
            </div>
          </div>
        </main>
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export const App = withRouter(connect(mapStateToProps)(AppComponent));
