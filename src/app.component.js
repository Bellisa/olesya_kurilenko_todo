import 'bootstrap';
import 'jquery';
import './app.scss';
import { Header } from './Header';
import { Main } from './Main';
// import { Footer } from './Footer';

export const App = () => (
  <React.Fragment >
    <Header />
    <Main />
  </React.Fragment >
);
