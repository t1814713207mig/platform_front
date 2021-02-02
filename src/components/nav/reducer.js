import { addReducer } from '@/src/redux';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';
const initState = {
    collapsed: false,
    navItem: [
        { key: 1, parentId: null,Icon:UserOutlined, name: 'Option 1', url:'home' },
        { key: 2, parentId: null,Icon:VideoCameraOutlined, name: 'Option 2', url:'test1' },
        { key: 3, parentId: null,Icon:UploadOutlined, name: 'Option 3', url:'test2' },
        {
            key: 4, parentId: null,Icon:UserOutlined, name: 'Option 4', children: [
                { key: 5, parentId: 4, name: 'Option 4_1', url:'test1' },
                { key: 6, parentId: 4, name: 'Option 4_2', url:'test2' },
        ]}
    ]
};
const nav = (state = initState, { type, ...values }) => {
    switch (type) {
        case 'nav/switch':
            return {
                ...state,
                ...values
            };
        default:
            return state;
    }
};
addReducer({ nav });