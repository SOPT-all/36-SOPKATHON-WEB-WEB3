import Home from '@pages/Home';
import Search from '@pages/Search/SearchPage';
import routePath from '@routes/routePath';

const pageRoutes = [
  { path: routePath.HOME, element: <Home /> },
  { path: routePath.SEARCH, element: <Search /> },
];

export default pageRoutes;
