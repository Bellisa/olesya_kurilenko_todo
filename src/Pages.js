import { RoutePublick } from './RoutePublick';
import { RouteProtected } from './RouteProtected';

export class Pages extends Component {
  render() {
    return this.props.login ?
      (
        <RoutePublick {...this.props} />
      ) :
      (
        <RouteProtected {...this.props} />
      );
  }
}
