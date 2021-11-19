import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Test3 from '../index';

afterEach(cleanup);

test('does component render', () => {
const { asFragment } = render(
<Test3 />);
expect(asFragment()).toMatchSnapshot();
})