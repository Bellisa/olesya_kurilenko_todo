import { RoutePublic } from './RoutePublic';
import { RouteProtected } from './RouteProtected';

export class Pages extends Component {
  render() {
    return this.props.user ?
      (
        <RouteProtected {...this.props} />
      ) :
      (
        <RoutePublic {...this.props} />
      );
  }
}