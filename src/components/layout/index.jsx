import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import classnames from 'classnames';
import Nav from '@/src/components/nav';
import './index.less';
const { Header, Sider, Content } = Layout;
export default ({ children, ...rest }) => {
    const { pathname } = useLocation();
    const { collapsed } = useSelector((state) => state.nav);
    return <Layout className={classnames('site-layout')}>
        <Sider width="180" collapsible collapsed={collapsed} trigger={null}>
            <Nav />
        </Sider>
        {/* <Header className="site-layout-background" style={{ padding: 0 }}>
            </Header> */}
        <Content className='site_layout_background'>
            {children}
        </Content>
    </Layout>
}