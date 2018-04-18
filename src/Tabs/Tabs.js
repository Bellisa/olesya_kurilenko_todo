import PropTypes from 'prop-types';
import { TabNav } from './TabNav';
import { Tab } from './Tab';
import './tabs.scss';

export class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Number(props.selectedIndex) || 0
    };
  }
  componentDidMount() {
    // this.clickTab(0);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedIndex !== this.state.id) {
      this.setState({
        id: nextProps
      });
    }
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
        <div className="contentTab">
          {contents[this.state.id]}
        </div>
      </section>
    );
  }
}

Tabs.propTypes = {
  selectedIndex: PropTypes.number
};

Tabs.defaultProps = {
  selectedIndex: 0
};
