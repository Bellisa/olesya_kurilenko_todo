import React from 'react';
import './main.scss';
import { ComUserTasksInfo } from '../../Components/ComUserTasksInfo';
import { getTaskInfo } from '../../services';

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {}
    }
  }
  componentDidMount() {
    getTaskInfo()
      .then(info => this.setState({ info }))
      .catch(console.log);
  }
  render() {
    return (
      <React.Fragment>
        <main className="main">
          <ComUserTasksInfo info={this.state.info} user={this.props.user} />
          {/* <button onClick={() => props.history.push('/tasks')} /> */}
        </main>
      </React.Fragment>
    );
  }
}
