import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store } from './store';
import { App } from './app.component.js';

const Root = () => (
  <Router>
    <App />
  </Router>
);

const MainApp = <Provider store={store}><Root /></Provider>;

ReactDom.render(MainApp, document.getElementById('app'));

