import { TabNav } from './TabNav';
import { Tab } from './Tab';

export class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0
    };
  }
  componentDidMount() {
    // this.clickTab(0);
  }
  clickTab = (id) => {
    this.setState({
      id
    });
  }
  render() {
    const tabs = this.props.children.filter(child => child.type === Tab);
    const links = tabs.map(tab => tab.props.title);
    const contents = tabs.map(tab => tab.props.children);
    return (
      <section className="tab">
        <TabNav
          list={links}
          select={this.clickTab}
          active={this.state.id}
        />
        {contents[this.state.id]}
      </section>
    );
  }
}
