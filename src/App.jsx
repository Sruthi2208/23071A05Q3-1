import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Fibonacci from './components/Fibonacci';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const BrowserRouterObj = createBrowserRouter([
    {
      path: "/",
      element: <Register />,
    },
    {
      path: "/welcome/:username",
      element: <Login />,
    },
    {
      path: "/log/:username",
      element: <Fibonacci />  
    }
  ]);

  return (
    <RouterProvider router={BrowserRouterObj}></RouterProvider>
  );
}

export default App;
