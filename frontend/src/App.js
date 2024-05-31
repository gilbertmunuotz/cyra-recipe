import React from 'react';
import Index from "./pages/Index";
import NotFound from "./components/NotFound";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import MenuDetails from './components/MenuDetails';
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