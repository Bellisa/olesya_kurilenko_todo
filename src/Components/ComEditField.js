export class ComEditField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: false,
      valueText: 'span'
    };
  }

  onInputBlur = ({ target }) => {
    this.setState({ isEditMode: false });
    this.props.onlose(target.value);
  }
  onSpanClick = () => {
    this.setState({ isEditMode: true });
  }
  onSetStateValue = ({ target }) => {
    this.setState({ valueText: target.value });
  }

  render() {
    return this.state.isEditMode ? (
      <input
        type="text"
        name="valueText"
        value={this.state.valueText}
        onChange={this.onSetStateValue}
        onBlur={this.onInputBlur}
      />
    ) :
      (<span onClick={this.onSpanClick}>{this.state.valueText}</span >);
  }
}
