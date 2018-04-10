export class Form extends Component {
  users = ['Admin', 'User', 'Guest'];
  state = {
    name: 'Lesya',
    age: 25,
    role: this.users[0],
    mail: false
  };
  changeInput = ({ target }) => {
    if ('checked' in target) {
      this.setState({ [target.name]: target.checked });
      return;
    }
    this.setState({ [target.name]: target.value });
  }
getFormValue() {

  }
  render() {
    const { name, age, role, mail } = this.state;
    return (
      <form action="#">
        <input
          name="name"
          type="text"
          value={name}
          onChange={this.changeInput}
        />
        <input
          name="age"
          type="number"
          value={age}
          onChange={this.changeInput}
        />
        <select
          name="role"
          value={role}
          onChange={this.changeInput}
        >
          {this.users.map(user =>
            (
              <option
                value={user}
                key={user}
              >
                {user}
              </option>
            ))}
        </select>
        <label>
          <input
            type="checkbox"
            name="mail"
            checked={mail}
            onChange={this.changeInput}
          />
          Should be mailed
        </label>
        <p>{name} {age} {role} {mail.toString()}</p>
      </form>
    );
  }
}
