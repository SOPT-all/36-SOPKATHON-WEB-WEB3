import Home from '@pages/Home';
import routePath from '@routes/routePath';
import FarmDetail from '../../pages/farmDetail/page/FarmDetail';
import Search from '@pages/Search/SearchPage';
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
  {
    path: routePath.DETAIL,
    element: <FarmDetail />,
  },
];
export default pageRoutes;
