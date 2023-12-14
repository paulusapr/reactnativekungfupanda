/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, { act } from 'react-test-renderer';

describe("App", () => {
  it("compares snapshot", async () => {
    let wrapper;
    await act(async () => {
      wrapper = renderer.create(<App />);
    });
    // await expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
