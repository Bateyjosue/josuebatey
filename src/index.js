import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello Reactjs</div>,
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
