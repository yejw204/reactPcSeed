import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import _ from 'lodash';

import { menu } from '../config';

// 当前展开的菜单项
const getSelectedKeys = (location) => {
  const { pathname } = location;
  if (pathname === '/') {
    const defaultItems = _.filter(menu, item => !!item.default);
    if (!_.isEmpty(defaultItems)) {
      return defaultItems.map(item => `/${item.key}`);
    }
  }
  return [pathname];
};

const topMenus = menu.map(item => item.key);

function getMenus(menuArray, siderFold, parentPath = '/') {
  return menuArray.map((item) => {
    const linkTo = parentPath + item.key;
    if (item.child) {
      return (
        <Menu.SubMenu
          key={linkTo}
          title={
            <span>
              {item.icon ? <Icon type={item.icon} /> : ''}
              {siderFold && topMenus.indexOf(item.key) >= 0 ? '' : item.name}
            </span>
          }
        >
          {getMenus(item.child, siderFold, `${linkTo}/`)}
        </Menu.SubMenu>
      );
    }
    return (
      <Menu.Item key={linkTo}>
        <Link to={linkTo}>
          {item.icon ? <Icon type={item.icon} /> : ''}
          {siderFold && topMenus.indexOf(item.key) >= 0 ? '' : item.name}
        </Link>
      </Menu.Item>
    );
  });
}

function Menus({
  siderFold,
  location,
  handleClickNavMenu,
  navOpenKeys = [],
  changeOpenKeys,
  darkTheme,
}) {
  const menuItems = getMenus(menu, siderFold);

  const onOpenChange = (openKeys) => {
    changeOpenKeys(openKeys);
  };

  // 加入当前已选择的菜单，已选择菜单的父菜单需要展开
  const selectedKeys = getSelectedKeys(location);
  const openKeys = navOpenKeys.concat(
    `/${selectedKeys[0].split('/')[1]}`,
  );

  const menuProps = !siderFold ? {
    onOpenChange,
    openKeys,
  } : {};

  return (
    <Menu
      {...menuProps}
      mode={siderFold ? 'vertical' : 'inline'}
      theme={darkTheme ? 'dark' : 'light'}
      onClick={handleClickNavMenu}
      defaultSelectedKeys={selectedKeys}
    >
      {menuItems}
    </Menu>
  );
}

Menus.propTypes = {
  siderFold: PropTypes.bool.isRequired,
  darkTheme: PropTypes.bool.isRequired,
  location: PropTypes.object.isRequired,
  handleClickNavMenu: PropTypes.func,
  navOpenKeys: PropTypes.array.isRequired,
  changeOpenKeys: PropTypes.func.isRequired,
};

Menus.defaultProps = {
  handleClickNavMenu: () => {},
};

export default Menus;
