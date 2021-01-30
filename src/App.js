import React, { lazy } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';
import { BrowserRouter, Switch } from 'react-router-dom';
import Layout from '/src/components/layout';
import router from 'src/views/router';
import './App.css';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <Layout>
          <Switch>
            {router.map(({ key, loader, path, ...rest }) => <Route component={lazy(loader)} key={path} path={path} {...rest} />)}
          </Switch>
        </Layout>
      </BrowserRouter>
      <div className="App">
        测试
      </div>
    </ConfigProvider>
    
  );
}

export default App;
