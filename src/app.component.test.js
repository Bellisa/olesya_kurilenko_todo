import { shallow } from 'enzyme';
import { AppComponent } from './app.component';

describe('<AppComponent />', () => {
  it('should render with main tag', () => {
    const wrapper = shallow(<AppComponent dispatch={_ => _} />);
    expect(wrapper.find('main').length).toBe(1);
  });
});
