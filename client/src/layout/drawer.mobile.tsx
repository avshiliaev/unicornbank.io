import React from 'react';

import {Drawer, Icon} from 'antd';

class DrawerMobile extends React.Component {
    state = {visible: false};

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Icon type="menu" onClick={this.showDrawer} style={{fontSize: '16px'}}/>
                <Drawer
                    title={<div>Lagerist</div>}
                    placement="left"
                    bodyStyle={{padding: 0}}
                    closable={true}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    {this.props.children}
                </Drawer>
            </div>
        );
    }
}

export default DrawerMobile;
