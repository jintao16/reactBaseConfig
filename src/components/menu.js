import React from 'react'
import { Menu } from 'antd';
import { connect } from 'react-redux';
import { getMenu } from '../redux/actions/menu'
import { Link } from 'react-router'
import { browserHistory } from 'react-router';
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

class MainMenu extends React.Component {
    state = {
        current: 'main',
    }

    componentWillMount() {
        this.props.getMenu()
        console.log(browserHistory.getCurrentLocation())
        const path = browserHistory.getCurrentLocation().pathname
        this.setState({
            current: path.substring(1, path.length)
        })
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (

            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">
                {
                    this.props.mainMenuData.map(item => (

                        <Menu.Item key={item.menuPath} ><Link to={item.menuPath}>{item.menuName}</Link></Menu.Item>

                    ))
                }
                {
                    this.props.mainMenuDataSub.map(item2 => (
                        <SubMenu title={item2.menuName} key={item2.menuPath}>
                            {
                                item2.children.map(item4 => (
                                    <Menu.Item key={item4.menuPath}>{item4.menuName}</Menu.Item>
                                ))
                            }
                        </SubMenu>
                    ))
                }
            </Menu>
        )
    }
}


const mapStateToProps = state => {
    const { menu: { mainMenuData, mainMenuDataSub } } = state

    return {
        mainMenuData,
        mainMenuDataSub
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMenu: () => {
            dispatch(getMenu())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu)