import React, { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import classnames from 'classnames';
import './reducer';
import './index.less';
export default (props) => {
    const { collapsed, navItem } = useSelector((state) => state.nav);
    const getItem = (list) => {
        return list.map(item => {
            const { children, key, icon, name, url } = item;
            if (!children) {
                return <Menu.Item key={key}><Link to={url}>{name}</Link></Menu.Item>
            } else {
                return <Menu.SubMenu key={key} title={name}>{getItem(children)}</Menu.SubMenu>
            }
        })
    }
    return <Menu
        {...props}
        className={classnames('nav')}
        mode="inline"
    //   openKeys={openKeys}
    //   onOpenChange={onOpenChange}
    //   onSelect={onSelect}
    //   selectedKeys={selectKeys}
    >
        {getItem(navItem)}
    </Menu>
}