import React from 'react';
import { shallow } from 'enzyme';
import Auth from 'src/components/Auth';

import Index from 'src/pages';

jest.mock('next/dynamic', () => {
  return <Auth />;
});

it('renders the home component', () => {
  const wrapper = shallow(<Index />);
  expect(wrapper).toBeTruthy();
});
