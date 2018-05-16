import { RoutePublic } from './RoutePublic';
import { RouteProtected } from './RouteProtected';

export const Pages = props => (props.user ?
  (
    <RouteProtected />
  ) :
  (
    <RoutePublic />
  ));

