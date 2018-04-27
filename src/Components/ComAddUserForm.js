import PropTypes from 'prop-types';
import { registration } from '../services';
import { Redirect } from 'react-router-dom';

export class ComAddUserForm extends Component {
  constructor(props) {
    super(props);
    this.fields = [
      { label: 'id', reg: /^\d+$/, template: true },
      { label: 'email', reg: /^\w+@\w+\.[a-z]{2,}$/, template: true },
      { label: 'firstName', reg: /^[^ ]{3,20}$/, template: true },
      { label: 'lastName', reg: /^[^ ]{3,20}$/, template: true },
      {
        label: 'password',
        reg: /^[^ ]{6,20}$/,
        secure: true,
        template: true
      },
      { label: 'repeat password', reg: /^[^ ]{6,20}$/, secure: true }
    ];

    this.state = { error: '' };
    this.state = { needRedirect: false };

    this.fields.forEach(field => (this.state[field.label] = { value: this.getPropsValue(field.label) }));
    // if (this.props.user && this.props.user.id) {
    //   Object.assign(this.state, { id: this.props.user.id });
    // }
  }

  getPropsValue = (name) => {
    if (!this.props.user) {
      return '';
    }
    if (this.props.user[name]) {
      return this.props.user[name];
    }
    return '';
  }
  setValue = ({ target }) => {
    this.setState({ [target.name]: { value: target.value } });
  }
  validate = (index) => {
    const field = this.fields[index];
    const stateField = this.state[field.label];
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
    if (!this.props.user) {
      registration(res)
        .then((user) => {
          this.setState(Object.assign({}, user));
          this.setState({ needRedirect: true });
        })
        .catch(console.log);
    }
  }

  getFormValue() {
    const form = {};

    this.fields.filter(val => (val.template)).forEach((field) => {
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
        {
          this.state.needRedirect && <Redirect from="/registration" to="/success" />
        }
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
