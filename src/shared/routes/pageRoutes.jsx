import Home from '@pages/Home';
import routePath from '@routes/routePath';
import FarmDetail from '@pages/farmDetail/page/FarmDetail';
import Search from '@pages/Search/SearchPage';
import Layout from '@components/Layout';
import MyPage from '@/pages/MyPage/MyPage';

const pageRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: routePath.HOME, element: <Home /> },
      { path: routePath.SEARCH, element: <Search /> },
      { path: routePath.DETAIL, element: <FarmDetail /> },
      { path: routePath.MYPAGE, element: <MyPage /> },
    ],
  },
];
export default pageRoutes;
