import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastr';
import 'bootstrap';
import 'jquery';
import './app.scss';
import { Header } from './parts/Header';
import { Pages } from './Pages/Pages';
import { getUserAsync, setError } from './store';

export class AppComponent extends Component {
  componentDidUpdate() {
    if (this.props.error) {
      this.container.error(<strong>{this.props.error}</strong>, <em>Error</em>);
      this.props.dispatch(setError(''));
    }
  }

  componentDidMount() {
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
                  : <h2>waiting</h2>
              }
            </div>
          </div>
        </main>
      </React.Fragment >
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  error: state.error
});

export const App = withRouter(connect(mapStateToProps)(AppComponent));
