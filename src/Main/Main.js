// import 'bootstrap';
import './main.scss';
// import { Aside } from '../Aside/';
import { Content } from '../Content/';

export class Main extends Component {
  render() {
    return (
      <main role="main" className="container container-padding">
        <div className="row ">
          <Content />
        </div>
      </main>);
  }
}
