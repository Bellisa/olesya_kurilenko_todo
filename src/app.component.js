import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastr';
import 'bootstrap';
import 'jquery';
import './app.scss';
import { Header } from './parts/Header';
import { Pages } from './Pages/Pages';
import { errObserver } from './services';
import { getUserAsync } from './store';

// import { Footer } from './Footer';

export class AppComponent extends Component {
  componentDidMount() {
    errObserver.addObserver((err = 'Something wrong') =>
      this.props.user !== false && this.container.error(<strong>{err}</strong>, <em>Error</em>));

    this.props.dispatch(getUserAsync());
  }

  render() {
    const { user } = this.props || {};
    // debugger;
    return (
      <React.Fragment >
        <Header />

        <main role="main" className="container container-padding">
          <ToastContainer
            ref={ref => this.container = ref}
            className="toast-top-right"
          />
          <div className="row ">
            <div className="my-3 p-3 col-md-12 bg-white rounded box-shadow min-height">
              {
                (user !== false) ?
                  <Pages
                    user={user}
                  />
                  : <p>waiting</p>
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
