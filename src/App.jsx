import Index from "./pages/Index";
import NotFound from "./components/NotFound";
import MenuDetails from './pages/MenuDetails';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Index />, errorElement: <NotFound /> },
  { path: "/recipes/:id", element: <MenuDetails />, errorElement: <NotFound /> },
])

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;