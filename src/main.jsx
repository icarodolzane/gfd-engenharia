import React from 'react';
import ReactDOM from 'react-dom/client';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './index.css';
import ErrorPage from './pages/ErrorPage';
import Root from './routes/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BlogPost from './pages/BlogPost';

const router = createBrowserRouter([
  {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
  },
  {
      path: "/services",
      element: <Services />,
  },
  {
      path: "/contact",
      element: <Contact />,
  },
  {
    path: "/info",
    element: <BlogPost />,
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
