import React from 'react';
import Index from "./components/Index";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Index />, errorElement: <NotFound /> },
  { path: "/Login", element: <Login />, errorElement: <NotFound /> },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
