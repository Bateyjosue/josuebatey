import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Components/home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'about',
        element: <div>About</div>,
      },
      {
        path: 'services',
        element: <div>Services</div>,
      },
      {
        path: 'skills',
        element: <div>Skills</div>,
      },
      {
        path: 'education',
        element: <div>Educations</div>,
      },
      {
        path: 'Experience',
        element: <div>Experience</div>,
      },
      {
        path: 'blog',
        element: <div>Blog</div>,
      },
      {
        path: 'contact',
        element: <div>Contact</div>,
      }
    ]
  }
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
