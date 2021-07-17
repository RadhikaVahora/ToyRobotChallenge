
import React from 'react';
import renderer from 'react-test-renderer';
import TabView from './TabView';

describe('TabView', () => {
    it('should render correctly for tab Tincidunt',() =>{
        const props={
            label: 'Tincidunt',
            onTabClick:jest.fn(),
            activeTab:'Tincidunt'
         }
        const wrapper = renderer.create(<TabView {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render correctly for tab Tincidunt',() =>{
        const props={
            label: 'Sodales',
            onTabClick:jest.fn(),
            activeTab:'Sodales'
         }
        const wrapper = renderer.create(<TabView {...props} />);
        expect(wrapper).toMatchSnapshot();

    });
   
});