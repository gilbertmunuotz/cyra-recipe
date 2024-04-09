import React from 'react';
import store from './stores/store';
import Index from "./pages/Index";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import Register from "./pages/Register";
import NotFound from "./components/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Index />, errorElement: <NotFound /> },
  { path: "/login", element: <Login />, errorElement: <NotFound /> },
  { path: "/register", element: <Register />, errorElement: <NotFound /> },
])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
