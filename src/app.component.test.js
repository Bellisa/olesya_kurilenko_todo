import { shallow } from 'enzyme';
import { AppComponent } from './app.component';
import { Pages } from './Pages/Pages';
import { ToastContainer } from 'react-toastr';

const user = { name: 'John' };
const error = 'fail';
const todo = { id: 0, title: 'test' };
const todos = [todo, todo];

describe('<AppComponent />', () => {
  it('should render with main tag', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} />);
    expect(wrapper.find('main').length).toBe(1);
  });

  it('should show p tags if user is false', () => {
    const wrapper = shallow(<AppComponent users={false} dispatch={_ => _} />);
    wrapper.setProps({ user: false });
    expect(wrapper.find('h2').length).toBe(1);
  });

  it('should show Pages component on non-null or null user', () => {
    const wrapper = shallow(<AppComponent user={user} dispatch={_ => _} />);
    wrapper.setProps({ user });
    expect(wrapper.find(Pages).length).toBe(1);
  });

  it('should call error function in ToastContainer component if set props error', () => {
    const error = jest.fn();
    const wrapper = shallow(<AppComponent error="" dispatch={_ => _} />);
    wrapper.instance().container = { error };
    wrapper.setProps({ error });
     expect(error).toHaveBeenCalled();
  });

  it('should call getUserAsync function', () => {
    const getUserAsync = jest.fn();
    const wrapper = shallow(<AppComponent dispatch={getUserAsync} />);
     expect(getUserAsync).toHaveBeenCalled();
  });
});
