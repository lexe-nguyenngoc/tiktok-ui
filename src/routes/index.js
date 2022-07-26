import config from '~/config';

import DefaultLayout, { HeaderOnly } from '~/layouts';

import Home from '~/page/Home';
import Search from '~/page/Search';
import Following from '~/page/Following';
import Upload from '~/page/Upload';
import Profile from '~/page/Profile';

const routes = [
    {
        // Use DefaultLayout
        element: <DefaultLayout />,
        children: [
            {
                path: config.routes.home,
                element: <Home />,
            },
            {
                path: config.routes.search,
                element: <Search />,
            },
            {
                path: config.routes.following,
                element: <Following />,
            },
        ],
    },
    {
        // Use HeaderOnly
        element: <HeaderOnly />,
        children: [
            {
                path: config.routes.upload,
                element: <Upload />,
            },
        ],
    },
    {
        path: config.routes.profile,
        element: <DefaultLayout />,
        children: [
            {
                path: '',
                element: <Profile />,
            },
        ],
    },
    {
        path: '*',
        element: <>404! Not found</>,
    },
];

export default routes;
