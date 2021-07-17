
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TabsView from './TabsView';

describe('TabsView', () => {
    it('should render all tabs correctly',() =>{
        const renderer = new ShallowRenderer();
        const wrapper = renderer.render(<TabsView />);
        expect(wrapper).toMatchSnapshot();
    });
});