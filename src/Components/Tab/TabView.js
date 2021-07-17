import React from 'react';
import './TabView.css';
import PropTypes from 'prop-types';


const TabView = (props) => {

    const onClickTabItem = () => {
        const{onTabClick,label} = props;
        onTabClick(label);
    }

    const{label,activeTab} = props;

    return(
        <div>
        <div className={label==='Tincidunt'?'Tab1Header': label==='Sodales'&& 'Tab2Header' }>
            <li onClick={onClickTabItem}>{label}</li>
        </div>
        <div className='BoxLine'/>
        <div>
            {activeTab === 'Tincidunt' &&(
                <div>
                    <div className='Tab1UnderLine'/>
                    <h1 className='HeaderTitle'>Donec vitae</h1>
                    <p className='TextContent1'>
                    Ut tincidunt tincidunt erat. Fusce convallis metus id felis luctus adipiscing. Vivamus quis mi. Nullam vel sem. 
                    Morbi ac felis.
                    </p>
                <p className='TextContent2'>
                    Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, 
                    ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Suspendisse potenti. 
                    In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                </p>
                </div>
            )}
            {activeTab === 'Sodales' &&(
                <div>
                    <div className='Tab2UnderLine'/>
                    <h1 className='HeaderTitle2'>Donec sodales sagittis</h1>
                    <p className='TextContent1'>
                    Maecenas vestibulum mollis diam.. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, 
                    a accumsan nisi mauris ac eros. Suspendisse potenti. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                    </p>
                    <button className='ButtonStyle'>Continue</button>
                </div>
            )}
        </div>
        
        </div>
    );

}

TabView.propTypes = {
    label:PropTypes.string.isRequired,
    activeTab:PropTypes.string.isRequired,
}
export default TabView;