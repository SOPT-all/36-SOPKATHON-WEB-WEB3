import Home from '@pages/Home';
import routePath from '@routes/routePath';
import FarmDetail from '../../pages/farmDetail/page/FarmDetail';

const pageRoutes = [
  {
    path: routePath.HOME,
    element: <Home />,
  },
  {
    path: routePath.DETAIL,
    element: <FarmDetail />,
  },
];

export default pageRoutes;
