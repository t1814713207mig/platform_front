import React from 'react';
import { Spin } from 'antd';
import styles from './index.less';

export default () => (
    <div className={styles.loading}>
        <Spin size="large" tip="加载中..." />
    </div>
);
