import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Success } from './pages/Success'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home'

import './index.css'
import { Root } from './pages/Root'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/success',
        element: <Success />,
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}
