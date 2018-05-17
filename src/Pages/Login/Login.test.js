import { shallow } from 'enzyme';
import { LoginComponent } from './Login';
import { authUserAsync } from '../../store';

describe('Login', () => {
  it('should create Login', () => {
    const wrapper = shallow(<LoginComponent />);
    expect(wrapper.find('form').length).toBe(1);
  });

    it('should call dispatch() on form submit with arguments', () => {
    const event = {
      target: { email: { value: 'email@mail.com' }, password: { value: '123456' } },
      preventDefault: _ => _
    };
    const user = { email: event.target.email.value, password: event.target.password.value };
    const action = authUserAsync(user);
    const fakeDispatch = jest.fn().mockReturnValue(action);
    const wrapper = shallow(<LoginComponent dispatch={fakeDispatch} />);

    wrapper.find('form').simulate('submit', event);
    expect(fakeDispatch).toHaveBeenCalledWith(action);
  });
});
