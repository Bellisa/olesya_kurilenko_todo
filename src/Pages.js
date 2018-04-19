import { RoutePublic } from './RoutePublic';
import { RouteProtected } from './RouteProtected';

export class Pages extends Component {
  render() {
    return this.props.login ?
      (
        <RoutePublic {...this.props} />
      ) :
      (
        <RouteProtected {...this.props} />
      );
  }
}
