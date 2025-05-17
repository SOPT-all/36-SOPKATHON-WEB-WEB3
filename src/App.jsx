import { RouterProvider, createBrowserRouter } from "react-router-dom";
import pageRoutes from "@routes/pageRoutes";

const router = createBrowserRouter(pageRoutes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
