import React from 'react';
import Home from './pages/Home'
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./components/NotFound";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Index />, errorElement: <NotFound /> },
  { path: "/home", element: <Home />, errorElement: <NotFound /> },
  { path: "/login", element: <Login />, errorElement: <NotFound /> },
  { path: "/register", element: <Register />, errorElement: <NotFound /> },
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
