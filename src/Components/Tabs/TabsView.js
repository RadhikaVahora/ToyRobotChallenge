import React from 'react';
import TabView from '../Tab/TabView';
import './TabsView.css';
import Config from '../../Constants/Const';

class TabsView extends React.PureComponent {
    state = {
        activeTab:'Tincidunt',
    }

    onClickTabItem = (tab) =>{
        this.setState({
            activeTab:tab
        });
    }

    render(){
        return(
            <div>
                <h1 className='Title'>Tab Component</h1>
                <div className="Rectangle1">
                <ul className='TabLayout'>
                    {Config.TABNAME.map((element,index) =>(
                        <TabView 
                        key={index}
                        label ={element.name}
                        activeTab={this.state.activeTab}
                        onTabClick = {this.onClickTabItem}/>

                    ))}
                </ul>
                </div>
            </div>
        );
    }
}
export default TabsView;