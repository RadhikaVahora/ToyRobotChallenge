
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from './App';

describe('AppView', () => {
  it('should render correctly',() =>{
    const renderer = new ShallowRenderer();
    const wrapper = renderer.render(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
