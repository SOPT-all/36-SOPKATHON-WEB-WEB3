import Home from '@pages/Home';
import Search from '@pages/Search/SearchPage';
import routePath from '@routes/routePath';

import Layout from '@components/Layout';

const pageRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: routePath.HOME, element: <Home /> },
      { path: routePath.SEARCH, element: <Search /> },
    ],
  },
];
export default pageRoutes;
