import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Reservation } from '../Reservation';
import { Home } from '../Home';

export const App = () => (
  <>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/reservation/:id',
    element: <Reservation />,
  },
]);
