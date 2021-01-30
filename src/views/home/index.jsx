import React, { useEffect } from 'react';
import { Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import * as testAction from './redux/action';
import './redux/reducer';
const home = () => {
    const {
        data: { username },
    } = useSelector((state) => state.home);
    return <div>
        <Input placeholder="placeholder" />
        <Button type="primary">enter</Button>
    </div>
}
export default home;