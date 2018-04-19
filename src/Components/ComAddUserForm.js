import PropTypes from 'prop-types';

export class ComAddUserForm extends Component {
  constructor(props) {
    super(props);
    this.fields = [
      { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/ },
      { label: 'login', reg: /^[^ ]{3,20}$/ },
      { label: 'first name', reg: /^[^ ]{3,20}$/ },
      { label: 'last name', reg: /^[^ ]{3,20}$/ },
      { label: 'password', reg: /^[^ ]{6,20}$/, secure: true },
      { label: 'repeat password', reg: /^[^ ]{6,20}$/, secure: true }
    ];

    this.state = { error: '' };

    this.fields.forEach(field => (this.state[field.label] = { value: this.getPropsValue(field.label) }));
  }
  getPropsValue = (name) => {
    console.log(name);
    if (!this.props.user) {
      return '';
    }
    if (this.props.user[name]) {
      return this.props.user[name];
    }
    return 'z';
  }
  setValue = ({ target }) => {
    this.setState({ [target.name]: { value: target.value } });
  }
  validate = (index) => {
    const field = this.fields[index];
    const stateField = this.state[field.label];
    // this.state = { email: { value: 'text' } ...}
    // stateField = { value: 'text' }
    if (field.reg.test(stateField.value)) {
      stateField.error = ''; // { value: 'text', error: '' }
    } else {
      stateField.error = `${field.label} is invalid`; // { value: 'text', error: '...' } }
      this.setState({ [field.label]: stateField });
    }
  }
  save = (event) => {
    const { state } = this;
    let error = '';

    event.preventDefault();
    const pwd = { psw: 'password', repPsw: 'repeat password' };
    if (state[pwd.psw].value !== state[pwd.repPsw].value) {
      error = 'Password should be same';
    }

    this.setState({ error });

    if (error) {
      return;
    }
    const res = this.getFormValue();
    setTimeout(() => { }, 5000);
    console.log(res);
  }

  getFormValue() {
    const form = {};

    this.fields.forEach((field) => {
      form[field.label] = this.state[field.label].value;
    });
    return form;
  }

  getDisableState() {
    const { excluded = [], disabled = [] } = this.props;

    return this.fields
      .filter(({ label }) => !excluded.includes(label) && !disabled.includes(label))
      .some(({ label }) => {
        const { value, error } = this.state[label];
        return !value || error;
      });
  }
  getFormObj = () => {

  }
  render() {
    const { state, fields } = this;
    const { excluded = [], disabled = [] } = this.props;
    return (
      <div className="p-3 mb-3 col-md-6  bg-light rounded">
        <form onSubmit={this.save} >
          {
            fields
              .filter(({ label }) => !excluded.includes(label))
              .map(({ label, secure }, index) => {
                const stateField = state[label];
                return (
                  <div className="form-group" key={label}>
                    <input
                      disabled={disabled.includes(label)}
                      type={secure ? 'password' : 'text'}
                      value={stateField.value}
                      className={stateField.error ? 'form-control error' : 'form-control '}
                      name={label}
                      placeholder={label.toUpperCase()}
                      onChange={this.setValue}
                      onBlur={() => this.validate(index)}
                    />
                    {stateField.error && <span>{stateField.error}</span>}
                  </div>
                );
              })
          }
          {this.state.error && <span>{this.state.error}</span>}
          <div className="form-group">
            <button type="submit" className="btn btn-primary" disabled={this.getDisableState()} >Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

ComAddUserForm.propTypes = {
  excluded: PropTypes.array,
  disabled: PropTypes.array
};

ComAddUserForm.defaultProps = {
  excluded: [],
  disabled: []
};
