import React from 'react';
import { shallow } from 'enzyme';

import Index from 'src/pages';

it('renders the home component', () => {
  const wrapper = shallow(<Index />);
  expect(wrapper).toBeTruthy();
});
