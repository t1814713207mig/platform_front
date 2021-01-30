export default [
    {
        key: 'home',
        loader: () => import('@/src/views/home'),
        path: '/home',
    },
    {
        key: 'test1',
        loader: () => import('@/src/views/test1'),
        path: '/test1',
    },
    {
        key: 'test2',
        loader: () => import('@/src/views/test2'),
        path: '/test2',
    },
]