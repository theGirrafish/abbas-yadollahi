import React from 'react';
import {mount, shallow} from 'enzyme';
import WelcomePage from '../../src/components/WelcomePage';

describe('WelcomePage', () => {
  it('should match the time and date shown', () => {
    const wrapper = shallow(<WelcomePage/>);

    expect(wrapper.state().date.toLocaleTimeString()).toEqual((new Date()).toLocaleTimeString());
    expect(wrapper.state().date.toLocaleDateString()).toEqual((new Date()).toLocaleDateString());
  });

  it('should match the time and date shown', () => {
    const wrapper = mount(<WelcomePage/>);
    const time = wrapper.find('#datetime');

    time.props().onClick();
    expect(wrapper.state().displayTime).toEqual(false);
    expect(time.text()).toEqual((new Date()).toLocaleDateString());
  });
});
