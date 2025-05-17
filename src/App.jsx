import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import pageRoutes from "@routes/pageRoutes";
import { queryClient } from "@utils/query-client";
const router = createBrowserRouter(pageRoutes);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
export default App;

