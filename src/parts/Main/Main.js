import { connect } from 'react-redux';
import React from 'react';
import './main.scss';
import { ComUserTasksInfo } from '../../Components/ComUserTasksInfo';
import { getTaskInfo } from '../../services';

export class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    };
  }
  componentDidMount() {
    getTaskInfo()
      .then(info => this.setState({ info }))
      .catch();
  }
  render() {
    const { user } = this.props || {};
    return (
      <React.Fragment>
        <main className="main">
          <ComUserTasksInfo info={this.state.info} user={user} />
        </main>
      </React.Fragment>
    );
  }
}

export const Main = connect(({ user }) => ({ user }))(MainComponent);

